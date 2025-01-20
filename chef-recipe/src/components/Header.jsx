import React from "react";
import { PiChefHatBold } from "react-icons/pi";

function Header() {
  return (
    <header className="flex justify-center items-center p-1 bg-red-400 h-16">
      <PiChefHatBold className="mr-1" /> Chef Recipe
    </header>
  );
}

export default Header;
