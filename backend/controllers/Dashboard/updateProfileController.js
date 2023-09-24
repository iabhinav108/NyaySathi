const UserModel = require('../../models/User')
const bcrypt = require('bcrypt')
const cookie = require('cookie')

async function updateUserProfile(req, res) {
    const tokenID = req.cookies.tokenID;
    const loggedUser = await UserModel.findOne({
        'accessTokens.tokenID': tokenID,
      });
    const {
        address,
        phoneNumber, 
        city, 
        state, 
        pincode } 
        = req.body;

    if (!loggedUser) {
        res.send({ "status": "failed", "message": "User Profile Error. Please Try again!" });
    } else {
        try{
            if(address!==''){
            loggedUser.address=address;
            }
            if(phoneNumber!==''){
                loggedUser.phone_number=phoneNumber;
            }
            if(state!==''){
                loggedUser.state=state;
            }
            if(city!==''){
                loggedUser.city=city;
            }
            if(pincode!==''){
                loggedUser.pincode=pincode;
            }

            await loggedUser.save();
            res.send({ "status": "success", "message": "Updated Profile Successfully!"});
        }catch(err){
            res.send({ "status": "failure", "message": "Your Profile was not updated due to an unknown error!"});
        }
    }

}
module.exports = {updateUserProfile};