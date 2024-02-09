import './App.css';
import React from 'react'
import Header from './components/Header/Header';
import Comp from './Comp';
import StudentsData from './components/Students_data_props/StudentsData';

function App() {
  return (
    <>
    <h1 style={{color:"green"}}>Hello</h1>
      <Header style={{color:"green", backgroundColor:"red"}}/>
      <Comp />
      <StudentsData 
      style={{color:"green", backgroundColor:"red"}}
      yourName="Oluwafemi" 
      department= "Mathematics"
      level="400LVL"
      cgpa={4.5}/>
      <StudentsData/>
    </>
  );
}

export default App;
