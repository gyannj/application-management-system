// const sgMail = require('@sendgrid/mail');
// sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// function sendApprovalEmail(userEmail) {
//   const msg = {
//     to: userEmail,
//     from: 'your-email@example.com', // Replace with your verified sender
//     subject: 'Application Approved!',
//     html: '<p>Your application has been approved. Congratulations!</p>',
//   };

//   sgMail.send(msg)
//     .then(() => console.log('Email sent'))
//     .catch((error) => console.error('Error sending email:', error.toString()));
// }

// // Call this function when an application is approved
// sendApprovalEmail('recipient@example.com');
