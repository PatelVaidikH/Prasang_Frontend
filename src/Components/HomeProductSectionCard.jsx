import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MainContext } from "../Context/MainContext";
import { Star } from "lucide-react";

const HomeProductSectionCard = ({id, name, price, rating, reviewCount, area, city, image }) => {
  const { currency } = useContext(MainContext);

  return (
    <Link to={`/product/${id}`} className="bg-gray-50 rounded-md overflow-hidden mx-5 sm:mx-0 pb-3 hover:scale-105 transition-all ease-in-out">
      <div className="overflow-hidden h-52">
        <img
          className="w-full"
          src={image}
          alt=""
        />
      </div>
      <div className="px-4">
        <p className="pt-3 pb-1 text-lg font-semibold text-[#252B42]">
          {name}
        </p>
        <p className="text-sm font-medium text-gray-600 pb-0.5">
          From {currency} {price}
        </p>
        <div>
          <div className="flex text-sm pb-0.5">
            <Star fill="#ffc408" strokeWidth={0} size={16} />
            <span className="font-normal text-sm text-gray-600">{rating} ({reviewCount})</span>
          </div>
            <p className="text-sm font-normal text-gray-600">
              {area} • {city}
            </p>
        </div>
      </div>
    </Link>
  );
};

export default HomeProductSectionCard;
