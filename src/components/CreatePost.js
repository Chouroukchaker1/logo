import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreatePost = () => {
    const navigate = useNavigate();
    const [newBlog, setNewBlog] = useState({});

    const handleChange = (e) => {
        setNewBlog({
            ...newBlog,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post('http://localhost:3000/api/posts', newBlog);
            navigate('/blogs');
        } catch (error) {
            console.error('Error creating blog:', error);
        }
    };
    return (
        <div className="container mt-5">
            <h1 className="mb-4">Create Blog</h1>
            <div className='from-froup'>
                <label>Title</label>
                <input 
                    type="text"
                    name="title"
                    onChange={handleChange}
                    required
                    placeholder="Enter title"
                />
            
            </div>
            <div className='from-control'>
                <label>Content</label>
                <textarea
                    rows={3}
                    name="content"
                    onChange={handleChange}
                    required
                    placeholder='Enter content'
                />    
            </div>
            <div className='from-control'>
                <label>Author</label>
                <input 
                    type="text"
                    name="author"
                    onChange={handleChange}
                    required
                    placeholder='Enter author'
                />

            </div>
        <div className='from-control' >
            <label>Slug</label>
            <input
                type="text"
                name="slug"
                onChange={handleChange}
                required
                placeholder='Enter slug'
            />
            </div>   
            <div className='from-control'>
                <label>Tags</label>
                <input
                    type='text'
                    name='tags'
                    onChange={handleChange}
                    required
                    placeholder='Enter tags'
                />    
            </div>
            < button className='custom-button' type='submit' onClick={handleSubmit} >
                create Blog
            </button>



        </div>
    );    
};
export default CreatePost;
    