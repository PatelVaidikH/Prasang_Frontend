import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  PartyPopper, Utensils, Camera, Music, Mail, Shield, Bus 
} from "lucide-react"; // Import Lucide icons

export default function EventServices() {
  const navigate = useNavigate();

  // Service list with associated icons
  const services = [
    { id: 1, name: "Venue Decoration", icon: <PartyPopper size={24} /> },
    { id: 2, name: "Catering Services", icon: <Utensils size={24} /> },
    { id: 3, name: "Photography & Videography", icon: <Camera size={24} /> },
    { id: 4, name: "DJ & Sound System", icon: <Music size={24} /> },
    { id: 5, name: "Invitation Cards", icon: <Mail size={24} /> },
    { id: 6, name: "Security & Bouncers", icon: <Shield size={24} /> },
    { id: 7, name: "Transportation", icon: <Bus size={24} /> },
  ];

  // State to manage selected services
  const [selectedServices, setSelectedServices] = useState([]);

  // Toggle selection (only when clicking the checkbox)
  const handleCheckboxClick = (id) => {
    setSelectedServices((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((serviceId) => serviceId !== id) // Remove if already selected
        : [...prevSelected, id] // Add if not selected
    );
  };

  // Handle row click (navigates to another page)
  const handleRowClick = (id, event) => {
    if (event.target.type === "checkbox") return; // Prevent navigation if checkbox clicked
    navigate(`/service/${id}/vendorsList`);
  };

  return (
    <div className="min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Select Required Services</h1>

      <div className="max-w-2xl mx-auto space-y-4">
        {services.map((service) => (
          <div
            key={service.id}
            className={`flex items-center justify-between p-4 border rounded-lg shadow-sm cursor-pointer transition duration-300 ${
              selectedServices.includes(service.id) ? "bg-green-100 border-2 border-green-500 text-green-700" : "bg-white"
            }`}
            onClick={(e) => handleRowClick(service.id, e)}
          >
            <div className="flex items-center gap-3">
              {service.icon}
              <span className="text-lg font-medium">{service.name}</span>
            </div>
            <input
              type="checkbox"
              checked={selectedServices.includes(service.id)}
              onChange={() => handleCheckboxClick(service.id)}
              className="w-5 h-5 cursor-pointer accent-green-500"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
