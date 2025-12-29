"use client";

import { useState } from "react";
import Image from "next/image";
import { HiBell } from "react-icons/hi2";
import { IoMdSettings } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";

const WORKSPACES = [
  "Label 1",
  "Label 2",
  "Label 3",
  "Label 4",
  "Label 5",
  "Label 6",
];

export default function Navbar({ onWorkspaceChange }) {
  const [active, setActive] = useState("Label 1");

  const handleClick = (label) => {
    setActive(label);
    onWorkspaceChange?.(label); // notify parent
  };

  return (
    <nav className="w-full h-16 flex items-center justify-between px-6 ">
      {/* LEFT */}
      <div className="flex items-center gap-12">
        {/* Logo */}
        <div className="flex gap-6">
          <Image src="/logo.svg" alt="Logo" width={26} height={26} />

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

        {/* Tabs */}
        <div className="flex items-center gap-6 text-[15px] font-medium">
          {WORKSPACES.map((label) => {
            const isActive = active === label;

            return (
              <button
                key={label}
                onClick={() => handleClick(label)}
                className={`pb-1 transition-colors border-b-2
                  ${
                    isActive
                      ? "text-[#13343B] border-[#13343B]"
                      : "text-[#8E8E7D] border-transparent hover:text-[#13343B]"
                  }`}
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-4">
        <button className="px-4 py-1.5 text-sm border border-[#DBDBD6]
                           rounded-lg shadow shadow-[#0000001C] font-medium">
          Invite members
        </button>

        <button className="p-1.5 bg-[#ECECE7] rounded-full">
          <IoMdSettings size={20} className="text-[#8E8E7D]" />
        </button>

        <button className="p-1.5 bg-[#ECECE7] rounded-full">
          <HiBell size={20} className="text-[#8E8E7D]" />
        </button>

        <div className="relative w-9 h-9 rounded-full overflow-hidden">
          <Image src="/avatar.jpg" alt="avatar" fill className="object-cover" />
        </div>
      </div>
    </nav>
  );
}
