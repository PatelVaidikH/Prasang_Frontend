import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="bg-gray-50 py-5 sm:py-6">
  <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
    <p className="mx-auto mt-1 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance text-gray-950 sm:text-5xl">
      What are you planning today?
    </p>
    <div className="mt-10 grid gap-4 sm:mt-10 lg:grid-cols-3 lg:grid-rows-2">
      <Link to='/marriage' className="relative row-span-1 sm:row-span-1 lg:row-span-2 hover:scale-[102%] transition-all">
        <div className="bg-white"></div>
        <div className="relative flex h-full flex-col overflow-hidden" style={{ backgroundImage: `url(${assets.heroImage1})`,backgroundSize: "cover", backgroundPosition: "center"}}>
          <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
            <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
              Mobile friendly
            </p>
            <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.
            </p>
          </div>
          <div className="@container relative min-h-[30rem] w-full grow max-lg:mx-auto max-lg:max-w-sm">
          </div>
        </div>
      </Link>
      <Link to='/birthday'className="relative lg:col-span-2 hover:scale-[102%] transition-all">
        <div className="bg-white"></div>
        <div className="relative flex h-full flex-col overflow-hidden" style={{ backgroundImage: `url(${assets.heroImage2})`,backgroundSize: "cover", backgroundPosition: "center"}}>
          <div className="px-8 pt-8 sm:px-10 sm:pt-10">
            <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Performance</p>
            <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit maiores impedit.
            </p>
          </div>
          <div className="flex flex-1 items-center justify-center px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10 lg:pb-2">
            {/* <img className="w-full max-lg:max-w-xs" src="https://tailwindui.com/plus-assets/img/component-images/bento-03-performance.png" alt="" /> */}
          </div>
        </div>
      </Link>
      <Link to='/houseparty' className="relative hover:scale-[102%] transition-all">
        <div className="bg-white"></div>
        <div className="relative flex h-full flex-col overflow-hidden" style={{ backgroundImage: `url(${assets.heroImage3})`,backgroundSize: "cover", backgroundPosition: "center"}}>
          <div className="px-8 pt-8 sm:px-10 sm:pt-10">
            <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Security</p>
            <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
              Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi.
            </p>
          </div>
          <div className="@container flex flex-1 items-center max-lg:py-6 lg:pb-2">
            {/* <img className="h-[min(152px,40cqw)] object-cover" src="https://tailwindui.com/plus-assets/img/component-images/bento-03-security.png" alt="" /> */}
          </div>
        </div>
      </Link>
      <Link className="relative hover:scale-[102%] transition-all">
        <div className="bg-white"></div>
        <div className="relative flex h-full flex-col overflow-hidden" style={{ backgroundImage: `url(${assets.heroImage4})`,backgroundSize: "cover", backgroundPosition: "center"}}>
          <div className="px-8 pt-8 sm:px-10 sm:pt-10">
            <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Powerful APIs</p>
            <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
              Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget sem sodales gravida.
            </p>
          </div>
        </div>
      </Link>
    </div>
  </div>
</div>

  );
};

export default Hero;
