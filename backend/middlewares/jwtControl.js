const jwt = require('jsonwebtoken');

function generateAccessToken(id) {
    const accessToken = jwt.sign({ id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '30m' });
    const tokenID = 'NS' + Math.random().toString(36).substring(2, 6);
    const accessTokenExpiration = new Date(Date.now() + 30 * 60 * 1000); 
    return { tokenID:tokenID, token: accessToken,  expiration: accessTokenExpiration };
}

module.exports = generateAccessToken;
