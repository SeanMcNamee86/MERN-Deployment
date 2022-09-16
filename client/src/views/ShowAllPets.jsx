import { useState, useEffect, } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { getAllPets, deletePetById } from '../services/internalApiService';

const ShowAllPets = (props) => {
    const [petList, setPetList] = useState([]);
    const [errors, setErrors] = useState('');
    const { id } = useParams();
    const navigate = useNavigate();
    


    useEffect(() => {
        getAllPets()
            .then(response => {
                response.sort((a,b) => a.type.localeCompare(b.type))
                setPetList(response)
            })
            .catch(error => {
                throw (error);
            })
    }, [id])

    const handlePetDelete = (delIdx) => {
        deletePetById(delIdx)
            .then(response => {
                console.log("deleted ", response)
                navigate(`/pets`)
            })
            .catch(error => {
                setErrors(error.response?.data?.errors);
                console.log(error.response)
            })
        const filteredPets = petList.filter((pet) => {
            return pet._id !== delIdx
        })
        setPetList(filteredPets)
    }

    return (
        <>
            <h2>All Pets</h2>

            <table className="table table-hover table-bordered text-center m">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Type</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        petList.map((pet) => {
                            const { _id, name, type } = pet
                            return (
                                <tr key={_id}>
                                    <td>{name}</td>
                                    <td>{type}</td>
                                    <td>
                                        <button className="btn btn-danger" onClick={(event => handlePetDelete(_id))}>Remove</button>
                                        <Link to={`/pets/${_id}/edit`}className="btn btn-sm btn-outline-success mx-1">Edit</Link>
                                        <Link to={`/pet/${_id}`}className="btn btn-sm btn-outline-success mx-1">View</Link>
                                    </td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </>
    );
}

export default ShowAllPets;