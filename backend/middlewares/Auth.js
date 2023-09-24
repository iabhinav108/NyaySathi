require('dotenv').config()
const jwt = require('jsonwebtoken');
const authUser = require('../models/User');

const verifyAuth = async (req, res, next) => {

    const tokenID = req.cookies.tokenID;

    if (!tokenID) {
        return res.status(403).send({ error: 'Token is missing or invalid' });
    }

    try {
        const findUser = await authUser.findOne({
            'accessTokens.tokenID': tokenID,
          });

        if (!findUser) {
            return res.status(401).send({ error: 'User Not Found By Token ID'});
        }
        const matchedIndex = findUser.accessTokens.findIndex((token) => token.tokenID === tokenID);
        jwt.verify(
            findUser.accessTokens[matchedIndex].token,
            process.env.ACCESS_TOKEN_SECRET,
            (err, decoded) => {
                if (err) return res.status(403).send({ error: 'Token Not Valid' ,err:err});
                req.userID = decoded.userID;
                next();
            }
        );
    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
};

module.exports = verifyAuth;
