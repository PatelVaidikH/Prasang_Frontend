import React from 'react';

const ProductPageImages = ({ image, setImage, productData, setIsFullScreen }) => {
  return (
    <div>
      
          {/* Main Image */}
          {image && (
            <img 
              className='w-full h-72 sm:h-[28rem] object-cover cursor-pointer rounded-md' 
              src={image} 
              alt="Selected Product" 
              onClick={() => setIsFullScreen(true)}
            />
          )}

          {/* Thumbnails */}
          <div className='flex gap-3 overflow-x-auto sm:flex-row sm:overflow-y-auto mt-3'>
            {productData?.image?.map((item, index) => (
              <img
                key={index}
                src={item}
                onClick={() => setImage(item)}
                className={`w-20 h-20 object-cover rounded-md cursor-pointer border ${image === item ? 'border-black' : 'border-gray-300'}`}
                alt={`Thumbnail ${index}`}
              />
            ))}
          </div>
    </div>
  );
};

export default ProductPageImages;
