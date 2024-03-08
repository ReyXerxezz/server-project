const SuperheroModel = require("../models/superhero");

const createSuperhero = async (req, res) => {
    try {
        const { superhero_name, superpowers, isAlive } = req.body;
        const newSuperhero = new SuperheroModel ({
            superhero_name,
            superpowers,
            isAlive,
        });

        const superheroSaved = await newSuperhero.save();
        res.status(201).json(superheroSaved);
    }   catch (error) {
        res.status(500).json({ message: error.message});
    }
};

module.exports = { createSuperhero };