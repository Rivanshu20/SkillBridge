const nodemailer = require("nodemailer");

const mailSender = async (email, title, body) => {
    try{
            let transporter = nodemailer.createTransport({
                host:process.env.MAIL_HOST,//iska matlab hai ki hum kis host pe mail bhej rahe hai
                auth:{
                    user: process.env.MAIL_USER,//yaha pe humne apna email id dali hai
                    pass: process.env.MAIL_PASS,//yaha pe humne apna password dala hai
                }
            })


            let info = await transporter.sendMail({
                from: 'StudyNotion || CodeHelp - by Babbar',
                to:`${email}`,
                subject: `${title}`,
                html: `${body}`,
            })
            console.log(info);
            return info;
    }
    catch(error) {
        console.log(error.message);
    }
}


module.exports = mailSender;