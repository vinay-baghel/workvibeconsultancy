import React from 'react';
import logoo from "../assets/logoo.png";
import apple from "../assets/apple.png";
import instagram from "../assets/instagram.png";
import facebook from "../assets/facebook.png";

const Footer = () => {
  return (
    <div className="bg-blue-950 text-white ">
      {/* --- Main Footer Content --- */}
      <div className="w-full px-4 py-10 md:py-14 flex flex-col md:flex-row items-center md:items-start justify-between gap-8 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img className="h-16 sm:h-20" src={logoo} alt="Logo" />
        </div>

        {/* Policy Links */}
        <div className="text-slate-400 flex flex-col sm:flex-row gap-2 sm:gap-4 text-sm text-center sm:text-left">
          <p className="cursor-pointer hover:underline">Privacy Policy</p>
          <p className="cursor-pointer hover:underline">Terms & Conditions</p>
          <p className="cursor-pointer hover:underline">Security</p>
          <p className="cursor-pointer hover:underline">Privacy Notice</p>
          <p className="cursor-pointer hover:underline">Cookies Policy</p>
        </div>

        {/* Social Icons */}
        <div className="flex flex-col items-center md:items-end gap-3">
          <h3 className="text-2xl font-semibold">Follow Us</h3>
          <div className="w-24 h-0.5 bg-white"></div>
          <div className="flex gap-4 mt-2">
            <a href="https://www.instagram.com/workvibeconsultancy?igsh=bzQ4YWcwdzMwc3Bo" target="_blank" rel="noopener noreferrer">
              <img className="w-6 h-6 sm:w-8 sm:h-8" src={instagram} alt="Instagram" />
            </a>
            <a href="https://www.facebook.com/share/16n8NHc6vs/" target="_blank" rel="noopener noreferrer">
              <img className="w-6 h-6 sm:w-8 sm:h-8" src={facebook} alt="Facebook" />
            </a>
            <a href="mailto:workvibeconsultancy@gmail.com">
              <img className="w-6 h-6 sm:w-8 sm:h-8" src={apple} alt="Email" />
            </a>
          </div>
        </div>
      </div>

      {/* --- Copyright --- */}
      <div className="flex justify-center items-center py-4 border-t border-slate-700">
        <p className="text-sm text-slate-400 text-center">
          &copy; 2025 WorldTour. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
