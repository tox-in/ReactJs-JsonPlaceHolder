import React, { useEffect, useState } from 'react'
import { fetchPosts } from '../Services/api';

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchPosts().then(setPosts).finally(() => setLoading(false));
    }, []);

    if(loading) return <p>fetching Posts ...</p>

  return (
    <div>
        {
            posts.map((post)=>(
                <div key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </div>
            ))
        }
    </div>
  )
}

export default Posts