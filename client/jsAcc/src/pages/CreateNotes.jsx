import React, { useState } from 'react';
import LogNavbar from '../component/LogNavbar';
import { Footer } from '../component';
import axios from 'axios'
import { Link as LinkRoute, useLocation, useNavigate } from 'react-router-dom'



const formData = {
  title: "",
  description: "",
  content: "",
  author: "",
  tags: [],
};

const CreateNotes = () => {
  const [form, setForm] = useState(formData);
  const user = JSON.parse(localStorage.getItem('user')); 
  const token = localStorage.getItem('token'); // get token from local storage

  const navigate = useNavigate()


  const handleSubmit = async(e) => {
    e.preventDefault();
    const updatedForm = {...form, author : user._id}

    try {
        const options = {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          };
        const res = await axios.post('http://localhost:8080/api/post/post', updatedForm,options)
        navigate('/')
    } catch (error) {
        alert(error.message)
        console.log(error)
    }


  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleTagChange = (e) => {
    const { value } = e.target;
    const tagsArray = value.split(',').map((tag) => tag.trim());
    setForm({ ...form, tags: tagsArray });
  };

  return (
    <div>
      <LogNavbar />
      <div className="create_notes">
        <div className="content_create_box">
          <div className="createTitle">CREATE A NOTE</div>
        </div>

        <div className="create_form_box">
          <form onSubmit={handleSubmit} className="form_create">
            <input className="form_create_inp" type="text" onChange={handleChange} name="title" placeholder="Enter Note Title" />
            
            <input className="form_create_inp" type="text" onChange={handleChange} name="description" placeholder="Enter Note Description" />
            
            <textarea className="form_create_inp" type="text" onChange={handleChange} name="content" placeholder="Enter Note Content" />
            
            <input className="form_create_inp" type="text" onChange={handleTagChange} name="tags" placeholder="Enter Note Tags (comma-separated)" />
            
            <button className="form_submit" type="submit">Submit</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CreateNotes;
