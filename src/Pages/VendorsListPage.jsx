import { useContext, useState } from "react";
import { Filter, Search, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { MainContext } from "../Context/MainContext";
import { allVenues } from "../assets/assets";
import VenueCard from "../Components/VenueCard";
import VenueFilterOptions from "../Components/VenueFilterOptions";

export default function VendorListPage() {
  const navigate = useNavigate();
  const [venueType, setVenueType] = useState("");
  const [city, setCity] = useState("");
  const [maxCapacity, setMaxCapacity] = useState("");
  const [maxPrice, setMaxPrice] = useState(100000);
  const [sortOption, setSortOption] = useState("default");
  const [search, setSearch] = useState("");
  const [filtersOpen, setFiltersOpen] = useState(false);
  const { currency } = useContext(MainContext);

  // Filtering logic
  let filteredVenues = allVenues.filter((venue) => {
    return (
      (venueType === "" || venue.category.toLowerCase() === venueType.toLowerCase()) &&
      (city === "" || venue.city.toLowerCase() === city.toLowerCase()) &&
      (maxCapacity === "" || parseInt(venue.capacityIndoorOutdoor.split(" ")[0]) >= parseInt(maxCapacity)) &&
      venue.startingPrice <= maxPrice &&
      (search === "" || venue.name.toLowerCase().includes(search.toLowerCase()))
    );
  });

  // Sorting logic
  if (sortOption === "priceLowToHigh") {
    filteredVenues.sort((a, b) => a.startingPrice - b.startingPrice);
  } else if (sortOption === "topRated") {
    filteredVenues.sort((a, b) => b.rating - a.rating);
  } else if (sortOption === "atoz") {
    filteredVenues.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortOption === "ztoa") {
    filteredVenues.sort((a, b) => b.name.localeCompare(a.name));
  }

  return (
    <>
      <div className="flex flex-col md:flex-row items-center gap-4 px-6">
        {/* Search Input with Icon */}
        <div className="relative w-full md:w-4/5">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Search venues..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full h-10 py-2 pl-10 pr-3 text-sm font-light border border-gray-200 rounded-md focus:outline-none focus:ring-0 focus:border-zinc-400 focus:border-2"
          />
        </div>

        {/* Sort Dropdown (20% width) with adjusted arrow */}
        <div className="relative w-full md:w-1/5">
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="w-full h-10 appearance-none bg-white text-sm py-2 pl-3 pr-10 border rounded-md focus:ring-0 focus:border-zinc-400 focus:border-2"
          >
            <option value="default">Sort by</option>
            <option value="priceLowToHigh">Price: Low to High</option>
            <option value="topRated">Top Rated</option>
            <option value="atoz">A to Z</option>
            <option value="ztoa">Z to A</option>
          </select>
          {/* Custom Dropdown Arrow */}
          <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6 p-6">
        <button
          className="md:hidden flex items-center gap-2 bg-black text-white p-2 rounded-md w-full"
          onClick={() => setFiltersOpen(!filtersOpen)}
        >
          <Filter size={18} />
          {filtersOpen ? "Hide Filters" : "Show Filters"}
        </button>

        <div
          className={`w-full md:w-1/4 bg-white p-4 border rounded-lg shadow-sm ${
            filtersOpen ? "block" : "hidden md:block"
          } flex flex-col h-fit`}
        >
          <VenueFilterOptions
            venueType={venueType}
            setVenueType={setVenueType}
            city={city}
            setCity={setCity}
            maxCapacity={maxCapacity}
            setMaxCapacity={setMaxCapacity}
            maxPrice={maxPrice}
            setMaxPrice={setMaxPrice}
            currency={currency}
          />
        </div>

        <div className="w-full md:w-3/4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredVenues.length > 0 ? (
              filteredVenues.map((venue) => (
                <VenueCard key={venue.id} id={venue.id} image={venue.image} name={venue.name} rating={venue.rating} category={venue.category} city={venue.city} capacityIndoorOutdoor={venue.capacityIndoorOutdoor} price={venue.startingPrice} />
              ))
            ) : (
              <p className="text-gray-500">No venues match your criteria.</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
