import React, { useState, useEffect } from 'react'
import Posts from '../components/posts/posts'
import API from '../api/index';
import { Button, Modal, Form } from 'react-bootstrap'
import Storage from '../services/Storage'
import ModalHeader from 'react-bootstrap/ModalHeader';
const WorkSpace = (tab) => {
    const [posts, setPosts] = useState([]);
    const [newPost, setNewPost] = useState({});
    const [user, setUser] = useState({});
    const [show, setShow] = useState(false);

    

    useEffect(() => {
        const userid = Storage.get("userId")
        API.peoples.getPostsByID(userid)
            .then(response => response.json())
            .then(data => {
                if(data.length!==0){
                data.reverse()
                setPosts(data)
            }      
            })
    }, [])

    useEffect(() => {
        const userid = Storage.get("userId")
        API.peoples.getByID(userid)
            .then(response => response.json())
            .then(data => {if(data){
                setUser(data)
            }
            })
    }, [])
    const { username, lastname } = user;

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleInputChangePost = (event) => {
        const { target: { name, value } } = event;
        setNewPost({
            ...newPost,
            [name]: value,
            personId:Storage.get("userId"),
            author:`${username} ${lastname}`
        })
        console.log(newPost)
    }

    const onSubmitPost = () => {
       API.posts.post(newPost);
       setPosts([...posts,
                newPost])
       setShow(false)
    }



    return (
        <div>
            <div className="main" style={{
                border: "solid black 1px",
                margin: "3vh",
                backgroundColor: "#343a40"
            }}>
                <div className="blogger" style={{
                    display: "flex",
                    border: "solid black 1px",
                    borderRadius: "10px",
                    height: "20vh",
                    margin: "3vh",
                    padding: "3vh",
                    justifyContent: "space-between",
                    alignItems: "center",
                    backgroundColor: "white"
                }} >
                    <div className="name"><h3>{username} {lastname}</h3></div>
                    <div className="createPost">
                        <Button size="lg" onClick={handleShow} className="btn-dark">New Post</Button>
                    </div>
                </div>
                <div className="posts" style={{
                    margin: "3vh",
                    height: "51vh",
                    border: "solid black 1px",
                    overflowY: "auto",
                    backgroundColor: "white"
                }}>
                    {posts.length>0 && posts.map(post => {
                        return <Posts key={post.id} post={post} tab={tab.tab} personId={post.personId} />
                    })}
                    {posts.length===0 && <h2>Create you first post !!!</h2>}
                </div>


                <Modal show={show} onHide={handleClose} animation={false}>
                    <Modal.Header closeButton>
                        <Modal.Title name="author">{username} {lastname}</Modal.Title>
                    </Modal.Header>
                    <ModalHeader>
                        <Form.Control name="title" onChange={handleInputChangePost} placeholder="Write title" />
                    </ModalHeader>
                    <Form.Control name="description" onChange={handleInputChangePost} as="textarea" rows="6" placeholder="Write text" />
                    <Modal.Footer>
                        <Button className="btn-dark" onClick={handleClose}>
                            Close
                        </Button>
                        <Button className="btn-dark" onClick={onSubmitPost}>
                            Save Post
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
            <div style={{ backgroundColor: "#343a40", position: "absolute", bottom: 0, width: "-webkit-fill-available"}}><p style={{ color: "white", bottom: "0" }}>Created By Khoren Ter-Hovhannisyan 2019</p></div>
        </div>
    )
}

export default WorkSpace
