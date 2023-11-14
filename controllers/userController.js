

import axios from "axios";
import nodemailer from "nodemailer";
/**
 * 
 * get all user 
 * 
 */

export const getAlluser = (req, res) => {
    res.status(200).json(req.body);
};
/**
 * Create user 
 *  
 */
export const createuser = (req, res) => {
    res.status(200).json(req.body);
};


/** 
* create mail transporter 
* 
*/
export const registerUser = async (req, res) => {
    const transport = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: process.env.MAIL_PORT,
      auth: {
        user: process.env.MAIL_ADDRESS,
        pass: process.env.MAIL_PASS,
      },
    })


   await transport.sendMail({
      from : ` WebGeniusBD <${process.env.MAIL_ADDRESS}>`,
      subject : "testing mail ",
      to : req.body.email,
      text : `Hello ${req.body.name} , You are ${req.body.age} years old & You are ${req.body.skill} developer `,
    });


  //  await axios.get(`http://bulksmsbd.net/api/smsapi?api_key=DbjOeIXJzCF2f8FYPIzw&type=text&number=(${req.body.cell})&senderid=8809617612989&message= Hi ${req.body.name},You are ${req.body.age}, & You are ${req.body.skill} developer`);

    res.status(200).json(req.body);
};









