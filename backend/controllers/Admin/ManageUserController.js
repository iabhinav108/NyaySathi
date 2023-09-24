const users = require('../../models/User')

async function getallusers(req,res)
{
    try
    {
        const users = users.find();
        res.send({
            status : "Success",
            users : users,
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

module.exports = {getallusers};