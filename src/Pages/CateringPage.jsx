import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MainContext } from '../Context/MainContext';
import RelatedProducts from '../Components/RelatedProducts';
import { HandPlatter, Heart, Star, Users } from 'lucide-react';
import { serviceProviders } from '../assets/assets';
import ProductPageImages from '../Components/ProductPageImages';
import VenueBookingStepper from '../Components/VenueBookingStepper';
import CateringStepper from '../Components/CateringStepper';

const CateringPage = () => {
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

  if (!productData) {
    return <div className="text-center font-bold">Product not found</div>;
  }

  return (
    <div>
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
              <h1 className='font-semibold text-3xl mt-2'>{productData.name}</h1>
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

          <div className='w-full flex flex-wrap gap-5  my-6 text-gray-600'>
            <span className='text-sm px-2 py-1 border rounded-md'>Punjabi</span>
            <span className='text-sm px-2 py-1 border rounded-md'>Gujarati</span>
            <span className='text-sm px-2 py-1 border rounded-md'>Chinese</span>
            <span className='text-sm px-2 py-1 border rounded-md'>Indo-Chinese</span>
            <span className='text-sm px-2 py-1 border rounded-md'>Italian</span>
            <span className='text-sm px-2 py-1 border rounded-md'>Mexican</span>
            <span className='text-sm px-2 py-1 border rounded-md'>South Indian</span>
          </div>
          <p className='text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus exercitationem accusamus ab. Explicabo earum dolores, perspiciatis sed magni aperiam nesciunt provident. Architecto rerum nobis possimus, reiciendis sunt aliquid accusamus deserunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere distinctio blanditiis magni fuga architecto beatae omnis enim labore veritatis sed nemo, voluptatum pariatur laboriosam, cumque harum quia quidem odio doloribus!</p>

        </div>
      </div>

      <CateringStepper />
    </div>
  )
}

export default CateringPage