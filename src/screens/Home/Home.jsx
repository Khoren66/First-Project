import React, { useState, useEffect } from 'react';
import Posts from '../../components/posts/posts';
import {Spinner} from 'react-bootstrap'
import API from '../../api/index';
import People from '../../components/people/people';
import './home.css'

const Home = (tab) => {
    const [posts, setPosts] = useState([]);
    const [peoples, setPeoples] = useState([]);
    const [loading,setLoading] = useState(true)
    useEffect(() => {
        API.posts.getList()
            .then(response => response.json())
            .then(data => {data.reverse()
                setLoading(false)
                setPosts(data)
                 })
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
             {loading && <Spinner style={{marginTop:"100px"}} animation="border" />}
             {!loading && 
              <div className='mainHome'>
              <div className="peopleWrapper">
                  {peoples.map(people => {
                      return <People key={people.id} people={people} />
                  })}</div>
              <div className="mainPost">
                  <div className="postWrapper">
                      {posts.map(post => {
                          return <Posts key={post.id} tab={tab.tab} post={post} />
                      })}
                  </div>
                  <div className="footerH"><p className='footerH'>Created By Khoren Ter-Hovhannisyan 2019</p></div>
              </div>
          </div>
}
           

        </div>
    )
}

export default Home;