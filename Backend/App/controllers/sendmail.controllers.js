const express = require("express");
var nodemailer = require("nodemailer");
// const nodemailer=require('nodemailer')

exports.sendMail = (req, res) => {
  const { email, emaillink } = req.body;

  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "survello101@gmail.com",
      pass: "uebhqfzzpbjxpcbl",
    },
  });

  res.status(200).send(JSON.stringify("This is my email"));

  var mailOptions = {
    from: "SurvEllo",
    to: `${email}`,
    subject: "Survey",
    text: `Good day, \n \n a coordinator fron SurvEllo is inviting you to take a quick survey with us. Kindly follow
            the following link: ${emaillink} to register then take the survey \n \n Kind regards \n SurvEllo Team`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      res.status(400).json({
        error: "Could not send" + error,
      });
    } else {
      console.log("Email sent");
      res.status(200).send(info.response);
    }
    //res.status(200).send("Email succesfully sent")
  });
};
