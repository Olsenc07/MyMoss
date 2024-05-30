const express = require('express');
const multer = require('multer');
const sgMail = require('@sendgrid/mail');
const dotenv = require('dotenv');
dotenv.config();

const router = express.Router();

const sendGridApiKey = process.env['SENDGRID_API_KEY'];

if (!sendGridApiKey) {
  throw new Error('SENDGRID_API_KEY is not defined');
}

sgMail.setApiKey(sendGridApiKey);

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Define a type that includes attachments
const EmailWithAttachments = {
  to: String,
  from: String,
  reply_to: String,
  subject: String,
  text: String,
  html: String,
  attachments: Array,
};

const Attachment = {
  content: String,
  filename: String,
  type: String,
  disposition: String,
  content_id: String,
};

router.post('/email', upload.single('file'), async (req, res) => {
  try {
    const { text, fromName, fromEmail } = req.body;
    const htmlText = text.replace(/\n/g, '<br>');

    // Declare msg as EmailWithAttachments to include attachments
    const msg = new EmailWithAttachments({
      to: process.env['email'],
      from: `erik@neslo.ca`,
      reply_to: `<${fromEmail}> `,
      subject: `MyMoss inquiry from ${fromName}`,
      text: text,
      html: htmlText,
      attachments: [],
    });

    if (req.file) {
      const attachment = new Attachment({
        content: req.file.buffer.toString('base64'),
        filename: req.file.originalname,
        type: req.file.mimetype,
        disposition: 'attachment',
      });
      // Push the attachment to the array
      msg.attachments.push(attachment);
    }

    try {
      await sgMail.send(msg);
      res.send('Email sent successfully');
    } catch (error) {
      console.error('Failed to send email', error);
      if (error instanceof Error) { // Type guard
        console.error('Error message:', error.message);
      } else {
        console.error('An unknown error occurred:', error);
      }
      res.status(500).send('Failed to send email');
    }
  } catch (error) {
    console.error('Failed to send email:', error);
    // Sending error details in the response; consider security implications in production
    res.status(500).send(`Failed to send email: ${error}`);
  }
});

module.exports = router;
