import React from "react";
import { fetchPhotos } from "../Services/api";
import useFetch from "../Hooks/useFetch";

const Photos = () => {
  const { data: photos, loading, error } = useFetch(fetchPhotos);

  if (loading)
    return (
      <div className="text-center p-10 font-kaushan animate-pulse">
        Loading Photos...
      </div>
    );
  if (error) return <p className="text-red-700">Error: {error}</p>;

  return (
    <div className="p-4 pb-32">
      <h1 className="text-2xl font-bold mb-6 text-[#494949]">Photo Gallery</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {photos.slice(0, 20).map((photo) => (
          <div
            key={photo.id}
            className="group relative overflow-hidden rounded-xl bg-light shadow-sm"
          >
            {/* <h1>{photo.title}</h1> */}
            <div className="aspect-square overflow-hidden">
              <img
                src={`https://picsum.photos/id/${Math.floor(Math.random() * 98 + 1)}/800/500`}
                alt="image" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                <p className="text-white font-medium line-clamp-2">{photo.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Photos;
