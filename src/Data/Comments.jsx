import React, { useEffect, useState } from 'react'
import { fetchComments } from '../Services/api';

const Comments = () => {
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchComments().then(setComments).finally(() => setLoading(false));
    }, []);

    if(loading) return <p>Loading Comments ...</p>
  return (
    <div>
        {
            comments.map((comment)=> (
                <div key={comment.id}>
                    <h3>{comment.name}</h3>
                    <p>{comment.email}</p>
                    <p>{comment.body}</p>
                </div>
            ))
        }
    </div>
  )
}

export default Comments