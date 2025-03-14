export default function VenueFilterOptions({
  venueType,
  setVenueType,
  city,
  setCity,
  maxCapacity,
  setMaxCapacity,
  maxPrice,
  setMaxPrice,
  currency
}) {
  return (
    <>
      <h2 className="text-lg font-semibold mb-4">Filters</h2>

      <label className="block mb-2 text-sm font-medium">Venue Type</label>
      <select
        value={venueType}
        onChange={(e) => setVenueType(e.target.value)}
        className="w-full bg-white text-sm p-3 border rounded-md mb-4"
      >
        <option value="">All Types</option>
        <option value="Banquet">Banquet</option>
        <option value="Wedding Lawn">Wedding Lawn</option>
      </select>

      <label className="block mb-2 text-sm font-medium">City</label>
      <select
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="w-full bg-white text-sm p-3 border rounded-md mb-4"
      >
        <option value="">All Cities</option>
        <option value="Vadodara">Vadodara</option>
      </select>

      <label className="block mb-2 text-sm font-medium">Maximum Capacity</label>
      <input
        type="number"
        placeholder="Enter max capacity"
        value={maxCapacity}
        onChange={(e) => setMaxCapacity(e.target.value)}
        className="w-full p-2 border rounded-md mb-4"
      />

      <label className="block mb-2 text-sm font-medium">
        Max Price: {currency}
        {maxPrice}
      </label>
      <input
        type="range"
        min="10000"
        max="100000"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
        className="w-full accent-black"
      />
    </>
  );
}
