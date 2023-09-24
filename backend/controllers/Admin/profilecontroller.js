const adminmodel = require('../../models/User')

async function AdminDashboard(req,res)
{
    const tokenID = req.cookies.tokenID;
    const loggedAdmin = await adminmodel.findOne({
        "accessTokens.tokenID":tokenID,
    });
    try{
        if (!loggedAdmin)
        {
            return res.status(404).send("User Not Found");
        }
        const welcomemssg =`Welcome Admin, ${loggedAdmin.username}`;
        res.status(200).json({user: loggedAdmin, message:welcomemssg});
    }
    catch(error)
    {
        console.error('Error fetching admin data:', error);
        res.status(500).send('Internet Server Error');
    }
}

module.exports = {AdminDashboard};

