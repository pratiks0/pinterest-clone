"use client";
import React from "react";
import Image from "next/image";
import { HiChat, HiSearch, HiBell } from "react-icons/hi";
import { useSession, signIn, signOut } from "next-auth/react";

function Header() {
  const { data: session } = useSession();
  console.log(session);
  return (
    <div className="flex justify-between gap-3 sm:gap-4 md:gap-6 lg:gap-8 p-4 sm:p-5 md:p-6 items-center">
      <Image
        src="/logo.png"
        alt="logo"
        width={50}
        height={50}
        className="hover:bg-gray-300 p-2 rounded-full cursor-pointer"
      />

      <button className="bg-black text-white p-1 sm:p-2 px-3 sm:px-4 rounded-full text-sm sm:text-base">
        Home
      </button>

      <button className="hover:bg-gray-300 font-semibold p-1 sm:p-2 px-3 sm:px-4 rounded-full text-sm sm:text-base">
        Create
      </button>

      <div className="bg-[#e9e9e9] p-2 sm:p-3 px-4 sm:px-6 gap-2 sm:gap-3 items-center rounded-full w-full hidden md:flex">
        <HiSearch className="text-[20px] sm:text-[24px] md:text-[28px] text-gray-500" />
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent outline-none w-full text-[16px] sm:text-[20px] md:text-[25px]"
        />
      </div>

      <HiSearch className="hover:bg-gray-300 rounded-full text-[20px] sm:text-[25px] text-gray-500 md:hidden cursor-pointer" />

      <HiBell className="hover:bg-gray-300 rounded-full text-[25px] md:text-[60px] text-gray-500 cursor-pointer" />
      <HiChat className="hover:bg-gray-300 rounded-full text-[25px] md:text-[60px] text-gray-500 cursor-pointer" />

      {session?.user? <Image
        src="/man.png"
        alt="man"
        width={50}
        height={50}
        className="hover:bg-gray-300 p-2 rounded-full cursor-pointer"
      /> :

      <button
        onClick={() => signIn()}
        className="hover:bg-gray-300 font-semibold p-1 sm:p-2 px-3 sm:px-4 rounded-full text-sm sm:text-base"
      >
        Login
      </button>}
    </div>
  );
}

export default Header;
