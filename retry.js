const nodemailer = require('nodemailer');

// Define interval variable
const checkInterval = setInterval(() => {
  fetch("https://leetcode.com/graphql/", {
    headers: {
      "accept": "*/*",
      "content-type": "application/json",
      "x-csrftoken": "ARTgPRqecbeCSFDwhPoIMfPsdFexyVzge6Yto3SwEo78unVd4mknMRlhsc8JesDI",
      "cookie": "csrftoken=ARTgPRqecbeCSFDwhPoIMfPsdFexyVzge6Yto3SwEo78unVd4mknMRlhsc8JesDI; ..."
    },
    body: JSON.stringify({
      query: `
        query languageStats($username: String!) {
          matchedUser(username: $username) {
            languageProblemCount {
              languageName
              problemsSolved
            }
          }
        }
      `,
      variables: {
        username: process.env.username
      }
    }),
    method: "POST"
  })
  .then(response => response.json())
  .then(data => {
    const totalSolved = data?.data?.matchedUser?.languageProblemCount[0]?.problemsSolved;
    if (totalSolved >= 200) {  // Update milestone count here if needed
      console.log("She has completed 200 questions!");
      sendEmailNotification(totalSolved);
      clearInterval(checkInterval);  // Stop further checks
    } else {
      console.log(`Current count: ${totalSolved}`);
    }
  })
  .catch(error => console.error("Error fetching data:", error));

}, 4000); // Set interval to check every 4 hours


// Configure SMTP transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.user,
    pass: process.env.user_pass
  }
});

// Function to send email notification
function sendEmailNotification(totalSolved) {
  const mailOptions = {
    from: process.env.user,
    to: process.env.madamkaemail,
    subject: 'Ji Madam, Aakhir ho hi gaye 200',
    html: generateEmailContent(totalSolved)
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
    } else {
      console.log('Email sent:', info.response);
    }
  });
}

function generateEmailContent(totalSolved) {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px; background-color: #f9f9f9;">
      <h2 style="color: #4CAF50; text-align: center;">🎉 Shabhas Madam! 🎉</h2>
      <p style="font-size: 16px; color: #555;">Ji Haan,</p>
      <p style="font-size: 16px; color: #555;">
        Aakhir aapne kar hi dikhaya <strong>${totalSolved}</strong> hogye kya baat! Congratulations!.
      </p>
      <div style="text-align: center; margin-top: 20px;">
        <a href="https://leetcode.com/${process.env.username}/" style="text-decoration: none; color: #fff; background-color: #4CAF50; padding: 10px 20px; border-radius: 5px;">Khud Dekhlo!</a>
      </div>
      <p style="font-size: 14px; color: #999; text-align: center; margin-top: 20px;">
        Isi tarah mehnat karti raho Baccha 😂!
      </p>
    </div>
  `;
}
