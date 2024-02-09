import React from 'react';
import './Studentprops.css'

const Studentprops = (props) => {
  return (
    <>
        <div className="student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Class: {props.class}</p>
            <p>IsBad: {props.isBad ? "Yes" : "No"}</p>
        </div>
    </>
  )
}

Studentprops.defaultProps = {
  name: "Guest",
  age: "Unstated",
  class: "Unstated too",
  isBad: true,
}

export default Studentprops