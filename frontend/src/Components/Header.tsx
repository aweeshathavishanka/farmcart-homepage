import React from "react";
import NewsBar from "./NewsBar";

const Header = () => {
  return (
    <div className="">
      <div className="flex items-center justify-between py-6 mx-auto border-b max-w-7xl">
        <div>
          <img src="../assets/Logo.png" alt="Logo" />
        </div>

        <div className="flex items-center gap-6 ">
          <div className="flex items-center gap-4 ">
            <span className=" text-black hover:text-[#99DD05] cursor-pointer hover:underline text-sm">
              Become a Seller
            </span>
            <span className=" text-black hover:text-[#99DD05] cursor-pointer hover:underline text-sm">
              Become a Driver
            </span>
            <span className=" text-black hover:text-[#99DD05] cursor-pointer hover:underline text-sm">
              Help & Support
            </span>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <button className="py-3 border border-black hover:border-[#99DD05] rounded-lg px-7 hover:bg-[#99DD05]">
              SignUp
            </button>
            <button className="py-3 bg-[#99DD05] rounded-lg px-7 hover:bg-[#99DD05]/60">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
