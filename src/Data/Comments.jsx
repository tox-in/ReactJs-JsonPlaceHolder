import useFetch from '../Hooks/useFetch';
import { fetchComments } from '../Services/api';

const Comments = () => {
    const {data: comments, loading, error} = useFetch(fetchComments);

    if(loading) return <p>Loading Comments ...</p>
    if(error) return <p>Error loading comments: {error.message}</p>
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