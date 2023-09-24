const UserModel = require('../../models/User')

async function Dashboard(req, res) {
    const tokenID = req.cookies.tokenID;
    const loggedUser = await UserModel.findOne({
        'accessTokens.tokenID': tokenID,
      });
    try {
    
        if (!loggedUser) {
          return res.status(404).send('User not found');
        }
    
        const welcomeMessage = `Welcome, ${loggedUser.username}`;
        res.status(200).json({ user: loggedUser, message: welcomeMessage });
      } catch (error) {
        console.error('Error fetching user data:', error);
        res.status(500).send('Internal Server Error');
      }
    
}

module.exports ={Dashboard};