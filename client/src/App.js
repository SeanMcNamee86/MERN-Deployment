import logo from './logo.svg';
import './App.css';
import { Link, Navigate, Route, Routes } from 'react-router-dom';
import {useState} from 'react'
import ShowOnePet from './views/ShowOnePet';
import NewPet from './views/NewPet';
import ShowAllPets from './views/ShowAllPets';
import UpdatePet from './views/UpdatePet';

function App() {
  return (
    <div className="App">
      <h1>Pet Shelter Manager</h1>
      <Link to={`/pet/new`}className="btn btn-sm btn-outline-success mx-1">Add a Pet</Link>
      <Link to={`/pets`}className="btn btn-sm btn-outline-success mx-1">Show All Pets</Link>
      <Routes>
        <Route path="/pet/:id" element={<ShowOnePet />} />
        <Route path="/pet/new" element={<NewPet/>}/>
        <Route path="/pets" element={<ShowAllPets />}/>
      <Route path="/pets/:id/edit" element={<UpdatePet />} />
      </Routes>
    </div>
  );
}

export default App;
