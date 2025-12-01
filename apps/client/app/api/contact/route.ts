import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const formData = await request.json();
        const { name, email, phone, package: selectedPackage, destination, travelDates, groupSize, message } = formData;

        if (!email || !name) {
            return NextResponse.json({ error: 'Name and Email are required' }, { status: 400 });
        }

        console.log('Processing contact inquiry from:', name, email);

        // 1. Send Confirmation to User
        try {
            const userEmailResult = await resend.emails.send({
                from: 'Safari Adventures <onboarding@resend.dev>',
                to: email,
                subject: 'Thank you for contacting Safari Adventures! 🦒',
                html: `
                    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
                        <h1>Jambo, ${name}!</h1>
                        <p>Thank you for reaching out to Safari Adventures Kenya. We have received your inquiry and one of our safari experts will get back to you within 24 hours.</p>
                        
                        <h2 style="color: #D97706; margin-top: 24px;">Your Inquiry Details:</h2>
                        <ul>
                            ${selectedPackage ? `<li><strong>Package:</strong> ${selectedPackage}</li>` : ''}
                            ${destination ? `<li><strong>Destination:</strong> ${destination}</li>` : ''}
                            ${travelDates ? `<li><strong>Travel Dates:</strong> ${travelDates}</li>` : ''}
                            ${groupSize ? `<li><strong>Group Size:</strong> ${groupSize}</li>` : ''}
                            ${phone ? `<li><strong>Phone:</strong> ${phone}</li>` : ''}
                        </ul>
                        
                        ${message ? `
                        <h2 style="color: #D97706; margin-top: 24px;">Your Message:</h2>
                        <p style="background: #f9fafb; padding: 12px; border-left: 4px solid #D97706; margin: 12px 0;">${message}</p>
                        ` : ''}
                        
                        <p style="margin-top: 24px;">In the meantime, feel free to:</p>
                        <ul>
                            <li>Browse through our <a href="${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/packages" style="color: #D97706;">Safari Packages</a></li>
                            <li>Explore <a href="${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/destinations" style="color: #D97706;">Top Destinations</a></li>
                            <li>Call us directly at +254 702 075 876 or +254 713 091 092</li>
                        </ul>
                        
                        <p style="margin-top: 24px;">Asante Sana,<br>The Safari Adventures Team</p>
                    </div>
                `,
            });
            console.log('User confirmation email sent successfully:', userEmailResult);
        } catch (emailError) {
            console.error('Error sending user confirmation email:', emailError);
        }

        // 2. Send Inquiry Notification to Admin
        try {
            const adminEmailResult = await resend.emails.send({
                from: 'Safari Adventures <onboarding@resend.dev>',
                to: 'lewisindusa@gmail.com',
                subject: `📞 New Contact Inquiry: ${name}`,
                html: `
                    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
                        <h1>New Contact Form Submission! 📬</h1>
                        <p>You have received a new inquiry from the contact page:</p>
                        
                        <h2 style="color: #D97706; margin-top: 24px;">Contact Information</h2>
                        <ul>
                            <li><strong>Name:</strong> ${name}</li>
                            <li><strong>Email:</strong> ${email}</li>
                            <li><strong>Phone:</strong> ${phone || 'Not provided'}</li>
                        </ul>
                        
                        <h2 style="color: #D97706; margin-top: 24px;">Inquiry Details</h2>
                        <ul>
                            <li><strong>Package:</strong> ${selectedPackage || 'Not specified'}</li>
                            <li><strong>Destination:</strong> ${destination || 'Not specified'}</li>
                            <li><strong>Travel Dates:</strong> ${travelDates || 'Not specified'}</li>
                            <li><strong>Group Size:</strong> ${groupSize || 'Not specified'}</li>
                        </ul>
                        
                        ${message ? `
                        <h2 style="color: #D97706; margin-top: 24px;">Message</h2>
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
        console.error('Contact API Error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
