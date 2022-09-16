import { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { updatePetById, getPetById } from '../services/internalApiService';



const UpdatePet = (props) => {
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [description, setDescription] = useState('');
    const [skill1, setSkill1] = useState('');
    const [skill2, setSkill2] = useState('');
    const [skill3, setSkill3] = useState('');
    const [nameisValid, setNameIsValid] = useState(true)
    const [typeisValid, setTypeIsValid] = useState(true)
    const [descriptionisValid, setDescriptionIsValid] = useState(true)
    const [nameError, setNameError] = useState('')
    const [typeError, setTypeError] = useState('')
    const [descriptionError, setDescriptionError] = useState('')
    const [errors, setErrors] = useState('');
    const [navError, setNavError] = useState(false)
    const { id } = useParams()
    const navigate = useNavigate();

    useEffect(() => {
        getPetById(id)
            .then(response => {
                const { name, type, description, skill1, skill2, skill3 } = response
                setName(name)
                setType(type)
                setDescription(description)
                setSkill1(skill1)
                setSkill2(skill2)
            })
            .catch(error => {
                setNavError(true)
                throw (error);
            })
    }, [id])

    const handlePetUpdate = (e) => {
        e.preventDefault();

        const updatedata = {
            name: name,
            type: type,
            description: description,
            skill1: skill1,
            skill2: skill2,
            skill3: skill3
        }
        if(nameisValid && typeisValid && descriptionisValid){
        console.log(updatedata)
        updatePetById(id, updatedata)
            .then(data => {
                console.log('update pet data: ', data)
                navigate(`/pets`)
            })
            .catch(error => {
                setErrors(error.response?.data?.errors);
                console.log(error.response)
            })
        }
    }

    const handleName = (e) => {
        setName(e.target.value)
    if(e.target.value.length < 1) {
            setNameError("name is required!");
            setNameIsValid(false)
        } else if(e.target.value.length < 3) {
            setNameError("Name must be at least 2 characters long!");
            setNameIsValid(false)
        } else {
            setNameError("");
            setNameIsValid(true)
        }
    }
    const handleType = (e) => {
        setType(e.target.value)
    if(e.target.value.length < 1) {
            setTypeError("Type is required!");
            setTypeIsValid(false)
        } else if(e.target.value.length < 3) {
            setTypeError("Type must be at least 2 characters long!");
            setTypeIsValid(false)
        } else {
            setTypeError("");
            setTypeIsValid(true)
        }
    }

    const handleDescription = (e) => {
        setDescription(e.target.value)
    if(e.target.value.length < 1) {
            setDescriptionError("Description is required!");
            setDescriptionIsValid(false)
        } else if(e.target.value.length < 3) {
            setDescriptionError("Description must be at least 2 characters long!");
            setDescriptionIsValid(false)
        } else {
            setDescriptionError("");
            setDescriptionIsValid(true)
        }
    }



    return (
        <>
            <h3>Update pet</h3>
            {
                navError ?
                    <div>
                        <h4>We're Sorry, No Pet with this id exists. if you would like to add a new pet click the link below</h4>
                        <Link to={`/pet/new`}>add an pet</Link>
                        <br />
                        <br />
                        <br />
                    </div>
                    :
                    ''
            }
            <form onSubmit={(e) => { handlePetUpdate(e) }}>
                <label>Name</label>
                <input
                    onChange={(event) => { handleName(event) }} type="text" value={name} />
                <br />
                {
                    nameError ?
                        <span style={{ color: 'red' }}>{nameError}</span>
                        : ''

                }
                <br/>
                <label>Type</label>
                <input
                    onChange={(event) => { handleType(event) }} type="text" value={type} />
                <br />
                {
                    typeError ?
                        <span style={{ color: 'red' }}>{errors.type?.message}</span> : ''
                    
                }
                <br/>
                <label>Description</label>
                <input
                    onChange={(event) => { handleDescription(event) }} type="text" value={description} />
                <br />
                {
                    !descriptionisValid ?
                        <span style={{ color: 'red' }}>{descriptionError}</span>
                    : ''
                }
                <br/>
                <label>Skill 1:</label>
                <input
                    onChange={(event) => { setSkill1(event.target.value) }} type="text" value={skill1} />
                <br />
                <label>Skill 2:</label>
                <input
                    onChange={(event) => { setSkill2(event.target.value) }} type="text" value={skill2} />
                <br />
                <label>Skill 3:</label>
                <input
                    onChange={(event) => { setSkill3(event.target.value) }} type="text" value={skill3} />
                <br />
                <button>Update</button>
            </form>
            <Link to={`/pets`}>Return Home</Link>
        </>
    )
};

export default UpdatePet;