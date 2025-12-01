import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const { email } = await request.json();

        if (!email) {
            return NextResponse.json({ error: 'Email is required' }, { status: 400 });
        }

        // Send Welcome Email to User
        await resend.emails.send({
            from: 'Safari Adventures <onboarding@resend.dev>', // Update this with your verified domain later
            to: email,
            subject: 'Welcome to Safari Adventures Kenya! 🦁',
            html: `
                <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
                    <h1>Welcome to the Pride! 🌍</h1>
                    <p>Thank you for joining our community. We're thrilled to have you with us.</p>
                    <p>As promised, here is your <strong>Ultimate Safari Packing Guide</strong>:</p>
                    <ul>
                        <li>✅ Lightweight, neutral-colored clothing</li>
                        <li>✅ Comfortable walking shoes</li>
                        <li>✅ Sun hat and sunglasses</li>
                        <li>✅ High-quality camera and binoculars</li>
                        <li>✅ Sunscreen and insect repellent</li>
                    </ul>
                    <p>Stay tuned for exclusive offers and travel tips!</p>
                    <p>Best regards,<br>The Safari Adventures Team</p>
                </div>
            `,
        });

        // Notify Admin about new newsletter signup
        await resend.emails.send({
            from: 'Safari Adventures <onboarding@resend.dev>',
            to: 'lewisindusa@gmail.com',
            subject: '🎉 New Newsletter Subscriber',
            html: `
                <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
                    <h1>New Newsletter Signup! 📧</h1>
                    <p>Someone just subscribed to your newsletter:</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Subscribed at:</strong> ${new Date().toLocaleString('en-US', { timeZone: 'Africa/Nairobi' })}</p>
                    <hr style="margin: 20px 0; border: none; border-top: 1px solid #ddd;">
                    <p style="color: #666; font-size: 12px;">This is an automated notification from your Safari Adventures website.</p>
                </div>
            `,
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Newsletter API Error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
