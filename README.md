Birthday Reminder Celebration Bot

Birthday Bot is a lightweight, automated solution for businesses and communities to track birthdays and send personalized well-wishes. Gone are the days of manually scouring Excel sheets; this application automates the entire lifecycle from data collection via a clean UI to automated email delivery.

Features

- Automated Daily Announcements: A robust cron job runs every morning at 7:00 AM to check for celebrants.
- Unique User Registration: A simple, mobile-responsive UI to collect names, emails, and dates of birth.
- Data Integrity: Built-in logic to ensure emails are unique, preventing duplicate entries.
- Modern Tech Stack: Leverages Node.js, Express, MongoDB, and Nodemailer for high performance and reliability.
- Service-Oriented Architecture: Clean separation between database logic, email services, and cron scheduling.

Quick Start / Installation Requirements
- [Node.js](https://nodejs.org/) (v16.x or higher)
- [MongoDB](https://www.mongodb.com/) (Local instance or Atlas Cluster)
- A Gmail account (for Nodemailer)

Installation Steps
    Clone the repository:
    git clone https://github.com/Chidiogoezeh/Third-semester-month-2.git
    cd Third-semester-month-2 +(rename to whatever you like)

Install dependencies:
    npm init -y
    npm install

Configuration
Create a .env file in the root directory and add your credentials:
    PORT=3000
    DB_URI=your_mongodb_connection_string
    EMAIL_USER=your-email@gmail.com
    EMAIL_PASS=your-app-specific-password
Note: For Gmail, you must generate an App Password in your Google Account security settings.

Running the App
    npm start or node server.js

UI Interaction
- Open your browser to http://localhost:3000.
- Enter the user's Name, Email, and Date of Birth.
- Click Save Reminder.

Backend Logic;
The bot uses a cron job scheduled with the following pattern:
0 7 * * * (Every day at 7:00 AM)

Database Schema
Data is stored in MongoDB with the following structure in json format:
    {
    "username": "Chidiogo Ezeh",
    "email": "example@email.com",
    "dob": "1995-04-18T00:00:00.000Z"
    }

License
Distributed under the MIT License. See LICENSE for more information.