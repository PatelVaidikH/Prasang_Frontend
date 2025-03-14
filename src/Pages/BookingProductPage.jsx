import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MainContext } from '../Context/MainContext';
import RelatedProducts from '../Components/RelatedProducts';
import { HandPlatter, Heart, Star, Users } from 'lucide-react';
import { serviceProviders } from '../assets/assets';
import ProductPageImages from '../Components/ProductPageImages';
import VenueBookingStepper from '../Components/VenueBookingStepper';

const BookingProductPage = () => {
  const { productId } = useParams();
  const { currency } = useContext(MainContext);
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState('');
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [availability, setAvailability] = useState(null);
  const [price, setPrice] = useState(null);
  const [expanded, setExpanded] = useState(false);
  
  useEffect(() => {
    const fetchProductData = () => {
      const product = serviceProviders.find((item) => item.id === Number(productId));
      if (product) {
        setProductData(product);
        setImage(product.image?.[0] || '');
        setPrice(product.startingPrice); // Default price
      } else {
        setProductData(null);
      }
    };

    fetchProductData();
  }, [productId]);

  const checkAvailability = (date) => {
    setSelectedDate(date);

    // Mock availability and pricing logic (replace with actual API call if needed)
    const unavailableDates = ['2025-03-10', '2025-03-15']; // Example unavailable dates
    const specialPricing = { '2025-03-20': productData?.startingPrice + 1000 }; // Example special price date

    if (unavailableDates.includes(date)) {
      setAvailability(false);
      setPrice(null);
    } else {
      setAvailability(true);
      setPrice(specialPricing[date] || productData?.startingPrice);
    }
  };

  if (!productData) {
    return <div className="text-center font-bold">Product not found</div>;
  }

  return (
    <div className='pt-4 px-0 sm:px-10 justify-center transition-opacity ease-in duration-500 opacity-100'>
      <div className='flex flex-col sm:flex-row items-start gap-12 mx-auto'>
        
        {/* Product Images (Left Side) */}
        <div className='flex flex-col w-full sm:w-4/5'>
          <ProductPageImages 
            image={image} 
            setImage={setImage} 
            productData={productData} 
            setIsFullScreen={setIsFullScreen} 
          />
        </div>


        {/* Product Info (Right Side) */}
        <div className='w-full sm:w-1/2'>
          <div className='flex justify-between items-center '>
            <div>
              <p className='text-gray-600'>Kabir Farm</p>
              <h1 className='font-semibold text-3xl'>{productData.name}</h1>
              <p className='font-light text-base'>{productData.area} - {productData.city}</p>
            </div>
            <div className='bg-[#FFF8e8] p-4 rounded border-none cursor-pointer'>
              <Heart color='#FFB100' size={26} />
            </div>
          </div>

          <div className='mt-6 flex'>
            <p className='text-sm'>
              From <span className='font-medium text-2xl'>{currency}{productData.startingPrice}</span>
              <span className='font-normal line-through text-gray-400 ms-2'>{currency}{productData.startingPrice}</span>
            </p>
            <div className="ms-3 bg-gray-200 w-[1px]"></div>  
            <div className='flex items-center ms-3'>
              <div className='px-2 py-1 rounded-md border flex items-center'>
                <Star size={18} strokeWidth={0} fill='#FBBF24' />
                <p className='font-medium text-[#FBBF24]'>{productData.rating}</p>
              </div>
            </div>
          </div>

          {/* <div className='ms-3 my-6 text-gray-600'>
            <div className='flex gap-2'>
              <Users size={20} />
              <p className='text-base'>300 - 400 People</p>
            </div>
            <div className='flex gap-2 mt-4'>
              <HandPlatter size={20} />
              <p className='text-base'>Catering Available</p>
            </div>
            <div className='flex gap-2 mt-4'>
              <Users size={20} />
              <p className='text-base'>300 - 400 People</p>
            </div>
            <div className='flex gap-2 mt-4'>
              <HandPlatter size={20} />
              <p className='text-base'>Catering Available</p>
            </div>
          </div> */}
          <div className='mt-6'>
            <VenueBookingStepper />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mt-10">
        {/* Right Section - Visible First in Mobile, Moves to Right on Large Screens */}
        <div className="order-1 md:order-2 md:col-span-1 border rounded-md h-fit p-4">
          <div className='flex gap-2 items-center'>
            <Users />
            <div>
              <p>{productData.capacityIndoorOutdoor}</p>
              <span className='text-sm text-gray-600 mt-0'>Indoor and Outdoor</span>
            </div>
          </div>
          <div className='flex gap-2 pt-3'>
            <Users />
            <div>
              <p>{productData.capacityIndoor}</p>
              <span className='text-sm text-gray-600'>Indoor</span>
            </div>
          </div>
          <div className='flex gap-2 pt-3'>
            <Users size={30} />
            <div>
              <p>{productData.capacityOutdoor}</p>
              <span className='text-sm text-gray-600'>Outdoor</span>
            </div>
          </div>
        </div>

        {/* Left Section - Appears Below on Mobile, Moves Left on Large Screens */}
        <div className="bg-gray-50 text-wrap px-4 rounded-md order-2 md:order-1 md:col-span-3">
          
          <div className="whitespace-pre-wrap break-words text-gray-700 font-custom leading-relaxed">
            {expanded
              ? productData.detailedDescription
              : productData.detailedDescription.split("\n").slice(0, 5).join("\n")}
          </div>

          {/* See More / See Less Toggle Button */}
          <button
            className="mt-3 text-blue-600 hover:underline font-medium mb-4"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? "See Less" : "See More"}
          </button>
        </div>
      </div>


      {/* Display Related Products */}
      <RelatedProducts />

      {/* Full-Screen Image Modal */}
      {isFullScreen && (
        <div 
          className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-80 z-50" 
          onClick={() => setIsFullScreen(false)}
        >
          <img className="w-auto max-h-screen rounded-lg" src={image} alt="Full Screen Product" />
        </div>
      )}
    </div>
  );
};

export default BookingProductPage;
