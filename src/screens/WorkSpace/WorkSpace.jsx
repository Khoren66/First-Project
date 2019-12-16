import React, { useState, useEffect } from 'react'
import Posts from '../../components/posts/posts'
import API from '../../api/index';
import {Spinner} from 'react-bootstrap'
import { Button, Modal, Form } from 'react-bootstrap'
import Storage from '../../services/Storage'
import ModalHeader from 'react-bootstrap/ModalHeader';
import './workspace.css'
import image from '../Images/images.jpeg'


const WorkSpace = (tab) => {
    const [posts, setPosts] = useState([]);
    const [newPost, setNewPost] = useState({});
    const [user, setUser] = useState({});
    const [show, setShow] = useState(false);
    const [loading,setLoading] = useState(true)
    

    useEffect(() => {
        const userid = Storage.get("userId")
        API.peoples.getPostsByID(userid)
            .then(response => response.json())
            .then(data => {
                if(data.length!==0){
                data.reverse()
                setLoading(false)
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

    const handleClose = () => {
        setNewPost({
            ...newPost,
            title:"",
            description:""
            })
        setShow(false)
    };

    const handleShow = (item) => {
        if(item.id){
            const findedEvent = posts.find((post) => {
                return post.id === item.id
              });
             setNewPost(findedEvent)
        } 
        setShow(true)
        
    };

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
        console.log("post",newPost)
        if(newPost.id){
            API.posts.edit(newPost)
            .then(res=>{
                if(res.ok){
                res.json().then((data)=>{
                   const newList = posts.map(elem => elem.id !== data.id?elem:data)
                    setPosts(newList)
                    setNewPost({
                        title:"",
                        description:""
                        })
                })
            }})
            .catch(err=>console.log(err))
            setShow(false)
            return
        }
       API.posts.post(newPost);
       setPosts([...posts,
                newPost])
       setShow(false)
    }

const onhandleRemove=(item)=>{
    const filtered = posts.filter(elem => elem.id !== item.id)
    API.posts.remove(item.id);
    setPosts(filtered)   
}

    return (
        <div>
            <div className="mainW">
                <div className="blogger">
                    <div  className="userData">
                        <img alt="" style={{border:"1px solid black",width:"25%",borderRadius:"80px"}} src={image}></img>      
                    <div className="name"><h3>{username} {lastname}</h3></div>
                    </div>
                    <div className="createPost">
                        <Button size="lg" onClick={handleShow} className="btn-dark">New Post</Button>
                    </div>
                </div>
                <div className="mainPostW">
                {loading && <Spinner style={{marginTop:"100px"}} animation="border" />}
                {!loading && 
                  posts.length>0 && posts.map(post => {
                        return <Posts key={post.id} post={post} tab={tab.tab} modal={handleShow}  remove={onhandleRemove} personId={post.personId} />
                    })
                }
                {posts.length===0 && <h2>Create you first post !!!</h2>
                }            
                </div>


                <Modal show={show} onHide={handleClose} animation={false}>
                    <Modal.Header closeButton>
                        <Modal.Title name="author">{username} {lastname}</Modal.Title>
                    </Modal.Header>
                    <ModalHeader>
                        <Form.Control name="title" value={newPost.title}  onChange={handleInputChangePost} placeholder="Write title" />
                    </ModalHeader>
                    <Form.Control name="description" value={newPost.description} onChange={handleInputChangePost} as="textarea" rows="6" placeholder="Write text" />
                    <Modal.Footer>
                        <Button className="btn-dark" onClick={handleClose}>
                            Close
                        </Button>
                        <Button className="btn-dark" onClick={onSubmitPost}>
                             {newPost.id ?"Update":"Create"}
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
            <div className="footerW"><p className="footerWp">Created By Khoren Ter-Hovhannisyan 2019</p></div>
        </div>
    )
}

export default WorkSpace
