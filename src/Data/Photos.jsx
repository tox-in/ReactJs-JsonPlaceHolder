import React, { useEffect, useState } from 'react'
import { fetchPhotos } from '../Services/api';

const Photos = () => {
    const [photos, setPhotos] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchPhotos().then(setPhotos).finally(() => setLoading(false));
    }, []);

    if (loading) return <p>Loading Photos...</p>

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