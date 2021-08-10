const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");
admin.initializeApp();

/**
 * Here we"re using Gmail to send
 */
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "just.tobi8@gmail.com",
    pass: "<REPLACE_ME>",
  },
});

exports.sendMail = functions.firestore
    .document("message/{messageId}")
    .onCreate((snap, context) => {
      // getting dest email by query string
      const dest = "just.tobi8@gmail.com";

      const mailOptions = {
        from: "Your Account Name just.tob8@gmail.com",
        to: dest,
        subject: "I'M A PICKLE!!!", // email subject
        html: `<p style="font-size: 16px;">BiBi's Boote</p>
                <br />
                <p> <b>Email: </b>${snap.data()} </p>
            `, // email content in HTML
      };

      // returning result
      return transporter.sendMail(mailOptions, (erro, info) => {
        if (erro) {
          console.log(erro);
          return;
        }
        console.log("Sent!");
      });
    });
