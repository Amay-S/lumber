const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const dotenv = require('dotenv');


dotenv.config();

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

// Nodemailer transport setup
const transporter = nodemailer.createTransport({
    logger: true,
    debug: true,
    port: 465,
    service: 'yahoo',
    auth: {
        user: process.env.YAHOO_USER,   // Your yahoo.ca email address
        pass: process.env.YAHOO_PASS    // Your Yahoo password or App Password
    }
});

app.post('/sendmail', async (req, res) => {
    const { name, email, subject, message } = req.body;

    const mailOptions = {
        from: `${name} <${email}>`,  // This makes it appear visually as from the sender
        replyTo: email,  // This ensures that if the recipient clicks "Reply", it goes to the sender's email
        to: process.env.EMAIL_USER,
        subject: `Contact Form: ${subject}`,
        text: `
            From: ${name} <${email}>
            
            ${message}
        `
    };
    

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).send('Email sent successfully');
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: 'Error sending email: ' + error.message });
    }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

