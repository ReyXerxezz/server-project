const mongoose = require('mongoose')

const adressModel = mongoose.Schema({
    nombre_pais:{
        type: String,
        required: true,
    },
    departamento:{
        type: String,
        required: true,
    },
    municipio:{
        type: String,
        required: true,
    },
    nomenclatura:{
        type: String,
        required: true,
    },
    isActive:{
        type: Boolean,
        required: true,
    },
})

module.exports = mongoose.model("adress", adressModel);