import cron from 'node-cron';
import User from '../models/User.js';
import { sendBirthdayEmail } from './emailService.js';

export const initCronJob = () => {
    // Runs every day at 07:00
    cron.schedule('0 7 * * *', async () => {
        console.log('Running daily birthday check...');
        
        try {
            const today = new Date();
            const month = today.getMonth() + 1;
            const day = today.getDate();

            // Use MongoDB aggregation to match day and month regardless of year
            const celebrants = await User.aggregate([
                {
                    $project: {
                        username: 1,
                        email: 1,
                        month: { $month: "$dob" },
                        day: { $dayOfMonth: "$dob" }
                    }
                },
                { $match: { month, day } }
            ]);

            if (celebrants.length > 0) {
                celebrants.forEach(user => {
                    sendBirthdayEmail(user.email, user.username);
                });
            }
        } catch (error) {
            console.error('Cron Job Error:', error);
        }
    });
};