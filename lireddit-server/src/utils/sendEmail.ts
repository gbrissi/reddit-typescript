"use strict";
import nodemailer from "nodemailer";

export async function sendEmail(to: string, html: string) {

  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, 
    auth: {
      user: 'v4zqiqbyq63vjvzl@ethereal.email', 
      pass: 'Zju6BEDaxvHuG63h5T', 
    },
  });


  let info = await transporter.sendMail({
    from: '"Fred Foo 👻" <foo@example.com>', 
    to: to, 
    subject: "Change password", 
    html
  });

  console.log("Message sent: %s", info.messageId);
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}

