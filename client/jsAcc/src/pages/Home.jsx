import React, { useEffect, useState } from 'react'
import LogNavbar from '../component/LogNavbar'
import Footer from '../component/Footer'
import axios from 'axios'
import { NotesCard } from '../component'

  const Home = () => {
    const [posts, setPosts] = useState()
  const token = localStorage.getItem('token'); // get token from local storage

  const {VITE_URL} = import.meta.env;

  const getPosts = async()=>{
    try {
      const options = {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      };
      const res = await axios.get(`${VITE_URL}/post/posts`,options)

      setPosts(res.data.posts)
    } catch (error) {
      console.log(error)
    }}

    useEffect(()=>{
      getPosts()
    },[])



    return (
      <div>
      <LogNavbar />
        <div className="home_main">
            <div className="notecard">
              {posts?.map((post)=>(
                <NotesCard key={post._id} post={post}/>
              ))}
            </div>
        </div>  
      <Footer />
      </div>
    )
  }
  
  export default Home



