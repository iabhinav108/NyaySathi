const LoggedUser = require('../../models/User')
const {PreTrialApplication} = require('../../models/PreTrial')

async function getallPTA(req,res)
{
    
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
    const name = findUser.full_name
    const trials = await PreTrialApplication.find({byIndividual:name});

    try
    {

        res.send({
            status : "Success",
            trialList : trials,
            mssg : "All users fetched succesfully!",
        });
    }
    catch(error)
    {
        res.send({
            status : "Failed",
            mssg : "Try again!",
            error:error.message,
        });
    }
}

module.exports = {getallPTA};