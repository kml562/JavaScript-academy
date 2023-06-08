import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import LogNavbar from '../component/LogNavbar'
import { Footer, NotesCard } from '../component'
import axios from 'axios'



const Tech = () => {
    const [notes, setNotes] = useState([])
    const token = localStorage.getItem('token')
    const user = JSON.parse(localStorage.getItem('user')); 
    const {id} = useParams() //ex -  javascript

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
            const res = await axios.get(`http://localhost:8080/api/post/topic/${id}`, options)
            setNotes(res.data.posts)
        } catch (error) {
          alert(error.message)
          console.log(error.message)
        }
      }

      fetchData()
    },[id])
    console.log(notes)


  return (
    <div>
      <LogNavbar />
      <div className="home_main">
            <div className="notecard">
              {notes?.map((post)=>(
                <NotesCard key={post._id} post={post}/>
              ))}
            </div>
        </div>  
      <Footer />
    </div>
  )
}

export default Tech