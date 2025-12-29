"use client";

import Link from "next/link";
import Image from "next/image";
import { HiBell } from "react-icons/hi2";
import { IoMdSettings } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";

export default function Navbar() {
  return (
    <nav className="w-full h-16 flex items-center justify-between px-6">
      {/* LEFT SECTION */}
      <div className="flex items-center gap-12">
        {/* Logo */}
        <div className="flex gap-6">
          <div className="flex items-center gap-2">
            <Image src="/logo.svg" alt="Logo" width={26} height={26} />
          </div>

          <div className="flex items-center gap-2">
            <Image src="/bnb-logo.svg" alt="Logo" width={20} height={20} />
            <div className="flex items-center">
              <span className="font-semibold text-[15px] text-[#13343B]">
                Airbnb
              </span>
              <MdKeyboardArrowDown />
            </div>
          </div>
        </div>

        {/* Labels */}
        <div className="flex items-center gap-4 text-[15px] text-[#8E8E7D] font-medium">
          <Link href="#" className="hover:text-black hover:border-b-2">
            Label 1
          </Link>
          <Link href="#" className="hover:text-black hover:border-b-2">
            Label 2
          </Link>
          <Link href="#" className="hover:text-black hover:border-b-2">
            Label 3
          </Link>
          <Link href="#" className="hover:text-black hover:border-b-2">
            Label 4
          </Link>
          <Link href="#" className="hover:text-black hover:border-b-2">
            Label 5
          </Link>
          <Link href="#" className="hover:text-black hover:border-b-2">
            Label 6
          </Link>
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="flex items-center gap-4">
        {/* Invite Button */}
        <button className="px-4 py-1.5 text-sm border bg-[#FFFFFF]  border-[#DBDBD6] font-medium rounded-lg shadow shadow-[#0000001C]">
          Invite members
        </button>

        {/* Icons */}
        <button className="p-1.5 bg-[#ECECE7] rounded-full">
          <IoMdSettings size={20} className="text-[#8E8E7D]" />
        </button>

        <button className="p-1.5 bg-[#ECECE7] rounded-full">
          <HiBell size={20} className="text-[#8E8E7D]" />
        </button>

        {/* Avatar */}

        <div className="relative w-9 h-9 rounded-full overflow-hidden">
          <Image src="/avatar.jpg" alt="avatar" fill className="object-cover" />
        </div>
      </div>
    </nav>
  );
}
