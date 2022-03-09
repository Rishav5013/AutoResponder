const nodemailer = require("nodemailer")

const transporter = nodemailer.createTransport({
    service: "hotmail",
    auth: {
        user: "abc121@outlook.com",
        password:"1234567"
    }
});

const options = {
    from:"abc121@outlook.com",
    to:"defg5678@outlook.com",
    subject: "Booking Confirmation",
    text:"Thankyou for Booking your ticket"
};

transporter.sendMail(options, function(err, info){
    if(err){
        console.log(err);
        return;
    }
    console.log("Email Sent : "+ info.response);
})