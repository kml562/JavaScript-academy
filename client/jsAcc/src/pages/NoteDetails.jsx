import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import LogNavbar from '../component/LogNavbar'
import { Footer } from '../component'
import moment from 'moment'
import { ava1, ava2, ava3, ava4 } from '../assets/index.js'
import { Rate } from 'antd';


const NoteDetails = () => {
    const [noteDetail, setNoteDetail] = useState(null)
    const [selectedRate, setSelectedRate] = useState(null);
    const [ravatar, setRAvatar] = useState(null)
    const token = localStorage.getItem('token')
    const user = JSON.parse(localStorage.getItem('user')); 
    const {id} = useParams()
    const navigate = useNavigate()
    const avatar = [ ava1, ava2, ava3, ava4 ]
    const readingSpeed = 200;
    const wordCount = noteDetail?.content.trim().split(/\s+/).length;
    const readingTimeMinutes = Math.ceil(wordCount / readingSpeed);
    const {VITE_URL} = import.meta.env;



        const updateRating = async()=>{

            try {
                const filterObject = {
                    title: noteDetail.title,
                    description: noteDetail.description,
                    content: noteDetail.content,
                    tags: noteDetail.tags,
                    rating : selectedRate===null ? 5 : selectedRate
                }


                const options = {
                    headers: {
                      'Authorization': `Bearer ${token}`
                    }
                  };
                  const res = await axios.put(`${VITE_URL}/post/post/${id}`, filterObject,options)


                  if(res.status===200){
                    navigate('/')
                  }

            } catch (error) {
                alert(error.message)
                console.log(error)
            }
        }



    useEffect(()=>{
        const randomAvatar = avatar[Math.floor(Math.random() * avatar.length)];
        setRAvatar(randomAvatar)
        const fetchNoteDetails = async()=>{

            try {
                const options = {
                    headers: {
                      'Authorization': `Bearer ${token}`
                    }
                  };
                  const res = await axios.get(`${VITE_URL}/post/post/${id}`,options)

                  setNoteDetail(res.data.post)
            } catch (error) {
                console.log(error)
            }
        }

        fetchNoteDetails()
    },[])

    const handleRateChange = (value) => {
        setSelectedRate(value);
        updateRating()
    };




  return (
    <div>
      <LogNavbar />
        <div className="notedetails">
            <div className="title_of_details">
                {noteDetail?.title}
            </div>

            <Link to={`/user/${noteDetail?.author?._id}`} className="authorDetails">
                <img src={ravatar} alt="" className="user_img_details" />
                <div className="author_details_name">
                    <div className="author_nme_det">
                        {noteDetail?.author?.name}
                    </div>
                    <div className="more_details">
                        <div className="time_read">
                            {readingTimeMinutes} min
                        </div>
                        <div className="time">
                            {moment(noteDetail?.createdAt).format('MMM DD, YYYY')}
                        </div>
                    </div>
                </div>

                {noteDetail?.author?._id === user._id && (
                    <Link to={`/edit/${id}`} className="editBtn">
                        Edit Notes
                    </Link>
                )}
            </Link>

            <div className="content">
                {noteDetail?.content}
            </div>

            {noteDetail?.url && (
                <div className="learn_more">
                    <a className="learn_more_btn" target="blank" rel="noopener noreferrer" href={noteDetail?.url}>Read More</a>
                </div>
            )}

            <div className="tags">
            {noteDetail?.tags?.map((tag,index)=>(
                <div className="tag" style={{ marginLeft: index !== 0 ? '0.5rem' : 0 }}>
                    {tag}
                </div>
            ))}
            </div>

            <div className="rate">
                <Rate value={noteDetail?.rating} className='rate_main' onChange={handleRateChange}/>
                {/* <Rate className='rate_main' onChange={handleRateChange} character={({ index }) => index + 1} /> */}
            </div>
        </div>
      <Footer />
    </div>
  )
}

export default NoteDetails



// {
//     "_id": "647bb0fe623c49f5c03145df",
//     "title": "What is Nodejs",
//     "description": "Defination of Nodejs",
//     "content": "Node.js is a runtime environment that allows developers to run JavaScript code outside of a web browser. It is built on the V8 JavaScript engine, the same engine that powers Google Chrome, and provides a server-side execution environment for JavaScript applications. Node.js enables developers to build scalable and high-performance network applications, such as web servers, APIs, and real-time applications.",
//     "author": {
//         "_id": "647bace820ea68efec12e3ce",
//         "name": "kmlbisht",
//         "email": "hhedy@email.com",
//         "createdAt": "2023-06-03T21:13:12.557Z",
//         "updatedAt": "2023-06-03T21:13:12.557Z",
//         "__v": 0
//     },
//     "tags": [
//         "Nodejs",
//         "Backend",
//         "Javascript"
//     ],
//     "rating": 5,
//     "comments": [],
//     "createdAt": "2023-06-03T21:30:38.695Z",
//     "updatedAt": "2023-06-03T21:30:38.695Z",
//     "__v": 0
// }