require("dotenv").config();
// routes.js
const router = require("express").Router();
const path = require("path");
const nodemailer = require("nodemailer");

//this is the authentication for sending email.
var transport;
if (process.env.NODE_ENV === "production") {
  // all emails are delivered to destination
  transport = {
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // use TLS
    //create a .env file and define the process.env variables with your credentials.
    auth: {
      user: process.env.SMTP_TO_EMAIL,
      pass: process.env.SMTP_TO_PASSWORD,
    },
  };
} else {
  // all emails are caught by ethereal.email
  transport = {
    host: "smtp.ethereal.email",
    port: 587,
    security: process.env.STARTTLS, // start TLS security
    //create a Ethereal test account @https://ethereal.email/create
    auth: {
      user: process.env.SMTP_DEV_EMAIL,
      pass: process.env.SMTP_DEV_PASSWORD,
    },
  };
}

// call the transport function
const transporter = nodemailer.createTransport(transport);
transporter.verify((error, success) => {
  if (error) {
    //if error happened code ends here
    console.error(error);
  } else {
    //this means success
    console.log("Ready to send mail!");
  }
});

router.get("/", (req, res, next) => {
  res.status(200).json({ msg: "Working" });
});

router.post("/", (req, res, next) => {
  //make mailable object
  const mail = {
    from: process.env.SMTP_FROM_EMAIL,
    to: process.env.SMTP_TO_EMAIL,
    subject: "",
    text: `
      from:
      ${req.body.name}

      contact details
      email: ${req.body.email}
      phone: ${req.body.tel}

      message:
      ${req.body.message}`,
  };
  //send mail to recepient
  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        status: "fail",
      });
    } else {
      res.json({
        status: "success",
      });
    }
  });
});

// API routes

// Answer API requests.
router.use("/api", function (req, res) {
  res.set("Content-Type", "application/json");
  res.send('{"message":"Hello from the other side!"}');
});

// All remaining requests return the React app, so it can handle routing.
router.use("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "/example/frontend.js"));
});

module.exports = router;
