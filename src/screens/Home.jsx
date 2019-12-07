import React, { useState, useEffect } from 'react';
import Posts from '../components/posts/posts';
import API from '../api/index';
import People from '../components/people/people';

const Home = (tab) => {
    const [posts, setPosts] = useState([]);
    const [peoples, setPeoples] = useState([]);
    useEffect(() => {
        API.posts.getList()
            .then(response => response.json())
            .then(data => {data.reverse()
                 setPosts(data) })
    }, [])

    useEffect(() => {
        API.peoples.getList()
            .then(res => res.json())
            .then((data) => {
                setPeoples(data)
            })
    }, [])

    return (
        <div>
            <div style={{ display: "flex",height:"90vh" }}>
                <div style={{
                    border: "solid gray",
                    overflowY: "scroll",  
                    minWidth:"fit-content"
                }}>
                    {peoples.map(people => {
                        return <People key={people.id} people={people} />
                    })}</div>
                <div className="posts" style={{
                    display: "flex",
                    flexDirection: "column"
                }}>
                    <div style={{
                       
                        border: "solid gray",
                        overflowY: "auto",
                        
                       
                    }}>
                        {posts.map(post => {
                            return <Posts key={post.id} tab={tab.tab} post={post} />
                        })}

                    </div>
                    <div style={{ backgroundColor: "#343a40"}}><p style={{ color: "white" }}>Created By Khoren Ter-Hovhannisyan 2019</p></div>
                </div>
            </div>


        </div>
    )
}

export default Home;