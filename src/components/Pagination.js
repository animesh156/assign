"use client";

import {
  MdOutlineKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdKeyboardArrowDown,
} from "react-icons/md";
import { IoIosArrowUp, IoIosArrowDown  } from "react-icons/io";

export default function Pagination({ currentPage = 1, totalPages = 5 }) {
  return (
    <div className="flex items-center px-4 justify-between mt-4">
      {/* LEFT: Prev + Current Page + Next */}
      <div className="flex items-center gap-2">
        {/* Prev */}
        <button
          disabled={currentPage === 1}
          className="
            h-8 w-8 flex items-center justify-center
            border border-[#ECECE7] rounded-md
            disabled:opacity-40 hover:bg-gray-50
          "
        >
          <MdOutlineKeyboardArrowLeft size={18} />
        </button>

        {/* CURRENT PAGE ONLY */}
        <div
          className="
            h-7 w-9 flex items-center justify-center
            text-sm font-medium
            border
           border-[#DBDBD6]
           text-[#13343B]
           shadow
           shadow-[#0000001C]
            rounded-md
          "
        >
          {currentPage}
          <MdKeyboardArrowDown className="text-[#717350]" />
        </div>

        {/* Next */}
        <button disabled={currentPage === totalPages}>
          <MdKeyboardArrowRight size={18} />
        </button>

        <div className="text-[13px]">1-3 of 3</div>
      </div>

      {/* RIGHT: Per Page */}
      <div className="border gap-1.5 flex py-1 px-2 shadow shadow-[#0000001C] rounded-md text-[#13343B] text-[12px] font-medium border-[#DBDBD6]">
        <button>25 per page</button>
        <div className="flex flex-col -space-y-1 mt-0.5 justify-center">
          <IoIosArrowUp size={10} />
          <IoIosArrowDown size={10} />
        </div>
      </div>
    </div>
  );
}
