const sgMail = require('@sendgrid/mail');
require('dotenv').config();

const { SENDGRID_API_KEY } = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

const sendEmail = async (data) => {
    try {
        const mail = {
            ...data,
            from: {
                name: 'test',
                email: 'vladymyrbashtanuk@meta.ua',
            }
        };
    await sgMail.send(mail);
    return true;
    } catch (error) {
        console.log(error)
    }
    
};

module.exports = sendEmail;