import React from 'react'
import { fetchPosts } from '../Services/api';
import useFetch from '../Hooks/useFetch';

const Posts = () => {
    const { data: posts, loading, error } = useFetch(fetchPosts);

    if (loading) return <p>Loading Photos ...</p>
    if (error) return <p>Error: {error}</p>

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