import React, { useState } from "react";
import NewsBar from "./NewsBar";
import { MdOutlineLogout } from "react-icons/md";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const handleLogout = () => {
    setIsLoggedIn(true);
  };

  return (
    <div>
      <div className="flex items-center justify-between py-6 mx-auto border-b max-w-7xl">
        <div>
          <img src="../assets/Logo.png" alt="Logo" />
        </div>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-4">
            <span className="text-black hover:text-[#99DD05] cursor-pointer hover:underline text-sm">
              Become a Seller
            </span>
            <span className="text-black hover:text-[#99DD05] cursor-pointer hover:underline text-sm">
              Become a Driver
            </span>
            <span className="text-black hover:text-[#99DD05] cursor-pointer hover:underline text-sm">
              Help & Support
            </span>
          </div>

          {isLoggedIn ? (
            <div className="flex items-center gap-4 text-sm">
              <button
                className="flex items-center gap-2"
                onClick={handleLogout}>
                <MdOutlineLogout />
                Logout
              </button>
              <div className="text-white hover:text-[#99DD05] cursor-pointer hover:underline">
                <div className="flex items-center justify-center w-8 h-8 bg-[#99DD05] rounded-full ">
                  AT
                </div>
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-4 text-sm">
              <button className="py-3 border border-black hover:border-[#99DD05] rounded-lg px-7 hover:bg-[#99DD05]">
                SignUp
              </button>
              <button
                className="py-3 bg-[#99DD05] rounded-lg px-7 hover:bg-[#99DD05]/60"
                onClick={() => setIsLoggedIn(true)}>
                Login
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
