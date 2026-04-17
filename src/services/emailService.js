import transporter from '../config/mail.js';

export const sendBirthdayEmail = async (email, username) => {
    const mailOptions = {
        from: `"Company Celebrations" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: `Happy Birthday, ${username}! 🎂`,
        html: `
            <div style="font-family: sans-serif; text-align: center; padding: 20px; border: 1px solid #eee;">
                <h1 style="color: #4A90E2;">Happy Birthday!</h1>
                <p>Dear ${username},</p>
                <p>We wish you a fantastic day filled with joy and success. Thank you for being with us!</p>
                <br>
                <p>Best Regards,<br><strong>The Team</strong></p>
            </div>
        `
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log(`Email sent to: ${email}`);
    } catch (error) {
        console.error(`Mail Error for ${email}:`, error);
    }
};