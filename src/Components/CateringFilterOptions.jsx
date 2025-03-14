import { useState, useContext } from "react";
import { MainContext } from "../Context/MainContext";

export default function CateringFilterOptions() {
  const [selectedCuisines, setSelectedCuisines] = useState([]);
  const [maxPricePerPlate, setMaxPricePerPlate] = useState(1000);
  const [minRating, setMinRating] = useState(0);
  const { currency } = useContext(MainContext);

  const cuisines = ["Indian", "Chinese", "Italian", "Mexican", "Continental"];

  const toggleCuisine = (cuisine) => {
    setSelectedCuisines((prev) =>
      prev.includes(cuisine) ? prev.filter((c) => c !== cuisine) : [...prev, cuisine]
    );
  };

  return (
    <>
      <h2 className="text-lg font-semibold mb-4">Catering Filters</h2>

      {/* Cuisine Filter */}
      <label className="block mb-2 text-sm font-medium">Cuisine</label>
      <div className="mb-4 space-y-2">
        {cuisines.map((cuisine) => (
          <div key={cuisine} className="flex items-center gap-2">
            <input
              type="checkbox"
              value={cuisine}
              checked={selectedCuisines.includes(cuisine)}
              onChange={() => toggleCuisine(cuisine)}
              className="accent-black"
            />
            <label className="text-sm">{cuisine}</label>
          </div>
        ))}
      </div>

      {/* Price Per Plate Filter */}
      <label className="block mb-2 text-sm font-medium">Max Price Per Plate: {currency}{maxPricePerPlate}</label>
      <input
        type="range"
        min="200"
        max="1000"
        value={maxPricePerPlate}
        onChange={(e) => setMaxPricePerPlate(e.target.value)}
        className="w-full accent-black"
      />

      {/* Rating Filter */}
      <label className="block mt-4 mb-2 text-sm font-medium">Minimum Rating</label>
      <select
        value={minRating}
        onChange={(e) => setMinRating(e.target.value)}
        className="w-full bg-white text-sm p-3 border rounded-md"
      >
        <option value="0">All Ratings</option>
        <option value="1">1 Star & Above</option>
        <option value="2">2 Stars & Above</option>
        <option value="3">3 Stars & Above</option>
        <option value="4">4 Stars & Above</option>
      </select>
    </>
  );
}
