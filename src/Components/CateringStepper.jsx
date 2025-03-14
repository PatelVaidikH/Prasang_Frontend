import React, { useState } from "react";

const cateringPackages = [
  { id: 1, name: "Basic Package", price: 25, minGuests: 20, maxGuests: 100 },
  { id: 2, name: "Premium Package", price: 45, minGuests: 50, maxGuests: 200 },
  { id: 3, name: "Deluxe Package", price: 75, minGuests: 100, maxGuests: 500 },
];

const menuOptions = {
  appetizers: {
    1: [
      {
        name: "Spring Rolls",
        desc: "Crispy and delicious rolls.",
        type: "Vegetarian",
      },
      {
        name: "Garlic Bread",
        desc: "Buttery garlic breadsticks.",
        type: "Vegetarian",
      },
      {
        name: "Bruschetta",
        desc: "Toasted bread with tomato.",
        type: "Vegetarian",
      },
      {
        name: "Stuffed Mushrooms",
        desc: "Mushrooms filled with cheese.",
        type: "Vegetarian",
      },
      {
        name: "Sushi Rolls",
        desc: "Fresh sushi rolls with fish.",
        type: "Non-Vegetarian",
      },
      {
        name: "Shrimp Cocktail",
        desc: "Chilled shrimp with sauce.",
        type: "Non-Vegetarian",
      },
      { name: "Spinach Dip", desc: "Creamy spinach dip.", type: "Vegetarian" },
    ],
    2: [
      {
        name: "Spring Rolls",
        desc: "Crispy and delicious rolls.",
        type: "Vegetarian",
      },
      {
        name: "Garlic Bread",
        desc: "Buttery garlic breadsticks.",
        type: "Vegetarian",
      },
      {
        name: "Bruschetta",
        desc: "Toasted bread with tomato.",
        type: "Vegetarian",
      },
      {
        name: "Stuffed Mushrooms",
        desc: "Mushrooms filled with cheese.",
        type: "Vegetarian",
      },
      {
        name: "Sushi Rolls",
        desc: "Fresh sushi rolls with fish.",
        type: "Non-Vegetarian",
      },
      {
        name: "Shrimp Cocktail",
        desc: "Chilled shrimp with sauce.",
        type: "Non-Vegetarian",
      },
      { name: "Spinach Dip", desc: "Creamy spinach dip.", type: "Vegetarian" },
    ],
    3: [
      {
        name: "Spring Rolls",
        desc: "Crispy and delicious rolls.",
        type: "Vegetarian",
      },
      {
        name: "Garlic Bread",
        desc: "Buttery garlic breadsticks.",
        type: "Vegetarian",
      },
      {
        name: "Bruschetta",
        desc: "Toasted bread with tomato.",
        type: "Vegetarian",
      },
      {
        name: "Stuffed Mushrooms",
        desc: "Mushrooms filled with cheese.",
        type: "Vegetarian",
      },
      {
        name: "Sushi Rolls",
        desc: "Fresh sushi rolls with fish.",
        type: "Non-Vegetarian",
      },
      {
        name: "Shrimp Cocktail",
        desc: "Chilled shrimp with sauce.",
        type: "Non-Vegetarian",
      },
      { name: "Spinach Dip", desc: "Creamy spinach dip.", type: "Vegetarian" },
    ],
  },
  mainCourse: {
    1: [
      { name: "Pasta", desc: "Creamy Alfredo pasta.", type: "Vegetarian" },
      {
        name: "Grilled Chicken",
        desc: "Marinated grilled chicken.",
        type: "Non-Vegetarian",
      },
      { name: "Steak", desc: "Juicy grilled steak.", type: "Non-Vegetarian" },
      {
        name: "Grilled Salmon",
        desc: "Salmon with herbs.",
        type: "Non-Vegetarian",
      },
      {
        name: "Lobster Tail",
        desc: "Butter-grilled lobster.",
        type: "Non-Vegetarian",
      },
      {
        name: "Lamb Chops",
        desc: "Tender lamb with spices.",
        type: "Non-Vegetarian",
      },
      {
        name: "Vegetable Curry",
        desc: "Mix vegetable curry.",
        type: "Vegetarian",
      },
    ],
    2: [
      { name: "Pasta", desc: "Creamy Alfredo pasta.", type: "Vegetarian" },
      {
        name: "Grilled Chicken",
        desc: "Marinated grilled chicken.",
        type: "Non-Vegetarian",
      },
      { name: "Steak", desc: "Juicy grilled steak.", type: "Non-Vegetarian" },
      {
        name: "Grilled Salmon",
        desc: "Salmon with herbs.",
        type: "Non-Vegetarian",
      },
      {
        name: "Lobster Tail",
        desc: "Butter-grilled lobster.",
        type: "Non-Vegetarian",
      },
      {
        name: "Lamb Chops",
        desc: "Tender lamb with spices.",
        type: "Non-Vegetarian",
      },
      {
        name: "Vegetable Curry",
        desc: "Mix vegetable curry.",
        type: "Vegetarian",
      },
    ],
    3: [
      { name: "Pasta", desc: "Creamy Alfredo pasta.", type: "Vegetarian" },
      {
        name: "Grilled Chicken",
        desc: "Marinated grilled chicken.",
        type: "Non-Vegetarian",
      },
      { name: "Steak", desc: "Juicy grilled steak.", type: "Non-Vegetarian" },
      {
        name: "Grilled Salmon",
        desc: "Salmon with herbs.",
        type: "Non-Vegetarian",
      },
      {
        name: "Lobster Tail",
        desc: "Butter-grilled lobster.",
        type: "Non-Vegetarian",
      },
      {
        name: "Lamb Chops",
        desc: "Tender lamb with spices.",
        type: "Non-Vegetarian",
      },
      {
        name: "Vegetable Curry",
        desc: "Mix vegetable curry.",
        type: "Vegetarian",
      },
    ],
  },
  desserts: {
    1: [
      {
        name: "Chocolate Cake",
        desc: "Rich chocolate cake.",
        type: "Vegetarian",
      },
      {
        name: "Fruit Salad",
        desc: "Assorted fresh fruits.",
        type: "Vegetarian",
      },
      {
        name: "Ice Cream",
        desc: "Various ice cream flavors.",
        type: "Vegetarian",
      },
      { name: "Panna Cotta", desc: "Italian dessert.", type: "Vegetarian" },
      { name: "Brownies", desc: "Chocolate brownies.", type: "Vegetarian" },
      { name: "Cheesecake", desc: "Creamy cheesecake.", type: "Vegetarian" },
      { name: "Apple Pie", desc: "Classic apple pie.", type: "Vegetarian" },
    ],
    2: [
      {
        name: "Chocolate Cake",
        desc: "Rich chocolate cake.",
        type: "Vegetarian",
      },
      {
        name: "Fruit Salad",
        desc: "Assorted fresh fruits.",
        type: "Vegetarian",
      },
      {
        name: "Ice Cream",
        desc: "Various ice cream flavors.",
        type: "Vegetarian",
      },
      { name: "Panna Cotta", desc: "Italian dessert.", type: "Vegetarian" },
      { name: "Brownies", desc: "Chocolate brownies.", type: "Vegetarian" },
      { name: "Cheesecake", desc: "Creamy cheesecake.", type: "Vegetarian" },
      { name: "Apple Pie", desc: "Classic apple pie.", type: "Vegetarian" },
    ],
    3: [
      {
        name: "Chocolate Cake",
        desc: "Rich chocolate cake.",
        type: "Vegetarian",
      },
      {
        name: "Fruit Salad",
        desc: "Assorted fresh fruits.",
        type: "Vegetarian",
      },
      {
        name: "Ice Cream",
        desc: "Various ice cream flavors.",
        type: "Vegetarian",
      },
      { name: "Panna Cotta", desc: "Italian dessert.", type: "Vegetarian" },
      { name: "Brownies", desc: "Chocolate brownies.", type: "Vegetarian" },
      { name: "Cheesecake", desc: "Creamy cheesecake.", type: "Vegetarian" },
      { name: "Apple Pie", desc: "Classic apple pie.", type: "Vegetarian" },
    ],
  },
};

const CateringStepper = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedPackage, setSelectedPackage] = useState(cateringPackages[0]);
  const [guestCount, setGuestCount] = useState(selectedPackage.minGuests);
  const [eventDate, setEventDate] = useState("");
  const [eventTime, setEventTime] = useState("");
  const [eventType, setEventType] = useState("");
  const [selectedMenu, setSelectedMenu] = useState([]);
  const [activeTab, setActiveTab] = useState("appetizers");
  const [vegetarian, setVegetarian] = useState(false);
  const [vegan, setVegan] = useState(false);
  const handleNextStep = () => setCurrentStep((prev) => Math.min(prev + 1, 4));
  const handlePrevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));
  const calculateTotal = () => selectedPackage.price * guestCount;

  const toggleMenuItem = (item) => {
    setSelectedMenu((prev) =>
      prev.find((i) => i.name === item.name)
        ? prev.filter((i) => i.name !== item.name)
        : [...prev, item]
    );
  };

  return (
    <div className="border rounded-lg overflow-hidden mx-auto mt-10">
      <div className="bg-gray-100 p-4">
        <div className="flex justify-between items-center">
          <h3 className="font-medium">Customize Your Package</h3>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">
              Step {currentStep} of 4
            </span>
            <div className="flex gap-1">
              {[1, 2, 3, 4].map((step) => (
                <div
                  key={step}
                  className={`h-2 w-8 rounded-full ${
                    step === currentStep ? "bg-blue-500" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Step 1: Event Details */}
        {currentStep === 1 && (
          <div>
            <h3 className="text-lg font-medium mb-4">Select a Package</h3>
            <div className="grid grid-cols-3 gap-4">
              {cateringPackages.map((pkg) => (
                <div
                  key={pkg.id}
                  className={`p-4 border rounded-lg cursor-pointer ${
                    selectedPackage?.id === pkg.id
                      ? "bg-blue-100 border-blue-500"
                      : "bg-white"
                  }`}
                  onClick={() => setSelectedPackage(pkg)}
                >
                  <h4 className="font-medium">{pkg.name}</h4>
                  <p className="text-sm text-gray-600">
                    ${pkg.price} per guest
                  </p>
                  <p className="text-xs text-gray-500">
                    {pkg.minGuests}-{pkg.maxGuests} guests
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div>
            <h3 className="text-lg font-medium mb-4">Event Details</h3>
            <div className="grid grid-cols-2 gap-4">
              {/* Row 1: Event Date & Time */}
              <div>
                <label className="block font-medium">Event Date</label>
                <input
                  type="date"
                  className="w-full border p-2 rounded"
                  value={eventDate}
                  onChange={(e) => setEventDate(e.target.value)}
                />
              </div>
              <div>
                <label className="block font-medium">Event Time</label>
                <input
                  type="time"
                  className="w-full border p-2 rounded"
                  value={eventTime}
                  onChange={(e) => setEventTime(e.target.value)}
                />
              </div>

              {/* Row 2: Event Type & Number of Guests */}
              <div>
                <label className="block font-medium">Event Type</label>
                <select
                  className="w-full border p-2 rounded"
                  value={eventType}
                  onChange={(e) => setEventType(e.target.value)}
                >
                  <option value="">Select Type</option>
                  <option value="Wedding">Wedding</option>
                  <option value="Birthday">Birthday</option>
                  <option value="Corporate">Corporate</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label className="block font-medium">Number of Guests</label>
                <input
                  type="number"
                  className="w-full border p-2 rounded"
                  min={selectedPackage.minGuests}
                  max={selectedPackage.maxGuests}
                  value={guestCount}
                  onChange={(e) =>
                    setGuestCount(
                      Number(e.target.value) || selectedPackage.minGuests
                    )
                  }
                />
                <p className="text-xs text-gray-600">
                  Minimum 20 people required
                </p>
              </div>
            </div>

            {/* Row 3: Vegetarian & Vegan Options */}
            <div className="mt-4">
              <label className="block font-medium mb-2">
                Dietary Preferences
              </label>
              <div className="flex gap-4">
                <button
                  className={`px-4 py-2 border rounded ${
                    vegetarian ? "bg-green-200 border-green-500" : "bg-white"
                  }`}
                  onClick={() => setVegetarian(!vegetarian)}
                >
                  Vegetarian
                </button>
                <button
                  className={`px-4 py-2 border rounded ${
                    vegan ? "bg-green-200 border-green-500" : "bg-white"
                  }`}
                  onClick={() => setVegan(!vegan)}
                >
                  Vegan
                </button>
              </div>
            </div>
          </div>
        )}
        {currentStep === 3 && (
          <div>
            <h3 className="text-lg font-medium mb-4">Menu Selection</h3>
            <div className="flex gap-4 border-b pb-2">
              {Object.keys(menuOptions).map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 ${
                    activeTab === category
                      ? "border-b-2 border-blue-500 text-blue-500"
                      : "text-gray-600"
                  }`}
                  onClick={() => setActiveTab(category)}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-4 mt-4">
              {menuOptions[activeTab][selectedPackage.id].map((item) => (
                <div
                  key={item.name}
                  className={`p-4 border rounded-lg cursor-pointer ${
                    selectedMenu.find((i) => i.name === item.name)
                      ? "bg-blue-100 border-blue-500"
                      : "bg-white"
                  }`}
                  onClick={() => toggleMenuItem(item)}
                >
                  <h4 className="font-medium">{item.name}</h4>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                  <span
                    className={`px-2 py-1 text-xs rounded ${
                      item.type === "Vegetarian"
                        ? "bg-green-200 text-green-800"
                        : "bg-red-200 text-red-800"
                    }`}
                  >
                    {item.type}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {currentStep === 4 && (
          <div>
            <h3 className="text-lg font-medium mb-4">Order Summary</h3>
            <div className="bg-gray-100 p-4 rounded-lg">
              <p>
                <strong>Package:</strong> {selectedPackage.name}
              </p>
              <p>
                <strong>Guests:</strong> {guestCount}
              </p>
              <p>
                <strong>Event Date:</strong> {eventDate || "Not selected"}
              </p>
              <p>
                <strong>Event Time:</strong> {eventTime || "Not selected"}
              </p>
              <p>
                <strong>Selected Menu:</strong>{" "}
                {selectedMenu.length
                  ? selectedMenu.map((i) => i.name).join(", ")
                  : "No items selected"}
              </p>
              <p>
                <strong>Total:</strong> ${calculateTotal()}
              </p>
            </div>
          </div>
        )}
      </div>

      <div className="bg-gray-100 p-4 flex justify-between">
        {currentStep > 1 ? (
          <button onClick={handlePrevStep} className="px-4 py-2 border rounded">
            Previous
          </button>
        ) : (
          <div></div>
        )}
        {currentStep < 4 ? (
          <button
            onClick={handleNextStep}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Next
          </button>
        ) : (
          <button className="px-4 py-2 bg-green-500 text-white rounded">
            Complete
          </button>
        )}
      </div>
    </div>
  );
};

export default CateringStepper;
