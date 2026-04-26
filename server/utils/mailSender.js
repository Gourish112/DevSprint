const { fetch } = require("undici");
global.fetch = fetch;
const { BrevoClient } = require('@getbrevo/brevo');
require('dotenv').config();
const brevo = new BrevoClient({
  apiKey: process.env.BREVO_API_KEY,
});

const mailSender = async (email, title, body) => {
  try {
    const result = await brevo.transactionalEmails.sendTransacEmail({
      subject: title,
      htmlContent: body,
      sender: {
        name: "DevSprint",
        email: process.env.BREVO_SENDER_EMAIL, 
      },
      to: [
        {
          email: email,
        },
      ],
    });

    console.log("Email sent. Message ID:", result.messageId);
    return result;

  } catch (error) {
    console.error("Brevo Error:", error.message);
    return error.message;
  }
};

module.exports = mailSender;