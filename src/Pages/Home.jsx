import React from "react";
import Hero from "../Components/Hero";
import HomeProductSection from "../Components/HomeProductSection";
import { serviceProviders } from "../assets/assets";
import Stepper from "../Components/CateringStepper";

const Home = () => {
  return (
    <div>
      <Hero />
      <HomeProductSection
        title1={"BEST SELLER"}
        title2={"MORE BEST SELLER"}
        data={serviceProviders}
        buttonText={"EXPLORE MORE"}
        desktopItemCount={8}
        mobileItemCount={3}
      />

      <HomeProductSection
        title1={"OUR BEST"}
        title2={"DECORATORS"}
        data={serviceProviders}
        buttonText={"EXPLORE MORE"}
        desktopItemCount={4}
        mobileItemCount={3}
      />

      <HomeProductSection
        title1={"Vraj Vyas"}
        title2={"DECORATORS"}
        data={serviceProviders}
        buttonText={"EXPLORE MORE"}
        desktopItemCount={4}
        mobileItemCount={1} 
      />

      <HomeProductSection
        title1={"Vednat"}
        title2={"DECORATORS"}
        data={serviceProviders}
        buttonText={"EXPLORE MORE"}
        desktopItemCount={7}
        mobileItemCount={1} 
      />
    </div>
  );
};

export default Home;
