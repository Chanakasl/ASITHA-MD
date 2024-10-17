const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳=DihkUaTD#E03QrwNowZ-ZJ19PlmJaNBVOT5YQitNhUNoeQK-HOAU",
MONGODB: process.env.MONGODB || "mongodb+srv://Chanakasampath:<VTnIKhpDlL7kRMpC>@cluster0.jizuo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",//enter mongo db url
};
