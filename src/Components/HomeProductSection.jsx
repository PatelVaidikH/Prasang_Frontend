import React, { useState, useEffect } from 'react';
import HomeProductSectionTitle from './HomeProductSectionTitle';
import HomeProductSectionCard from './HomeProductSectionCard';
import HomeProductSectionButton from './HomeProductSectionButton';

const HomeProductSection = ({ title1, title2, data = [], buttonText, mobileItemCount, desktopItemCount}) => {
  const [visibleItems, setVisibleItems] = useState(desktopItemCount);

  useEffect(() => {
    const updateVisibleItems = () => {
      if (window.innerWidth < 768) {
        setVisibleItems(mobileItemCount);
      } else {
        setVisibleItems(desktopItemCount);
      }
    };

    updateVisibleItems();

    window.addEventListener('resize', updateVisibleItems);

    return () => window.removeEventListener('resize', updateVisibleItems);
  }, [mobileItemCount, desktopItemCount]);

  return (
    <div className='sm:px-12 py-3 sm:py-6'>
      <HomeProductSectionTitle text1={title1} text2={title2} />

      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 2xl:grid-cols-4 gap-10 gap-y-6">
        {data.length > 0 ? (
          data.slice(0, visibleItems).map((item, index) => (
            <HomeProductSectionCard 
              key={item.id || index} 
              id={item.id} 
              name={item.name} 
              price={item.startingPrice} 
              rating={item.rating} 
              reviewCount={item.reviewCount} 
              area={item.area} 
              city={item.city} 
              image={item.image[0]} 
            />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">No products available</p>
        )}
      </div>
    
      <HomeProductSectionButton text={buttonText} />
    </div>
  );
};

export default HomeProductSection;
