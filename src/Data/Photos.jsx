import React from 'react'
import { fetchPhotos } from '../Services/api';
import useFetch from '../Hooks/useFetch';

const Photos = () => {
    const {data: photos, loading, error} = useFetch(fetchPhotos);

    if (loading) return <p>Loading Photos...</p>
    if (error) return <p>Error: {error}</p>

  return (
    <div>
        {
            photos.map((photo) => (
                <div key={photo.id}>
                    <h1>{photo.title}</h1>
                    <img src={`https://picsum.photos/id/${Math.floor((Math.random() * 98) + 1)}/800/500`} alt="image" />
                </div>
            ))
        }
    </div>
  )
}

export default Photos