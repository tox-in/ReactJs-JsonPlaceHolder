import React, { useEffect, useState } from "react";
import { fetchAlbums } from "../Services/api";

const Albums = () => {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAlbums()
      .then(setAlbums)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading Albums...</p>


  return <div>
    {
            albums.map((album) => (
                <div key={album.id}>
                    <h1>{album.title}</h1>
                </div>
            ))
        }
  </div>;
};

export default Albums;
