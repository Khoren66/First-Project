import React from 'react'
import {Card,Button} from 'react-bootstrap'
import './posts.css'
const Post = (props) => {



  return (
    <Card className='cardPost'>
      <Card.Header className="cardHeader">
      <Card.Title  >{props.post.author} </Card.Title>
      <Card.Title></Card.Title>
        <Card.Title>{props.post.title}</Card.Title>
      </Card.Header>
      <Card.Body>
        <Card.Text>
        {props.post.description}
      </Card.Text>
    <div className="buttons">
     
     {props.tab==="WORKSPACE" && <Button onClick={()=>{props.remove(props.post)}}  className="btn-danger">Delete</Button>}
     {props.tab==="WORKSPACE" && <Button onClick={()=>{props.modal(props.post)}}  className="btn-dark blue">Edit</Button>} 
     </div>
      </Card.Body>
           
    </Card>

  )
}


export default Post;