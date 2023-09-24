require('dotenv').config()
const jwt = require('jsonwebtoken')
const LoggedUser = require('../../models/User')


async function userLogout(req, res) {
    const tokenID = req.cookies.tokenID;

    if (!tokenID) {
        return res.status(403).send({ error: 'Token is missing or invalid' });
    }
    try {
        const findUser = await LoggedUser.findOne({
            'accessTokens.tokenID': tokenID,
          });

        if (!findUser) {
            return res.status(401).send({ error: 'User Not Found By Token ID'});
        }
        const tokenIndexToRemove = findUser.accessTokens.findIndex(
            (token) => token.tokenID === tokenID
          );
      
          if (tokenIndexToRemove === -1) {
            return res.status(401).send({ error: 'Token Not Found' });
          }
    
        //   findUser.accessTokens.pull({ tokenID: tokenID });
          findUser.accessTokens.splice(tokenIndexToRemove, 1);
          await findUser.save();
      
          res.clearCookie('tokenID');
          res.send({ status: 'success', message: 'Logged Out Successfully!' });
    }
    catch (error) {
        console.log(error);
        res.send({ "status": "failed", "message": "Cookie Token Authorization Error" });
    }
}

module.exports ={userLogout};