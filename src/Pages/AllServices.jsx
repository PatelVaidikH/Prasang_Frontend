import { useState } from "react";
import { allServices } from "../assets/assets";
import { Link } from "react-router-dom";

export default function AllServices() {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("az");

  // Filter services based on search input
  const filteredServices = allServices
    .filter((service) => service.name.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      if (sort === "az") return a.name.localeCompare(b.name);
      if (sort === "za") return b.name.localeCompare(a.name);
      return 0;
    });

  return (
    <div className="px-6 py-3">
      <h2 className="text-3xl font-bold mb-6 text-center">All Services</h2>

      {/* Search & Sort Controls */}
      <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
        <input
          type="text"
          placeholder="Search services..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-1/2 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-0 focus:border-zinc-400 focus:border-2"
        />
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="w-full md:w-1/4 p-2 bg-white border rounded-md focus:ring-0 focus:border-zinc-400 focus:border-2"
        >
          <option value="az">A to Z</option>
          <option value="za">Z to A</option>
        </select>
      </div>

      {/* Services Grid */}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredServices.length > 0 ? (
          filteredServices.map((service) => (
            <Link
              to={`${service.id}`}
              key={service.id}
              className="p-4 rounded-lg border text-center text-lg font-normal cursor-pointer hover:bg-gray-50 transition"
            >
              {service.name}
            </Link>
          ))
        ) : (
          <p className="text-gray-500 text-center col-span-3">No services found.</p>
        )}
      </div>
    </div>
  );
}
