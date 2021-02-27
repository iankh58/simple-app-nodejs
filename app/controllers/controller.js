const db = require('../config/db.config.js')
const User = db.User;

exports.retrieveAllUsers = (req, res) => {
// find all Customer information from 
    User.findAll()
        .then(userInfos => {
            res.status(200).json({
                message: "Get all User' Infos Successfully!",
                customers: userInfos
            });
        })
        . catch(error => {
          // log on console
          console.log(error);

          res.status(500).json({
              message: "Error!",
              error: error
          });
        });
}

exports.updateById = async (req, res) => {
    try{
        let userId = req.params.id;
        let user = await User.findByPk(userId);
    
        if(!user){
            // return a response to client
            res.status(404).json({
                message: "Not Found for updating a user with id = " + userId,
                user: "",
                error: "404"
            });
        } else {    
            // update new change to database
            let updatedObject = {
                username: req.body.username
            }
            let result = await User.update(updatedObject, {returning: true, where: {id: userId}});
            
            // return the response to client
            if(!result) {
                res.status(500).json({
                    message: "Error -> Can not update a User with id = " + req.params.id,
                    error: "Can NOT Updated",
                });
            }

            res.status(200).json({
                message: "Update successfully a User with id = " + userId,
                user: updatedObject,
            });
        }
    } catch(error){
        res.status(500).json({
            message: "Error -> Can not update a User with id = " + req.params.id,
            error: error.message
        });
    }
}