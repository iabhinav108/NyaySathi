const cases = require('../../models/PreTrial')

async function getallcases(req,res)
{
    try
    {
        const cases = cases.find();
        res.send({
            status : "Success",
            cases : cases,
            mssg : "All users fetched succesfully!",
        });
    }
    catch(error)
    {
        res.send({
            status : "Failed",
            mssg : "Try again!",
        });
    }
}

module.exports = {getallcases};