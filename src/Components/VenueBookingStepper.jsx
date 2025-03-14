import React, { useState } from "react";

const VenueBookingStepper = () => {
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState("");
  const [isAvailable, setIsAvailable] = useState(null);
  const [price, setPrice] = useState(null);
  const [eventDetails, setEventDetails] = useState({
    eventDate: "",
    eventTime: "",
    eventType: "Wedding",
    guests: "",
    instructions: "",
  });

  // Mock price data for specific dates
  const specialPricing = {
    "2025-03-20": 300000,
    "2025-03-13": 250000,
    "2025-03-25": 280000,
  };

  // Example unavailable dates
  const unavailableDates = ["2025-03-15", "2025-03-18"];

  const checkAvailability = (date) => {
    setSelectedDate(date);

    if (unavailableDates.includes(date)) {
      setIsAvailable(false);
      setPrice(null);
    } else {
      setIsAvailable(true);
      setPrice(specialPricing[date] || 200000); // Default price if not in specialPricing
    }
  };

  const handleNext = () => setStep(2);
  const handleBack = () => setStep(1);

  const handleInputChange = (e) => {
    setEventDetails({ ...eventDetails, [e.target.name]: e.target.value });
  };

  const handleBooking = () => {
    alert("Venue booked successfully!");
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-sm rounded-lg border-[1px] border-gray-200">
      <h2 className="text-2xl font-semibold mb-4 text-center">
        {step === 1 ? "Check Venue Availability" : "Enter Event Details"}
      </h2>

      {/* Step 1: Select Date & Check Availability */}
      {step === 1 && (
        <div>
          <label className="block text-gray-600 mb-2">Select a date:</label>
          <input
            type="date"
            className="border p-2 rounded-md w-full"
            value={selectedDate}
            onChange={(e) => checkAvailability(e.target.value)}
          />

          {selectedDate && (
            <p className="mt-3 text-sm">
              {isAvailable === null ? "" : isAvailable ? (
                <span className="text-green-600">
                  Available on {selectedDate} for ₹{price.toLocaleString()}
                </span>
              ) : (
                <span className="text-red-600">Not available on {selectedDate}</span>
              )}
            </p>
          )}

          {isAvailable && (
            <button
              className="mt-5 bg-blue-600 text-white px-6 py-2 rounded-md w-full"
              onClick={handleNext}
            >
              Next
            </button>
          )}
        </div>
      )}

      {/* Step 2: Enter Event Details */}
      {step === 2 && (
        <div>
          <label className="block text-gray-600 mt-4">Event Date:</label>
          <input
            type="date"
            name="eventDate"
            className="border p-2 rounded-md w-full"
            value={eventDetails.eventDate}
            onChange={handleInputChange}
          />

          <label className="block text-gray-600 mt-4">Event Time:</label>
          <input
            type="time"
            name="eventTime"
            className="border p-2 rounded-md w-full"
            value={eventDetails.eventTime}
            onChange={handleInputChange}
          />

          <label className="block text-gray-600 mt-4">Event Type:</label>
          <select
            name="eventType"
            className="border p-2 rounded-md w-full"
            value={eventDetails.eventType}
            onChange={handleInputChange}
          >
            <option>Wedding</option>
            <option>Birthday Party</option>
            <option>Corporate Event</option>
            <option>Other</option>
          </select>

          <label className="block text-gray-600 mt-4">Number of Guests:</label>
          <input
            type="number"
            name="guests"
            className="border p-2 rounded-md w-full"
            value={eventDetails.guests}
            onChange={handleInputChange}
          />

          <label className="block text-gray-600 mt-4">Additional Instructions:</label>
          <textarea
            name="instructions"
            className="border p-2 rounded-md w-full"
            rows="3"
            value={eventDetails.instructions}
            onChange={handleInputChange}
          ></textarea>

          <div className="flex justify-between mt-5">
            <button
              className="bg-gray-400 text-white px-6 py-2 rounded-md"
              onClick={handleBack}
            >
              Back
            </button>
            <button
              className="bg-green-600 text-white px-6 py-2 rounded-md"
              onClick={handleBooking}
            >
              Book Venue
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VenueBookingStepper;
