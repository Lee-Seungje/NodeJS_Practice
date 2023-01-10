const express = require('express');
const app = express();

const uuidAPIKey = require('uuid-apikey');

const server = app.listen(3001, () => {
    console.log('Start Server : localhost:3001');
});

const key = {
    apiKey: '91RRTMY-CE4MGPV-GW6X4WM-FE04WA7',
    uuid: '48718d53-6389-485b-870d-d2727b804e28',
};

app.get('/api/users/:apikey/:type', async (req, res) => {
    let { apikey, type } = req.params;
    if (!uuidAPIKey.isAPIKey(apikey) || !uuidAPIKey.check(apikey, key.uuid)) {
        res.send('apikey is not vaild.');
    } else {
        let data = {
            ltr: '이태랑',
            kgs: '김경수',
        };
        res.send(data);
    }
    res.send('ok');
});
