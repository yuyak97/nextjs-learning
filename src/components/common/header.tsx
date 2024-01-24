"use client"

import React from "react";
import HeaderButtons from "@/components/header/headerButtons";
import { brand } from "@/const/meta";

const Header: React.FC = () => {
  return (
    <div className="fixed top-0 w-full z-10 flex items-center justify-between px-4 my-2">
      <p className="text-xl">{brand.name}</p>
      <HeaderButtons />
    </div>
  );
};

export default Header;
