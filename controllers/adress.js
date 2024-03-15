const adressModel  = require('../models/adress');

const createAdress = async (req, res)=>{
    try{
        const { nombre_pais, departamento, municipio, nomenclatura, isActive} = req.body;
        console.log(req.boy);
        const adress = new adressModel({
            nombre_pais, 
            departamento, 
            municipio, 
            nomenclatura, 
            isActive
        });
        const newAdress = await adress.save();
        res.status(201).json(newAdress);
    }catch(err){
        res.status(500).json({err: "Something went wrong"});
    }
}

module.exports = {createAdress};