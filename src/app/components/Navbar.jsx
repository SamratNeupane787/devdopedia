"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "../libs/utils";
import Image from "next/image";

export function NavbarDemo() {
  return (
    <div className="relative max-w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }) {
  const [active, setActive] = useState(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Home"></MenuItem>
        <MenuItem
          setActive={setActive}
          active={active}
          item="Pricing"
        ></MenuItem>
        <MenuItem
          setActive={setActive}
          active={active}
          item="About Us"
        ></MenuItem>
        <MenuItem
          setActive={setActive}
          active={active}
          item="Contact Us"
        ></MenuItem>
        
      </Menu>
    </div>
  );
}
