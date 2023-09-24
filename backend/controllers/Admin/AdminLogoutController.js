require('dotenv').config()
const jwt = require('jsonwebtoken')
const LoggedAdmin = require('../../models/User')


async function adminLogout(req, res) {
    const tokenID = req.cookies.tokenID;

    if (!tokenID) {
        return res.status(403).send({ error: 'Token is missing or invalid' });
    }
    try {
        const findAdmin = await LoggedAdmin.findOne({
            'accessTokens.tokenID': tokenID,
          });

        if (!findAdmin) {
            return res.status(401).send({ error: 'User Not Found By Token ID'});
        }
        const tokenIndexToRemove = findAdmin.accessTokens.findIndex(
            (token) => token.tokenID === tokenID
          );
      
          if (tokenIndexToRemove === -1) {
            return res.status(401).send({ error: 'Token Not Found' });
          }
    
        //   findUser.accessTokens.pull({ tokenID: tokenID });
          findAdmin.accessTokens.splice(tokenIndexToRemove, 1);
          await findAdmin.save();
      
          res.clearCookie('tokenID');
          res.send({ status: 'success', message: 'Logged Out Successfully!' });
    }
    catch (error) {
        console.log(error);
        res.send({ "status": "failed", "message": "Cookie Token Authorization Error" });
    }
}

module.exports ={adminLogout};