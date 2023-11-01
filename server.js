const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = 3000;

// Middleware
app.use(express.json());
app.use(cors());

const transporter = nodemailer.createTransport({
    service: 'yahoo',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

app.post('/sendmail', async (req, res) => {
    const { name, email, subject, message } = req.body;

    const mailOptions = {
        from: email,
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
        res.status(500).send('Error sending email: ' + error.message);
    }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
