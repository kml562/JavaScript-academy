import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import LogNavbar from '../component/LogNavbar'
import { Footer, NotesCard } from '../component'
import axios from 'axios'



const Tech = () => {
    const [notes, setNotes] = useState([])
    const [javascript, setJavascript] = useState([])
    const [ai, setAi] = useState([])
    const token = localStorage.getItem('token')
    const user = JSON.parse(localStorage.getItem('user')); 
    const {id} = useParams() //ex -  javascript
    const {VITE_URL} = import.meta.env;

    useEffect(()=>{
      const fetchData = async()=>{
        try {
          const options = {
            headers: {
              'Authorization': `Bearer ${token}`
            },
            params: {
              searchTerm: id // Pass the search term as a query parameter
          }
          };
            const res = await axios.get(`${VITE_URL}/post/topic/${id}`, options)
            const jsres = await axios.get(`${VITE_URL}/post/topic/javascript`, options)
            const aires = await axios.get(`${VITE_URL}/post/topic/ai`, options)
            setNotes(res.data.posts)
            setJavascript(jsres.data.posts)
            setAi(aires.data.posts)


        } catch (error) {
          alert(error.message)
          console.log(error.message)
        }
      }

      fetchData()
    },[id])


    console.log(javascript,ai)


  return (
    <div>
      <LogNavbar />
      <div className="home_main">
      <div className="techtitle">
        {id.toUpperCase()} NOTES
      </div>
           <div className="tech_notes_wrapper">
            <div className="notecard">
                {notes?.map((post)=>(
                  <NotesCard key={post._id} post={post}/>
                ))}
              </div>
           </div>
        </div>  
      <Footer />
    </div>
  )
}

export default Tech