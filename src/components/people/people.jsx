import React from 'react'
import Card from 'react-bootstrap/Card'
import './people.css'
const People = (props) => {

  return (
    <div className="cardPeople"> 
      <div>
        <Card.Title>{props.people.username} {props.people.lastname}</Card.Title>
      </div>
    </div>

  )
}


export default People;