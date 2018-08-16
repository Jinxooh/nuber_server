import mg from 'mailgun-js';
import { EmbeddedMetadata } from 'typeorm/metadata/EmbeddedMetadata';

const mailgunClient = new mg({
  apiKey: process.env.MAILGUN_APIKEY || '',
  domain: 'sandboxf637e9541c1f4c95a4cee97ba0e64198.mailgun.org',
})

const sendEmail = (subject: string, html: string /*, to: string*/) => {
  const emailData = {
    from: 'cjswp122@gmail.com',
    to: 'cjswp122@gmail.com',
    subject,
    html,
  }
  return mailgunClient.messages().send(emailData);
}

export const sendVerificationEmail = (fullName: string, key: string) => {
  const emailSubject = `Hello! ${fullName}`;
  const emailBody = `Verify your email by clicking <a href="http://nuber.com/verification/${key}/">here</a>`;
  sendEmail(emailSubject, emailBody);
}