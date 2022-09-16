import { useState } from 'react';
import { Navigate, useNavigate, Link } from 'react-router-dom';
import { createPet } from '../services/internalApiService';



export const NewPet = (props) => {
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [description, setDescription] = useState('');
    const [skill1, setSkill1] = useState('')
    const [skill2, setSkill2] = useState('')
    const [skill3, setSkill3] = useState('')
    const [errors, setErrors] = useState('');
    const navigate = useNavigate()




    const handleNewPetSubmit = (e) => {
        e.preventDefault();

        const newPet = {
            name: name,
            type: type,
            description: description,
            skill1: skill1,
            skill2: skill2,
            skill3: skill3
        }
        console.log(newPet)
        createPet(newPet)
            .then(data => {
                console.log('new author data: ', data)
                navigate(`/pets`);
            })
                .catch(error => {
                    setErrors(error.response?.data?.errors);
                    console.log(error.response)
                })
            }
        return (
            <>
            <h3>New Pet</h3>
            <form onSubmit={(e) => { handleNewPetSubmit(e) }}>
                <label>Name</label>
                <input
                    onChange={(event) => { setName(event.target.value) }} type="text" />
                <br />
                {
                    errors?.name && (
                        <span style={{ color: 'red' }}>{errors.name?.message}</span>
                    )
                }
                <br />
                <label>Type</label>
                <input
                    onChange={(event) => { setType(event.target.value) }} type="text" />
                <br />
                {
                    errors?.type && (
                        <span style={{ color: 'red' }}>{errors.type?.message}</span>
                    )
                }
                <br />
                <label>Description</label>
                <input
                    onChange={(event) => { setDescription(event.target.value) }} type="text" />
                <br />
                {
                    errors?.type && (
                        <span style={{ color: 'red' }}>{errors.description?.message}</span>
                    )
                }
                <br />
                <label>Skills (optional):</label>
                <label>Skill 1:</label>
                <input
                    onChange={(event) => { setSkill1(event.target.value) }} type="text" />
                <br />
                <label>Skill 2:</label>
                <input
                    onChange={(event) => { setSkill2(event.target.value) }} type="text" />
                <br />
                <label>Skill 3:</label>
                <input
                    onChange={(event) => { setSkill3(event.target.value) }} type="text" />
                <br />
                <button>Submit</button>
                <Link to="/authors/" className="btn btn-sm btn-outline-danger mx-1">Cancel</Link>
            </form>
        </>
    );
}

export default NewPet;