import React from 'react'
import Card from 'react-bootstrap/Card'

const People = (props) => {



  return (
    <div style={{ marginBottom:"10px",
    boxShadow:"5px 10px 18px #888888",
    borderRadius:"10px",
    border:"1px solid #babcbd"}}> 
      <div>
        <Card.Title>{props.people.username} {props.people.lastname}</Card.Title>
      </div>
    </div>

  )
}


export default People;