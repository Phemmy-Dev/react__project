import React from 'react'
// import './StudentsData.css'

const StudentsData = (props) => {
  return (
    <>
        <div className="studentdata">
        <p>Name: {props.yourName}</p>
        <p>Department: {props.department}</p>
        <p>Level: {props.level}</p>
        <p>CGPA: {props.cgpa}</p>
        </div>
    </>
  )
}

export default StudentsData;