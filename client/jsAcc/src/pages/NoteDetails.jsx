import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import LogNavbar from '../component/LogNavbar'
import { Footer } from '../component'
import moment from 'moment'
import { ava1, ava2, ava3, ava4 } from '../assets/index.js'

const NoteDetails = () => {
    const [noteDetail, setNoteDetail] = useState(null)
    const [ravatar, setRAvatar] = useState(null)
    const token = localStorage.getItem('token')
    const {id} = useParams()
    const avatar = [ ava1, ava2, ava3, ava4 ]
    const readingSpeed = 200;
    const wordCount = noteDetail?.content.trim().split(/\s+/).length;
    const readingTimeMinutes = Math.ceil(wordCount / readingSpeed);

    console.log(readingTimeMinutes)

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
                  const res = await axios.get(`http://localhost:8080/api/post/post/${id}`,options)

                  setNoteDetail(res.data.post)
            } catch (error) {
                console.log(error)
            }
        }

        fetchNoteDetails()
    },[])

    // console.log(noteDetail)



  return (
    <div>
      <LogNavbar />
        <div className="notedetails">
            <div className="title_of_details">
                {noteDetail?.title}
            </div>

            <div className="authorDetails">
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
            </div>

            <div className="description_of_note_details">
                {noteDetail?.description}
            </div>


            <div className="content">
                {noteDetail?.content}
            </div>

            <div className="tags">
            {noteDetail?.tags?.map((tag,index)=>(
                <div className="tag" style={{ marginLeft: index !== 0 ? '0.5rem' : 0 }}>
                    {tag}
                </div>
            ))}
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