import React from "react";

const Navbar = () => {
  return (
    // parent container
    <div className="w-full h-[90px] bg-black justify-center">
      {/* header and list and buttons */}
      <div className="max-w-[1240px] flex container flex-row mx-auto h-full justify-between px-4 p-2">
        {/* header */}
        <div className="items-center">
          <h1 className="text-[#00d8ef]">FIDE</h1>
        </div>
        {/* list items */}
        <div className="h-full ">
          <ul className="text-white flex items-center">
            <li>platform</li>
            <li>Developers</li>
            <li>Community</li>
            <li>About</li>
            <button>Use Defi</button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
