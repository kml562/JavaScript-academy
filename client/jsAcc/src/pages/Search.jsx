import React, { useState } from 'react'
import { Footer, Navbar, NotesCard } from '../component'
import axios from 'axios'
import { Spin } from 'antd';


const Search = () => {
  const [searchTerm, serSearchTerm] = useState("")
  const [loading, setLoading] = useState(false)
  const [notes, setNotes] = useState([])
  const user = JSON.parse(localStorage.getItem('user'))
  const token = localStorage.getItem('token')



  const handleSearch = async(e)=>{
    try {
      e.preventDefault();
      setLoading(true)

      const options = {
        headers: {
          'Authorization': `Bearer ${token}`
        },
        params: {
          searchTerm: searchTerm // Pass the search term as a query parameter
      }
      };
        const res = await axios.get(`http://localhost:8080/api/post/topic/${searchTerm}`, options)
        console.log(res.data.posts)
        setNotes(res.data.posts)
        setLoading(false)
    } catch (error) {
      alert(error.message);
      console.log(error.message)
    }
  }



  return (
    <div>
        <Navbar />
            <div className="search">
                <div className="searchbar">
                    <form onSubmit={handleSearch} className='form_main'>
                      {/* <BsSearch className="searchicon"/> */}
                      <input onChange={(e)=>serSearchTerm(e.target.value)} type="text" placeholder="What is HTTPS?" className="searchbar_main"
                        onKeyDown={(e)=>{
                          e.key==='Enter' && handleSearch(e);
                    }}
                  />
                    </form>
                </div>

                {loading ? (
                    <div className="spinner">
                      <Spin />
                    </div>
                ):(
                  <div className="notecard search_notes_main">
                    {notes?.map((post)=>(
                      <NotesCard key={post._id} post={post}/>
                    ))}
                  </div>
                )}
                
            </div>
        <Footer />
    </div>
  )
}

export default Search