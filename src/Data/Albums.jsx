import React from "react";
import { fetchAlbums } from "../Services/api";
import useFetch from "../Hooks/useFetch";

const Albums = () => {
  const {data: albums, loading, error} = useFetch(fetchAlbums);


  if (loading) return <p>Loading Albums...</p>
  if (error) return <p>Error: {error}</p>


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
