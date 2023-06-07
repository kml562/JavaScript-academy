import React from 'react'
import { Link } from 'react-router-dom'

const NotesCard = ({post}) => {
  return (
    <Link to={`/note/${post._id}`} className="post_card">
        <div className="notes_title">
            {post?.title}
        </div>

        <div className="notes_description">
            {post?.description}
        </div>

        <div className="notes_author">
            Author - {post?.author?.name}
        </div>

        <div className="notes_rating">
            ⭐ - {post?.rating}
        </div>

        <div className="tags">
            {post?.tags?.map((tag,index)=>(
                <div className="tag" style={{ marginLeft: index !== 0 ? '0.5rem' : 0 }}>
                    {tag}
                </div>
            ))}
        </div>
    </Link>
  )
}

export default NotesCard


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