const express = require('express');

const {
    handleCreatePet,
    handleGetAllPets,
    handleGetPetById,
    handleUpdatePetById,
    handleDeletePetById
} = require('../controllers/pet.controller');

const router = express.Router()


router.post('/api/pets/new', handleCreatePet);
router.get('/api/pets', handleGetAllPets);
router.get('/api/pets/:id', handleGetPetById);
router.put('/api/pets/:id/edit', handleUpdatePetById)
router.delete('/api/pets/:id/delete', handleDeletePetById)


module.exports = { petRouter: router };