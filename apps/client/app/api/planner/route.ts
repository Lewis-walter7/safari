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

        console.log('Processing safari planner request for:', name, email);

        // 1. Send Confirmation to User
        try {
            const userEmailResult = await resend.emails.send({
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
            console.log('User confirmation email sent successfully:', userEmailResult);
        } catch (emailError) {
            console.error('Error sending user confirmation email:', emailError);
        }

        // 2. Send Lead Notification to Admin
        try {
            const adminEmailResult = await resend.emails.send({
                from: 'Safari Adventures <onboarding@resend.dev>',
                to: 'lewisindusa@gmail.com',
                subject: `🦁 New Safari Lead: ${name}`,
                html: `
                    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
                        <h1>New Safari Planning Request! 🎯</h1>
                        <p>You have a new lead from the Safari Planner:</p>
                        
                        <h2 style="color: #D97706; margin-top: 24px;">Contact Information</h2>
                        <ul>
                            <li><strong>Name:</strong> ${name}</li>
                            <li><strong>Email:</strong> ${email}</li>
                            <li><strong>Phone:</strong> ${phone || 'Not provided'}</li>
                        </ul>
                        
                        <h2 style="color: #D97706; margin-top: 24px;">Travel Details</h2>
                        <ul>
                            <li><strong>Travel Date:</strong> ${month} ${year}</li>
                            <li><strong>Travelers:</strong> ${travelers} people</li>
                            <li><strong>Group Type:</strong> ${travelerType}</li>
                            <li><strong>Budget:</strong> ${budget || 'Not specified'}</li>
                        </ul>
                        
                        <h2 style="color: #D97706; margin-top: 24px;">Interests</h2>
                        <p>${interests && interests.length > 0 ? interests.join(', ') : 'None specified'}</p>
                        
                        ${message ? `
                        <h2 style="color: #D97706; margin-top: 24px;">Additional Message</h2>
                        <p style="background: #f9fafb; padding: 12px; border-left: 4px solid #D97706; margin: 12px 0;">${message}</p>
                        ` : ''}
                        
                        <hr style="margin: 24px 0; border: none; border-top: 1px solid #ddd;">
                        <p style="color: #666; font-size: 12px;">
                            <strong>Submitted at:</strong> ${new Date().toLocaleString('en-US', { timeZone: 'Africa/Nairobi' })}<br>
                            This is an automated notification from your Safari Adventures website.
                        </p>
                    </div>
                `,
            });
            console.log('Admin notification email sent successfully:', adminEmailResult);
        } catch (emailError) {
            console.error('Error sending admin notification email:', emailError);
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Planner API Error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
