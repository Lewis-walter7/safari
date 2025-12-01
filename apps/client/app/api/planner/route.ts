import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const formData = await request.json();
        const { email, name, month, year, travelers, travelerType, interests, budget, message, phone } = formData;

        if (!email || !name) {
            return NextResponse.json({ error: 'Name and Email are required' }, { status: 400 });
        }

        // 1. Send Confirmation to User
        await resend.emails.send({
            from: 'Safari Adventures <onboarding@resend.dev>',
            to: email,
            subject: 'We received your Safari Request! 🐘',
            html: `
                <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
                    <h1>Jambo, ${name}!</h1>
                    <p>Thank you for planning your dream safari with us. We have received your request and our team is already working on a custom itinerary for you.</p>
                    <p><strong>Your Request Details:</strong></p>
                    <ul>
                        <li><strong>Travel Date:</strong> ${month} ${year}</li>
                        <li><strong>Group:</strong> ${travelers} people (${travelerType})</li>
                        <li><strong>Interests:</strong> ${interests.join(', ')}</li>
                    </ul>
                    <p>One of our expert consultants will be in touch within 24 hours.</p>
                    <p>Asante Sana,<br>The Safari Adventures Team</p>
                </div>
            `,
        });

        // 2. Send Lead Notification to Admin (You)
        // In a real app, you would send this to 'info@safariadventureskenya.com'
        // For now, we'll send it to the same email (or a hardcoded test email) for demonstration if you verify it.
        // await resend.emails.send({
        //     from: 'Safari Adventures <onboarding@resend.dev>',
        //     to: 'your-email@example.com', 
        //     subject: `New Safari Lead: ${name}`,
        //     html: ...
        // });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Planner API Error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
