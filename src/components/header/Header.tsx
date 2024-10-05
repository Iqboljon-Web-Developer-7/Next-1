"use client";

import React, { useState } from "react";
import Link from "next/link";
import MobileNav from "../navHeader/NavHeader";

import { RiMenu5Line } from "react-icons/ri";
import { BiSolidHeart } from "react-icons/bi";
import { IoCartOutline } from "react-icons/io5";

import logo from "@/assets/header/website-logo.svg";
import Image from "next/image";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={`header__container bg-[#F8F8F8] px-4`}>
      <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} />
      <div
        className={`header wrapper flex justify-between items-center py-5 h-[4.6rem] duration-200 z-10 inset-[0_0_auto_0]`}
      >
        <div className="header__logo">
          <Link href={"/"}>
            <Image src={logo} alt="website logo" priority={true} />
          </Link>
        </div>
        <nav className="header__nav hidden lg:flex gap-5 font-light">
          <Link href={"/about"}>About</Link>
          <Link href={"/blog"}>Blog</Link>
          <Link href={"*"}>404</Link>
          <Link href={"/contact"}>contact</Link>
        </nav>
        <div className="header__contact flex items-center justify-center gap-6 ">
          <Link href={"/wishList"}>
            <BiSolidHeart className="text-2xl" />
          </Link>
          <Link href={"/cart"}>
            <IoCartOutline className="text-2xl" />
          </Link>
          <RiMenu5Line
            className="lg:hidden text-3xl"
            onClick={() => setIsOpen((prev) => !prev)}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
