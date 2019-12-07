import React from 'react'
import {Card,Button} from 'react-bootstrap'

const Post = (props) => {



  return (
    <Card style={{margin:"15px",
    padding:"10px",
    boxShadow:"5px 10px 18px #888888"}}>
   
      <Card.Header style={{display:"flex",justifyContent:"space-between"}}>
      <Card.Title  >{props.post.author} </Card.Title>
      <Card.Title></Card.Title>
        <Card.Title>{props.post.title}</Card.Title>
      </Card.Header>
      <Card.Body>
        <Card.Text>
        {props.post.description}
      </Card.Text>
      <Card.Text> 
        {props.tab==="WORKSPACE" &&
      <Button className="btn-dark">Delete</Button>}
      </Card.Text>
      </Card.Body>
    </Card>

  )
}


export default Post;