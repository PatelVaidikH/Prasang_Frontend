import { Route, Routes } from "react-router-dom"
import Navbar from "./Components/Navbar"
import Home from "./Pages/Home"
import BookingProductPage from "./Pages/BookingProductPage"
import OrderingProductPage from "./Pages/OrderingProductPage"
import AllEvents from "./Pages/AllEvents"
import AllServices from "./Pages/AllServices"
import EventServices from "./Pages/EventServices"
import Venues from "./Pages/VendorsListPage"
import VendorListPage from "./Pages/VendorsListPage"
import CateringPage from "./Pages/CateringPage"

function App() {

  return (
    <div className="">
      <Navbar />
      <div className="p-4 sm:p-10 max-w-screen-2xl mx-auto">
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/allevents' element={<AllEvents />} />
            <Route path='/venues' element={<Venues />} />
            <Route path='/allservices' element={<AllServices />} />
            <Route path='/cateringPage/:productId' element={<CateringPage />} />
            <Route path='/allevents/:eventId/services' element={<EventServices />} />
            <Route path="/venue/bookingPage/:productId" element={<BookingProductPage />} />
            <Route path="/ordering/:productId" element={<OrderingProductPage />} />
            <Route path="/service/:id/vendorsList" element={<VendorListPage />} />

        </Routes>
      </div>
    </div>
  )
}

export default App
