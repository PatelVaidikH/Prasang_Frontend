import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { allEvents, assets } from "../assets/assets";
import { ChevronDown, Search, X } from "lucide-react";

export default function AllEvents() {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("latest");
  const [showPopup, setShowPopup] = useState(false);
  const [animatePopup, setAnimatePopup] = useState(false);

  const filteredEvents = allEvents.filter(
    (event) =>
      event.name && event.name.toLowerCase().includes(search.toLowerCase())
  );

  // Show popup after 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
      setAnimatePopup(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Handle closing popup with animation
  const handleClose = () => {
    setAnimatePopup(false);
    setTimeout(() => setShowPopup(false), 300); // Delay removal for animation
  };

  return (
    <div className="sm:px-6 sm:py-3">
      {/* Popup Modal */}
      {showPopup && (
        <div
          className={`fixed inset-0 flex items-center justify-center bg-black/50 z-50 duration-300 transition-all ease-in-out ${
            animatePopup ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className={`relative bg-white p-6 mx-2 rounded-lg shadow-lg max-w-md text-center transform transition-all duration-300 ${
              animatePopup ? "scale-100" : "scale-75"
            }`}
          >
            {/* Close Button */}
            <X
              onClick={handleClose}
              className="absolute top-3 right-5 cursor-pointer"
              size={30}
            />

            {/* Animated Graphic */}
            <img
              src="https://i.pinimg.com/1200x/37/61/9e/37619e8bd98cd0ba5320e8cf9aea402d.jpg"
              alt="Select Event"
              className="mx-auto w-60 mb-4"
              loading="eager"
              draggable="false"
            />

            <h2 className="text-xl font-semibold mb-2">Select Your Event</h2>
            <p className="text-gray-600">
              Choose the event you are planning to see the template and required
              services.
            </p>
          </div>
        </div>
      )}

      <div className="flex flex-col md:flex-row items-center gap-4 mb-6">
        {/* Search Input with Icon */}
        <div className="relative w-full md:w-4/5">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Search events..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full h-10 py-2 pl-10 pr-3 text-sm font-light border border-gray-200 rounded-md focus:outline-none focus:ring-0 focus:border-zinc-400 focus:border-2"
          />
        </div>

        {/* Sort Dropdown (20% width) with adjusted arrow */}
        <div className="relative w-full md:w-1/5">
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="w-full h-10 appearance-none bg-white text-sm py-2 pl-3 pr-10 border rounded-md focus:ring-0 focus:border-zinc-400 focus:border-2"
          >
            <option value="popular">Most Popular</option>
            <option value="atoz">A to Z</option>
            <option value="ztoa">Z to A</option>
          </select>
          {/* Custom Dropdown Arrow */}
          <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        </div>
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredEvents.map((event) => (
          <Link
            key={event.eventId}
            to={`${event.eventId}/services`}
            className="relative h-40 w-full rounded-lg overflow-hidden shadow-md cursor-pointer"
          >
            <img
              src={event.img}
              alt={event.name}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="allevents-title absolute bottom-0 left-0 w-full h-full bg-black/50 text-white px-3 text-5xl font-bold flex items-end">
              <p className="pb-4">{event.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
