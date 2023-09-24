const fs = require('fs');
const path = require('path');
const LoggedUser = require('../models/User');
const multer = require('multer');


async function getUserInfoByToken(tokenID, req, res) {
    try {
      const findUser = await LoggedUser.findOne({
        'accessTokens.tokenID': tokenID,
      });
  
      if (!findUser) {
        return res.status(401).send({ error: 'User Not Found By Token ID' });
      }
  
      const { caseReferenceID } = req.body;
      const username = findUser.username;
  
      return { caseReferenceID, username };
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
      return null; // or handle the error as needed
    }
}

const storage = multer.diskStorage({
    destination: async (req, file, cb) => {
        const tokenID = req.cookies.tokenID;
        const { caseReferenceID, username } = await getUserInfoByToken(tokenID);
        const uploadDir = path.join(__dirname, 'CHMD', 'PreTrialFiles', caseReferenceID, username);
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        const uniqueFileName = Date.now() + '-' + file.originalname;
        cb(null, uniqueFileName);
    },
});

  
const upload = multer({ storage });



async function WSFP (req, res, next) {
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
        const { caseReferenceID } = req.body;
        
        const username = findUser.username;
        
        const writtenStatementFile = req.file;

        if (!writtenStatementFile) {
            return res.status(400).json({ error: 'No file uploaded' });
        }
        const uniqueFileName = Date.now() + '-' + writtenStatementFile.originalname;

        const uploadDir = path.join(__dirname, 'CHMD', 'PreTrialFiles', caseReferenceID, username);
        const filePath = path.join(uploadDir, uniqueFileName);
        await fs.promises.mkdir(uploadDir, { recursive: true });
        await fs.promises.writeFile(filePath, writtenStatementFile.buffer);


        res.filePath = filePath;
        next();
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = {WSFP};
