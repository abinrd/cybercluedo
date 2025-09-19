// utils/sendScoreEmail.ts
import nodemailer from "nodemailer";
import { render } from "@react-email/render";
import {Cyber} from "@/components/email/mail";

export async function sendScoreEmail(name: string, score: string) {
  // configure transport
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // use true if port 465
    auth: {
      user: "abinrd01@gmail.com",
      pass: process.env.SMTP_PASS, // <-- do NOT wrap in quotes
    },
  });

  // render email HTML
  const html = await render(<Cyber name={name} score={score} />);

  // send the message
  await transporter.sendMail({
    from: "abinrd@abinthomas.com",
    to: [
      "abinrajudaniel2027@cy.sjcetpalai.ac.in",
      "lisamariamphilip2027@cy.sjcetpalai.ac.in",
      "sonmariyasiju2027@cy.sjcetpalai.ac.in",
      "abinrd01@gmail.com",
      "abinthomasggllc@gmail.com",
    ],
    subject: "Cyber Cluedo Score Notification",
    html,
  });
}
