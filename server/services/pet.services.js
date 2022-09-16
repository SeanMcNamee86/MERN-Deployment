const { Pet } = require('../models/pet.model')

const createPet = async (data) => {
    const pet = await Pet.create(data)
    return pet
}

const getAllPets = async () => {
    const pets = await Pet.find();
    return pets;
};


const getPetById = async (id) => {
    const pet = await Pet.findById(id);
    return pet;
};

const updatePetById = async (id, data) => {
    const pet = await Pet.findByIdAndUpdate(id, data)
    return pet;
}

const deletePetById = async (id) => {
    const pet = await Pet.findByIdAndDelete(id);
    return pet;
};





module.exports = {
    createPet,
    getAllPets,
    getPetById,
    updatePetById,
    deletePetById
}