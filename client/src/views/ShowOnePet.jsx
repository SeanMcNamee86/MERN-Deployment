import { useState, useEffect, } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { getPetById, deletePetById } from '../services/internalApiService';


export const ShowOnePet = (props) => {
    const [pet, setPet] = useState('');
    const [errors, setErrors] = useState('');
    const {id} = useParams();
    const navigate = useNavigate();
    
    useEffect(() => {
        getPetById(id)
            .then(response => setPet(response))
            .catch(error => {
                throw(error);
            })
    }, [id])

    const handlePetDelete = (e) => {
        e.preventDefault();

        deletePetById(id)
            .then(response => {console.log("deleted ", response)
                navigate(`/pets`)
            })
            .catch(error => {
                setErrors(error.response?.data?.errors);
                console.log(error.response)
            })
    }
    console.log(pet)
    return (
        <>
        <h5>Name: {pet.name}</h5>
        <h5>Type: {pet.type}</h5>
        <h5>description: {pet.description}</h5>
        <ul>Skills: 
            {
                pet.skill1 ? <li>{pet.skill1}</li> : ''
            }
            {
                pet.skill2 ? <li>{pet.skill2}</li> : ''
            }
            {
                pet.skill3 ? <li>{pet.skill3}</li> : ''
            }
        </ul> 
        <Link to={`/pets/${pet._id}/edit`}>Edit {pet.name}</Link>
        <br/>
        <button onClick={handlePetDelete}>Adopt</button>
        </>

    );
    }
export default ShowOnePet;