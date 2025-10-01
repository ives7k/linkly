import React from 'react';

const ImageGrid = ({ images }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 p-4 mt-16">
      {images.map((image, index) => (
        <div key={index} className="flex justify-center items-center overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img
            src={image}
            alt={`image-${index}`}
            className="w-full h-full object-cover aspect-[3/4] hover:scale-105 transition-transform duration-300"
          />
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
