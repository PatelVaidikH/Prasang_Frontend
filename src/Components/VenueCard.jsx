import { MapPin, Star, Users } from "lucide-react";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MainContext } from "../Context/MainContext";

const VenueCard = ({id, image, name, rating, category, city, capacityIndoorOutdoor, price}) => {

  const {currency} = useContext(MainContext)

  return (
    <Link
      to={`/venue/bookingPage/${id}`}
      key={id}
      className="bg-white rounded-lg shadow-md overflow-hidden"
    >
      <img
        src={image[0]}
        alt={name}
        className="w-full h-52 object-cover"
      />
      <div className="p-4">
        <div className="flex justify-between">
          <h3 className="text-lg font-semibold">{name}</h3>
          <div className="flex items-center gap-1 text-gray-600 text-sm">
            <Star fill="#facc15" size={16} className="text-yellow-400" />
            <span>{rating}</span>
          </div>
        </div>
        <p className="text-sm text-gray-500 mb-2">{category}</p>
        <div className="flex gap-4 my-4">
          <div className="flex text-gray-500 text-sm items-center gap-1">
            <MapPin size={18} />
            {city}
          </div>
          <div className="flex text-gray-500 text-sm items-center gap-1">
            <Users size={18} />
            {capacityIndoorOutdoor}
          </div>
        </div>
        <p className="text-sm text-gray-500">
          From:{" "}
          <span className="text-lg font-bold text-black">
            {currency}
            {price}
          </span>
        </p>
        <button
          onClick={() => navigate(`/venue/${venue.id}`)}
          className="mt-4 w-full bg-black text-sm text-white py-2 rounded-md hover:bg-opacity-80"
        >
          View Details
        </button>
      </div>
    </Link>
  );
};

export default VenueCard;
