const userModel  = require('../models/user');

const createUser = async (req, res)=>{
    try{
        const { user_name, lastname, email, password, active_status, role} = req.body;
        console.log(req.boy);

        const avatar = req.file ? req.file.filename : null;
        console.log(avatar);

        const user = new userModel({
            user_name,
            lastname,
            email,
            password,
            active_status, 
            role,
            avatar
        });
        const newUser = await user.save();
        res.status(201).json(newUser);
    }catch(err){
        res.status(500).json({err: "Something went wrong"});
    }
};

const login = async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await userModel.findOne({ email, password });
      if (user) {
        res.status(200).json({ message: "Login successful", user });
      } else {
        res.status(401).json({ message: "Invalid credentials" });
      }
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ message: "Internal server error" });
    }
  };

const getListUsers = async (req, res) => {
    try {
        console.log("Listar usuarios");
        const users = await userModel.find()
        res.status(200).json(users);
    } catch (error) {
        console.log(error.message);
        res.status(400).json({message: error.message});
    }
};

const getById = async (req, res) => {
    try {
        const { id } = req.params;
        console.log(`id: ${id}`);
        const user = await userModel.findById(id);
        console.log(user);
        res.status(200).json(user);
    } catch (error) {
        console.log(error.message);
        res.status(400).json({message: error.message});
    }
};

const editUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { user_name, lastname, email, password} = req.body;
        const user = await userModel.findByIdAndUpdate(
            id,
            {user_name, lastname, email, password},
        );
        res.status(200).json(user);
    } catch (error) {
        console.log(error.message);
        res.status(400).json({message: error.message});
    }
};

const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        await userModel.findByIdAndDelete(id);
        res.status(200).json({message: "User deleted"});
    } catch (error) {
        console.log(error.message);
        res.status(400).json({message: error.message});
    }
};

module.exports = {createUser, getListUsers, getById, editUser, deleteUser, login};