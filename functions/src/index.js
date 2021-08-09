// eslint-disable-next-line no-async-promise-executor
const functions = require('firebase-functions')
const nodemailer = require('nodemailer')
const postmarkTransport = require('nodemailer-postmark-transport')
const admin = require('firebase-admin')
const striptags = require('striptags')

try {admin.initializeApp(functions.config().firebase)} catch(e) {
  console.log('dbMessageOnUpdate initializeApp failure')
}


const postmarkKey = functions.config().postmark.key
const mailTransport = nodemailer.createTransport(postmarkTransport({
  auth: {
    apiKey: postmarkKey
  }
}))

exports.forwardMessage = functions.firestore.document('/message/{messageId}').onCreate((snapshot, context) => {
  const html="<strong>Name:</strong> "+striptags(snapshot.get('name')+"<br/><br/><strong>Email:</strong> "+striptags(snapshot.get('email'))+"<br/><br/>"

  if(snapshot.get('message')) {
    html+="<strong>Message:</strong><br/><pre>"+striptags(snapshot.get('message'))+"</pre><br/><br/>"
  }

  return sendEmail(html);
})

function sendEmail(html) {

  const mailOptions = {
    from: '"No Reply" <noreply@xxxxxxxxxx.com>',
    to: 'admin@xxxxxxxxxx.com',
    subject: 'Contact Request Sent Through Website',
    html: html
  }

  return mailTransport.sendMail(mailOptions)
    .then(() => console.log('dbMessagesOnUpdate:Welcome confirmation email'))
    .catch((error) => console.error('There was an error while sending the email:', error))
}
