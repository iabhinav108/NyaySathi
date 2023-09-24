const { PreTrialApplication } = require('../../models/PreTrial');
const LoggedUser = require('../../models/User')

async function preTrialDetail(req, res) {
  const { caseReferenceID, againstIndividual, againstIndividualEmail,writtenStatementFilePath } = req.body;

  try {

    const tokenID = req.cookies.tokenID;

    if (!tokenID) {
        return res.status(403).send({ error: 'Token is missing or invalid' })
    }

    const findUser = await LoggedUser.findOne({
      'accessTokens.tokenID': tokenID,
    });

    if (!findUser) {
      return res.status(401).send({ error: 'User Not Found By Token ID'});
    }

    const byIndividual = findUser.full_name;

    const newCase = new PreTrialApplication({
      caseReferenceID,
      byIndividual,
      againstIndividual,
      againstIndividualEmail,
      writtenStatementFilePath,
    });

    // Save the new instance to the database
    await newCase.save();

    res.send({status: 'success', message: 'Sucess! You have now registered for a pre trial Conference.' });
  } catch (error) {
    res.send({status: 'failure', message: 'Server error', error:error });
  }
}

module.exports = { preTrialDetail };
