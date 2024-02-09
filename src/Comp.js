import React from "react"
import Studentprops from "./components/Studentprops/Studentprops"
import './Comp.css';

function Comp() {

    let userName = [
        {
            username: "Oluwafemi",
            age: 22,
            school: "UNILORIN"
        },
        {
            username: "John",
            age: 24,
            school: "UNILAG"
        },
        {
            username: "Alex",
            age: 12,
            school: "UNIBEN"
        },
    ]
    return (
    <>
    {userName.map((user) => (
        <div className="students__data">
            <p>{user.username}</p>
            <p>{user.school}</p>
            <p>{user.age}</p>
        </div>
    ))}

    <Studentprops name="John" age="22" class="SS3" isBad={true}/>
    <Studentprops name="The Boy" age={33} class="Primary 4"/>

    </>
    )
}

export default Comp