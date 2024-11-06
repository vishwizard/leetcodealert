const nodemailer = require('nodemailer');

setInterval(()=>{
    fetch("https://leetcode.com/graphql/", {
        "headers": {
          "accept": "*/*",
          "accept-language": "en-US,en;q=0.9",
          "authorization": "",
          "baggage": "sentry-environment=production,sentry-release=225cab7e,sentry-transaction=%2Fu%2F%5Busername%5D,sentry-public_key=2a051f9838e2450fbdd5a77eb62cc83c,sentry-trace_id=9ced4485ea684a51a088eb7dba8cda41,sentry-sample_rate=0.03",
          "cache-control": "no-cache",
          "content-type": "application/json",
          "pragma": "no-cache",
          "priority": "u=1, i",
          "random-uuid": "a1408f9b-66aa-5a65-c5b3-5374230e7b5e",
          "sec-ch-ua": "\"Chromium\";v=\"130\", \"Brave\";v=\"130\", \"Not?A_Brand\";v=\"99\"",
          "sec-ch-ua-arch": "\"x86\"",
          "sec-ch-ua-bitness": "\"64\"",
          "sec-ch-ua-full-version-list": "\"Chromium\";v=\"130.0.0.0\", \"Brave\";v=\"130.0.0.0\", \"Not?A_Brand\";v=\"99.0.0.0\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-model": "\"\"",
          "sec-ch-ua-platform": "\"Windows\"",
          "sec-ch-ua-platform-version": "\"15.0.0\"",
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-origin",
          "sec-gpc": "1",
          "sentry-trace": "9ced4485ea684a51a088eb7dba8cda41-8edb6554a427e18d-0",
          "uuuserid": "542edde053e8a94fecc013d1f5d6f55a",
          "x-csrftoken": "ARTgPRqecbeCSFDwhPoIMfPsdFexyVzge6Yto3SwEo78unVd4mknMRlhsc8JesDI",
          "cookie": "cf_clearance=6IcaajhryLMGoTepqFs4G89h_e88UDwTEeDrU8Olqko-1730536584-1.2.1.1-HER_fZGG_tDZ8e2XsEhpDb_tkRu_M4iBmzri54m_wEC1tZov8AtGh4FSmRaNWxcSgyJwO4_Efem5Q0O0EQuWp4nt2dNnJXajDTgCoVn_RWI3NpHTbkWe3drPjozA7rZ2NXVjWd7Kh0P078LyrOGtpLkNsxLyH8cXjQjyu5p.TAzSYE1waIbhaYeCxe7g0tgbZHLgN4532KNS.BqFM4ifKfGrVyLYeHe82.JSdcgsJ6cGggECsd5gV2.UsCSstK_.qavKG0k_UGt7RvVUx_FvWD70bwRldeGBtXCGcqdQgNq7IVN6tuA6ou9YUzBSAXY_Q45F4zFSvdYE.wHM8v0nBxY1avhTjO7.cgAr9ZIgO7uwdIgvGgUfma2mssgojWzUmTW8DgzTsL7tDbD4BEeD6LuqvZZzhqzJpg3CvNTPEL8; csrftoken=ARTgPRqecbeCSFDwhPoIMfPsdFexyVzge6Yto3SwEo78unVd4mknMRlhsc8JesDI; messages=.eJyLjlaKj88qzs-Lz00tLk5MT1XSMdAxMtVRCi5NTgaKpJXm5FQqFGem56WmKGTmKSQWK5RlFmeUZ1YlFqXoKcXqkK4_DKg_MUfBJbUSqD8WAG_JLLc:1t79cR:OyxSlXQisClXKLJHf_umdRxDjOZv5K74wJ5IRgakXqM; __stripe_mid=8acf816c-cd91-4301-982f-41a3a9346911eb4965; INGRESSCOOKIE=66327ca174b478c77f733dce398ca429|8e0876c7c1464cc0ac96bc2edceabd27; ip_check=(false, \"152.58.105.40\"); LEETCODE_SESSION=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfYXV0aF91c2VyX2lkIjoiMTExMzQyNzkiLCJfYXV0aF91c2VyX2JhY2tlbmQiOiJhbGxhdXRoLmFjY291bnQuYXV0aF9iYWNrZW5kcy5BdXRoZW50aWNhdGlvbkJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiJjYjVkYWNiMTc4ZGI2ZTY4NWNiNGU3YWExMGEzZTAxYzA3ODM1YmY1MWRkNzEzOTdjNzk4OTQxOWE3Y2IzNGEyIiwiaWQiOjExMTM0Mjc5LCJlbWFpbCI6ImRleWFtcml0OTU5QGdtYWlsLmNvbSIsInVzZXJuYW1lIjoidmlzaHdpemFyZCIsInVzZXJfc2x1ZyI6InZpc2h3aXphcmQiLCJhdmF0YXIiOiJodHRwczovL2Fzc2V0cy5sZWV0Y29kZS5jb20vdXNlcnMvYXZhdGFycy9hdmF0YXJfMTY5NzM1MDE1Ni5wbmciLCJyZWZyZXNoZWRfYXQiOjE3MzA3Mjk1MTMsImlwIjoiMTUyLjU5LjExOC4yNDQiLCJpZGVudGl0eSI6Ijc2NzVkNTliNWU4NGUwYTg3OGVlNmYwYTk3ZjkwNTZmIiwiZGV2aWNlX3dpdGhfaXAiOlsiNTQyZWRkZTA1M2U4YTk0ZmVjYzAxM2QxZjVkNmY1NWEiLCIxNTIuNTkuMTE4LjI0NCJdLCJzZXNzaW9uX2lkIjo3NzMyODE5MywiX3Nlc3Npb25fZXhwaXJ5IjoxMjA5NjAwfQ.Iz-BrnhtWr_En0xvJDTikI28p6BivX9GiZbZTv0godw; __cf_bm=MWsZekxndkRzqLlm4oc1iti8abInYq1xncwl_H9Pg9E-1730812946-1.0.1.1-9x.M61quVrgddtGYhibaSzsqgqFat3hHFVsOrZ3pacUPa4RvBj7Oox27HPMaqp1sgXyebUx8ZnD6Z.W0GC9qQQ; _dd_s=rum=0&expire=1730813855446",
          "Referer": "https://leetcode.com/u/charusingla/",
          "Referrer-Policy": "strict-origin-when-cross-origin"
        },
        "body": "{\"query\":\"\\n    query languageStats($username: String!) {\\n  matchedUser(username: $username) {\\n    languageProblemCount {\\n      languageName\\n      problemsSolved\\n    }\\n  }\\n}\\n    \",\"variables\":{\"username\":\"charusingla\"},\"operationName\":\"languageStats\"}",
        "method": "POST"
      }).then(response => response.json())
      .then(data => {
        const totalSolved = data?.data?.matchedUser?.languageProblemCount[0]?.problemsSolved;
        if (totalSolved >= 1) {
          console.log("She has completed 200 questions!");
          sendEmailNotification(totalSolved);
          clearInterval();  // Stop further checks
        } else {
          console.log(`Current count: ${totalSolved}`);
        }
      })
      .catch(error => console.error("Error fetching data:", error));
    
},1000);




// Configure SMTP transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',  // You can also use other services like 'Outlook' or a custom SMTP server
  auth: {
    user: 'deyamrit959@gmail.com',  // Replace with your email
    pass: 'xjpbimttqrfkmnsg'      // Replace with your email password or app-specific password
  }
});

// Function to send email notification
function sendEmailNotification(totalSolved) {

  const mailOptions = {
    from: 'deyamrit959@gmail.com',              // Sender email
    // to: 'charusingla38@gmail.com',
    to: 'deyamrit959@gmail.com',         // Receiver email
    subject: 'Ji Madam, Aakhir ho hi gaye 200',
    // text: 'Bohot Bohot Shubhkamnaye apko iss uplabdhi pe... isi tarah kaamyab hoti raho sadeev sakhi'
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

// sendEmailNotification();

function generateEmailContent(totalSolved) {
    return `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px; background-color: #f9f9f9;">
        <h2 style="color: #4CAF50; text-align: center;">🎉 Shabhas Madam! 🎉</h2>
        <p style="font-size: 16px; color: #555;">Ji Haan,</p>
        <p style="font-size: 16px; color: #555;">
          Aakhir aapne kar hi dikhaya <strong>${totalSolved}</strong> hogye kya baat! Congratulations!.
        </p>
        <div style="text-align: center; margin-top: 20px;">
          <a href="https://leetcode.com/charusingla/" style="text-decoration: none; color: #fff; background-color: #4CAF50; padding: 10px 20px; border-radius: 5px;">Khud Dekhlo!</a>
        </div>
        <p style="font-size: 14px; color: #999; text-align: center; margin-top: 20px;">
          Isi tarah mehnat karti raho Baccha 😂!
        </p>
      </div>
    `;
  }
  

//   sendEmailNotification(68);