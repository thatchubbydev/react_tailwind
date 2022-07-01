import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  //   function belo just reverses polarity of nav
  const handleClick = () => {
    setNav(!nav);
  };
  return (
    // parent container
    <div className="w-full h-[90px] bg-black justify-center">
      {/* header and list and buttons */}
      <div className="max-w-[1240px] flex container flex-row mx-auto h-full justify-between px-4 p-2">
        {/* header */}
        <div className="items-center pt-4">
          <h1 className="text-[#00d8ef]">FIDE</h1>
        </div>
        {/* list items */}
        <div className="hidden md:flex ">
          <ul className="text-white flex items-center">
            <li>platform</li>
            <li>Developers</li>
            <li>Community</li>
            <li>About</li>
            <button>Use Defi</button>
          </ul>
        </div>
        {/* hamburger menu */}
        <div onClick={handleClick} className="block md:hidden mt-5">
          {nav ? (
            <AiOutlineClose size={30} className="text-white" />
          ) : (
            <AiOutlineMenu size={30} className="text-white" />
          )}
        </div>
        {/* mobile menu  */}
        <div
          className={
            nav
              ? "md:hidden w-full bg-black top-[90px] absolute left-0 right-0 text-white justify-center "
              : "hidden"
          }
        >
          <ul className=" justify-center items-center flex flex-col">
            <li className="text-2xl">Developers</li>
            <li className="text-2xl">Community</li>
            <li className="text-2xl">platform</li>
            <li className="text-2xl">About</li>
            <button className="mt-4 mb-2 px-6 ">Use Defi</button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
