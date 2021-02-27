const db = require('../config/db.config.js')
const User = db.User;

exports.process = async (req, res) => {
    try{
        const Str = require('@supercharge/strings')
        const random = Str.random(10)  

        // update new change to database
        let updatedObject = {
            username: random
        }
        let result = await User.update(updatedObject, {returning: true, where: {type: 'update'}});
        
        // return the response to client
        if(!result) {
            res.status(500).json({
                message: "Process Error",
                error: "Can NOT Updated",
            });
        }

        res.status(200).json({
            message: "Process Success"
        });
    } catch(error){
        res.status(500).json({
            message: "Process Error",
            error: error.message
        });
    }
}