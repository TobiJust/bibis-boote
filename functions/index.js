const functions = require("firebase-functions")
const admin = require("firebase-admin")
const nodemailer = require("nodemailer")
admin.initializeApp()

/**
 * Here we"re using Gmail to send
 */
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "just.tobi8@gmail.com",
    pass: "<REPLACE_ME>",
  },
})

exports.sendMail = functions.firestore
  .document("message/{messageId}")
  .onCreate((snap, context) => {
    const data = snap.data()
    // getting dest email by query string
    const dest = "just.tobi8@gmail.com"

    const mailOptions = {
      from: {
        name: data.name,
        address: data.email,
      },
      replyTo: data.email,
      to: dest,
      subject: "BiBi's Boote", // email subject
      html: `<p style="font-size: 16px;">BiBi's Boote</p>
                <h3>Request</h3>
                <p><b>Name:<b>${data.name} </p>
                <p><b>Phone number:<b>${data.phoneNumber} </p>
                <p><b>Message:<b><br />${data.message} </p>
            `, // email content in HTML
    }

    // returning result
    return transporter.sendMail(mailOptions, (erro, info) => {
      if (erro) {
        console.log(erro)
        return false
      }
      console.log("Sent!")
      return true
    })
  })
