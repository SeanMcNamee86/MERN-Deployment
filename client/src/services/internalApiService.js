import axios from 'axios'

const http = axios.create({
    baseURL: 'http://localhost:8000/api'
})


export const getAllPets = async () => {
    const res = await http.get('/pets')
    return res.data
}

export const getPetById = async (id) => {
    const res = await http.get(`/pets/${id}`)
    return res.data
}

export const createPet = async (data) => {
    const res = await http.post('/pets/new', data)
    return res.data
}

export const updatePetById = async (id, data) => {
    const res = await http.put(`/pets/${id}/edit`, data)
    return res.data
}

export const deletePetById = async (id) => {
    const res = await http.delete(`/pets/${id}/delete`)
    return res.data
}