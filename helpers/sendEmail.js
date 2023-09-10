const nodemailer = require("nodemailer");

async function sendEmail(email, varify, template) {
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "popy.mern2201@gmail.com",
      pass: "zlllihfrxkzkbfkz",
    },
  });
   
    const info = await transporter.sendMail({
      from: 'popy.mern2201@gmail.com', // sender address
      to: email, // list of receivers
      subject: "please varify your email", // Subject line
      html: template(varify), // html body
    })

}

module.exports = sendEmail