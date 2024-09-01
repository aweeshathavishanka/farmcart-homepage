import React, { useState } from "react";
import { MdOutlineLogout } from "react-icons/md";
import logo from "../assets/Logo.png";
import userImage from "../assets/user.jpg";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsDropdownOpen(false); // Ensure the dropdown is closed after logout
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div>
      <div className="flex items-center justify-between py-6 mx-auto border-b max-w-7xl">
        <div>
          <img src={logo} alt="Logo" width={160} height={160} />
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

              {/* User Button */}
              <div className="relative">
                <button
                  type="button"
                  className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                  id="user-menu-button"
                  aria-expanded={isDropdownOpen}
                  onClick={toggleDropdown} // Toggle the dropdown on click
                >
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="w-8 h-8 rounded-full"
                    src={userImage}
                    alt="user photo"
                  />
                </button>
                {/* Dropdown menu */}
                {isDropdownOpen && (
                  <div
                    className="absolute right-0 z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
                    id="user-dropdown">
                    <div className="px-4 py-3">
                      <span className="block text-sm text-gray-900 dark:text-white">
                        Aweesha Thavishanka
                      </span>
                      <span className="block text-sm text-gray-500 truncate dark:text-gray-400">
                        hello@awee.me
                      </span>
                    </div>
                    <ul className="py-2" aria-labelledby="user-menu-button">
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                          Dashboard
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                          Settings
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                          Earnings
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                          onClick={handleLogout} // Adding logout functionality here
                        >
                          Sign out
                        </a>
                      </li>
                    </ul>
                  </div>
                )}
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
