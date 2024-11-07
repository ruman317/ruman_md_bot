const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID,
ALIVE_IMG: process.env.ALIVE_IMG || "https://dribbble.com/shots/16141825-Gojo-Satoru",
    ALIVE_MS: process.env.ALIVE_MSG || "I'm Alive Now",
};
