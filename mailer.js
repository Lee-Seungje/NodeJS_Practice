const nodemailer = require('nodemailer');

const email = {
    service: 'gmail',
    auth: {
        user: 's22050@gsm.hs.kr',
        pass: 'laiksgbezzrcbmha',
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
    from: 's22050@gsm.hs.kr',
    to: `jambung@naver.com`,
    subject: '이메일 전송 테스트',
    html: `<h1>이메을에 사진을 첨부</h1>
    <img src="https://image2.compuzone.co.kr/img/recom_image/37/recom.png"/>`,
};

// for (let i = 38; i <= 56; i++) {
//     email_data.to = `s220${i}@gsm.hs.kr`;
//     send(email_data);
// }

send(email_data);
