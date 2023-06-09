import React, { useEffect, useState } from 'react'
import { Footer, Navbar, NotesCard } from '../component'
import axios from 'axios'
import { Spin } from 'antd';
import LogNavbar from '../component/LogNavbar';


const Search = () => {
  const [searchTerm, serSearchTerm] = useState("")
  const [loading, setLoading] = useState(false)
  const [notes, setNotes] = useState([])
  const user = JSON.parse(localStorage.getItem('user'))
  const token = localStorage.getItem('token')
  const {VITE_URL} = import.meta.env;


    const [javascript, setJavascript] = useState([])
    const [ai, setAi] = useState([])

    useEffect(()=>{
      const fetchData = async()=>{
        try {
          const options = {
            headers: {
              'Authorization': `Bearer ${token}`
            },
          };
            const jsres = await axios.get(`${VITE_URL}/post/topic/javascript`, options)
            const aires = await axios.get(`${VITE_URL}/post/topic/ai`, options)
            setJavascript(jsres.data.posts)
            setAi(aires.data.posts)


        } catch (error) {
          alert(error.message)
          console.log(error.message)
        }
      }

      fetchData()
    },[])





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
        const res = await axios.get(`${VITE_URL}/post/topic/${searchTerm}`, options)
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
        <LogNavbar />
            <div className="search .glass-background">
            {/* <div className="color-spots"></div> */}
                <div className="searchbar">
                    <form onSubmit={handleSearch} className='form_main'>
                      {/* <BsSearch className="searchicon"/> */}
                      <input onChange={(e)=>serSearchTerm(e.target.value)} type="text" placeholder="🔍 What is HTTPS?" className="searchbar_main"
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
                <>
                {searchTerm && (
                  <div className="jahead">Results for {searchTerm}</div>
                )}
                  <div className="notecard search_notes_main">
                    {notes?.map((post)=>(
                      <NotesCard key={post._id} post={post}/>
                    ))}
                </div>
                </>
                )}


                <div className="jahead">Javascript Notes</div>

                <div className="notecard search_notes_main">
                    {javascript?.slice(0,3)?.map((post)=>(
                      <NotesCard key={post._id} post={post}/>
                    ))}
                </div>

                <div className="jahead">AI Notes</div>

                <div className="notecard search_notes_main">
                    {ai?.slice(0,3)?.map((post)=>(
                      <NotesCard key={post._id} post={post}/>
                    ))}
                </div>

            </div>
        <Footer />
    </div>
  )
}

export default Search