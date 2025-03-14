import { Star } from "lucide-react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { MainContext } from "../Context/MainContext";

const CateringCard = ({ id, image, name, rating, cuisines, pricePerPlate }) => {
  const { currency } = useContext(MainContext);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {/* Image */}
      <img src={image} alt={name} className="w-full h-52 object-cover" />

      <div className="p-4">
        {/* Name & Rating */}
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold">{name}</h3>
          <div className="flex items-center gap-1 text-gray-600 text-sm">
            <Star fill="#facc15" size={16} className="text-yellow-400" />
            <span>{rating}</span>
          </div>
        </div>

        {/* Cuisine List */}
        <p className="text-sm text-gray-500 mt-2">
          {cuisines.join(", ")}
        </p>

        {/* Price Per Plate */}
        <p className="text-sm text-gray-500 mt-2">
          From: <span className="text-lg font-bold text-black">{currency}{pricePerPlate}</span> per plate
        </p>

        {/* See More Button */}
        <Link to={`/catering/${id}`}>
          <button className="mt-4 w-full bg-black text-sm text-white py-2 rounded-md hover:bg-opacity-80">
            See More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CateringCard;