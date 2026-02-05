/* import { EmailTemplate } from '@/app/components/email-template';
import { Resend } from 'resend'; */
const { generateEmailHTML } = require('../../components/email-template.js');
const { Resend } = require('resend');
require('dotenv').config();



const resend = new Resend(process.env.SECRET_DATA);

async function POST(arrayData) {
  try {
    console.log('Array Data Received: ' + arrayData);
    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['eudyfperez@gmail.com'],
      subject: 'Hola Eudy, quiero hablar contigo!',
      react: generateEmailHTML(arrayData)
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}

module.exports = { POST };