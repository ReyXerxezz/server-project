const userModel  = require('../models/user');

const createUser = async (req, res)=>{
    try{
        const { user_name, lastname, email, password} = req.body;
        console.log(req.boy);
        const user = new userModel({
            user_name,
            lastname,
            email,
            password
        });
        const newUser = await user.save();
        res.status(201).json(newUser);
    }catch(err){
        res.status(500).json({err: "Something went wrong"});
    }
}

module.exports = {createUser};