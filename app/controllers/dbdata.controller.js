const db = require('../configs/db.config.js')
const DbData = db.DbData;

exports.process = async (req, res) => {
    let keyParam = req.params.key;

    DbData.findAll({
        where: {
            key : keyParam
        }
    }).then(
        dbDatas => {
            dbDatas.map(dData =>{
                const Str = require('@supercharge/strings')
                const random = Str.random(10)  

                // update new change to database
                let updatedObject = {
                    content: random,
                    updatedOn: new Date()
                }
                let result = DbData.update(updatedObject, {returning: true, where: {id: dData.id}});
                
                // return the response to client
                if(!result) {
                    res.status(500).json({
                        message: "Process Error",
                        error: "Can NOT Updated",
                    });
                }

                res.status(200).json({
                    key: keyParam,
                    message: "Process Success"
                });
            })
        }
    ). catch(error => {
        // log on console
        console.log(error);

        res.status(500).json({
            message: "Process Error",
            error: error
        });
    });
}