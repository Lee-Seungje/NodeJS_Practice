const nodemailer = require('nodemailer');
const email = {
    host: 'smtp.mailtrap.io',
    port: 2525,
    auth: {
        user: '8545cc3391356e',
        pass: '0dfd3af24d4ea0',
    },
};

const send = async (opction) => {
    nodemailer.createTransport(email).sendMail(opction, (error, info) => {
        if (error) {
            console.log(error);
        } else {
            console.log(info);
            return info.response;
        }
    });
};

let email_data = {
    from: 'moondgod@gmail.com',
    to: 'moondgod@gmail.com',
    subject: '김경수도 못하는걸 해버렸다고??.',
    text: 'node.js 이메일 보내기 김경수는 못한대요 ㅋ',
};

send(email_data);
