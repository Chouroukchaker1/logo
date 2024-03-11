import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './Blog.css';
import { Link } from 'react-router-dom';
import './CreatePost.css';

const Blog = () => {
    const [blogs, setBlogs] = useState([]);
    const [deleteMsg, setDeleteMsg] = useState(false);
    const inputRef = useRef(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/posts');
                if (response) {
                    setBlogs(response.data);
                }
            } catch (error) {
                console.error('Something went wrong!', error);
            }
        };

        fetchData();
    }, []);  

    const deletePost = async (id) => {
        try {
            await axios.delete(`http://localhost:3000/api/posts/${id}`);
            const response = await axios.get('http://localhost:3000/api/posts');
             
            setDeleteMsg(true);
            inputRef.current.scrollIntoView({ behavior:'smooth'}); 
            setBlogs(response.data);
        } catch (error) {
            console.error('Something went wrong!', error);
        }
    };

    return (
        <div className='container' ref={inputRef}>
            <div className='flex'>
                <h1>Blog List</h1>
                <Link className='btn-primary' to='/blog/create'>create post</Link>
            </div>
            {deleteMsg &&
                <div style={{ backgroundColor: '#34cd60', color: '#fff', padding: '10px', borderRadius: '5px' }}>
                    La post est supprimer avec succès
                </div>
            }
            <div>
                {blogs.map(blog => (
                    <div key={blog._id} className="list-group-item">
                        <div>
                            <h3>id: {blog.id}</h3>
                            <h3>Title: {blog.title}</h3>
                            <p>Content: {blog.content}</p>
                            <p>Author: {blog.author}</p>
                            <p>Slug: {blog.Slug}</p>
                            <p>Tags: {blog.tags}</p>
                            <button
                                onClick={() => deletePost(blog._id)}
                                className='btn-danger'
                            >Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blog;
