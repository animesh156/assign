"use client";

import { useState } from "react";
import Image from "next/image";
import Pagination from "./Pagination";
import CreateWorkModal from "./CreateWorkModal";

import { AiOutlineHome, AiOutlinePlus } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { GoPlus } from "react-icons/go";
import { IoSearchOutline, IoFilterOutline } from "react-icons/io5";
import { VscSettings } from "react-icons/vsc";
import { FaFolder, FaShieldAlt } from "react-icons/fa";
import { HiMiniSparkles, HiOutlineArrowUpRight } from "react-icons/hi2";
import { PiHouseLineFill } from "react-icons/pi";
import Document from "./Document";

export default function WorksTable() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openTabs, setOpenTabs] = useState([]);
  const [activeTab, setActiveTab] = useState(null); // null = Home

  const [rows, setRows] = useState([
    {
      name: "Name of the document",
      updated: "Dec 2",
      status: "Active",
      admin: "/avatar.jpg",
      icon: <HiMiniSparkles size={18} className="text-[#849494]" />,
    },
    {
      name: "Name of the document",
      updated: "Dec 8",
      status: "Inactive",
      admin: "/avatar.jpg",
      icon: <PiHouseLineFill size={18} className="text-[#849494]" />,
    },
    {
      name: "Name of the document",
      updated: "Dec 21",
      status: "Active",
      admin: "/avatar.jpg",
      icon: <FaShieldAlt size={18} className="text-[#849494]" />,
    },
  ]);

  const handleCreate = (newRow) => {
    setRows((prev) => [
      {
        ...newRow,
        icon: <HiMiniSparkles size={18} className="text-[#849494]" />,
      },
      ...prev,
    ]);
  };

  const handleOpenDoc = (doc) => {
    setOpenTabs((prev) => {
      if (prev.find((t) => t.name === doc.name)) return prev;
      return [...prev, { name: doc.name }];
    });
    setActiveTab(doc.name);
  };

  return (
    <div className="w-full h-[540px] border border-[#ECECE7] rounded-lg bg-white flex flex-col">
      {/* ================= HEADER ================= */}
      <div className="space-y-4">
        {/* Row 1 — Tabs */}
        <div className="flex px-6 py-2.5 items-center gap-3 text-[#849494]">
          <AiOutlineHome
            size={18}
            className="hover:text-[#13343B] border-r cursor-pointer"
            onClick={() => setActiveTab(null)}
          />

          {openTabs.map((tab) => {
            const isActive = activeTab === tab.name;

            return (
              <div
                key={tab.name}
                onClick={() => setActiveTab(tab.name)}
                className={`flex items-center font-medium gap-2 px-3 py-1 rounded-md text-sm cursor-pointer ${
                  isActive
                    ? " text-[#13343B]"
                    : ""
                }`}
              >
                {tab.name}
                {/* <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setOpenTabs((prev) =>
                      prev.filter((t) => t.name !== tab.name)
                    );
                    if (isActive) setActiveTab(null);
                  }}
                  className="text-xs"
                >
                  ✕
                </button> */}
              </div>
            );
          })}

          <AiOutlinePlus size={18} className="hover:text-[#13343B]" />
        </div>

        <hr className="border-t border-[#ECECE7]" />

        {/* ===== ONLY SHOW WHEN HOME ===== */}
        {activeTab === null && (
          <>
            {/* Row 2 */}
            <div className="flex px-6 items-center justify-between">
              <div className="flex items-center gap-2 font-medium text-[#13343B]">
                <FaFolder size={18} className="text-[#849494]" />
                <span>Name of the Workspace</span>
                <IoIosArrowDown size={10} />
              </div>

              <div className="flex items-center gap-2">
                <div className="relative rounded-md bg-[#F4F4EF]">
                  <IoSearchOutline
                    size={16}
                    className="absolute left-2 top-1/2 -translate-y-1/2 text-[#849494]"
                  />
                  <input
                    placeholder="Search"
                    className="pl-8 pr-3 py-1.5 border border-[#F4F4EF] rounded-md text-sm outline-none placeholder:text-[#849494]"
                  />
                </div>

                <button
                  onClick={() => setIsModalOpen(true)}
                  className="flex items-center gap-1 px-3 py-1.5 text-sm bg-[#B39E37] text-white rounded-md"
                >
                  <GoPlus size={18} />
                  New
                </button>
              </div>
            </div>

            <hr className="border-t border-[#ECECE7]" />

            {/* Row 3 */}
            <div className="flex px-6 items-center justify-between">
              <button className="flex items-center gap-2 px-3 py-1 border border-[#DBDBD6] rounded-md text-sm shadow shadow-[#0000001C]">
                <IoFilterOutline size={16} />
                Filter
              </button>

              <button className="flex items-center gap-2 px-3 py-1 border border-[#DBDBD6] rounded-md text-sm shadow shadow-[#0000001C]">
                <VscSettings size={16} />
                Display
              </button>
            </div>
          </>
        )}
      </div>

     {activeTab === null && (<hr className="border-t border-[#ECECE7] mt-4" />
)} 
      {/* ================= CONTENT ================= */}
      <div className="flex-1 overflow-auto">
        {/* HOME TAB */}
        {activeTab === null && (
          <table className="w-full text-sm">
            <thead className="border-b border-[#ECECE7] text-[#849494]">
              <tr>
                <th className="text-left px-6 py-3 font-light">Name</th>
                <th className="text-right px-6 py-3 font-light">
                  Last Updated
                </th>
                <th className="text-right px-6 py-3 font-light">Admin</th>
                <th className="text-right px-6 py-3 font-light">Status</th>
              </tr>
            </thead>

            <tbody>
              {rows.map((item, index) => (
                <tr
                  key={index}
                  className="group border-b border-[#ECECE7] hover:bg-[#FAF9EF] text-[#13343B]"
                >
                  <td className="px-6 py-3 font-medium">
                    <div className="flex items-center gap-2">
                      {item.icon}
                      {item.name}

                      <button
                        onClick={() => handleOpenDoc(item)}
                        className="flex items-center gap-1 px-3 py-1 bg-white border border-[#DDDAF2] rounded-md text-[#8B87A8] text-[13px] font-medium invisible group-hover:visible"
                      >
                        Open
                        <HiOutlineArrowUpRight size={12} />
                      </button>
                    </div>
                  </td>

                  <td className="px-6 py-3 text-right font-medium">
                    {item.updated}
                  </td>

                  <td className="px-6 py-3 text-right">
                    <div className="inline-block relative w-6 h-6 rounded-full overflow-hidden">
                      <Image
                        src={item.admin}
                        alt="admin"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </td>

                  <td className="px-6 py-3">
                    <div className="flex items-center justify-end gap-2">
                      {item.status === "Active" ? (
                        <Image
                          src="/tick.png"
                          alt="tick"
                          width={12}
                          height={12}
                        />
                      ) : (
                        <div className="w-4 h-4 rounded-full border-2 border-dotted border-[#13343B]" />
                      )}
                      <span className="font-medium text-[13px]">
                        {item.status === "Active" ? "In use" : "Idle"}
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {/* DOCUMENT TAB */}
        {activeTab !== null && (
          <Document activeTab={activeTab}/>
        )}
      </div>

      {activeTab === null && (
        <>
          <div className="mb-24">
            <Pagination />
          </div>

          <CreateWorkModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            onCreate={handleCreate}
          />
        </>
      )}
    </div>
  );
}
