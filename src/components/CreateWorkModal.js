"use client";

import { useState } from "react";
import { useWorkspace } from "../context/WorkspaceContext";
import {
  MdKeyboardArrowRight,
  MdClose,
} from "react-icons/md";

export default function CreateWorkModal({
  isOpen,
  onClose,
  onCreate,
}) {
  // ✅ hooks at top
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const { workspace } = useWorkspace();

  const isFormValid = name.trim().length > 0;

  const handleCreate = () => {
    onCreate({
      name,
      description,
      workspace,
      status: "Active",
      updated: new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      }),
      admin: "/avatar.jpg",
    });

    setName("");
    setDescription("");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
      <div className="w-[720px] rounded-lg bg-white p-6 shadow-lg">

        {/* Header */}
        <div className="flex justify-between items-start">
          <div className="flex gap-1.5 items-center">
            <span className="inline-block rounded-md border border-[#DBDBD6] shadow shadow-[#0000000B] px-3 py-0.5 text-[11px] font-medium text-[#849494]">
              {workspace}
            </span>
            <MdKeyboardArrowRight size={12} />
            <span className="text-[11px] font-medium">New</span>
          </div>

          <button onClick={onClose}>
            <MdClose className="text-[#849494] cursor-pointer" />
          </button>
        </div>

        {/* Name */}
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Give it a name"
          className="w-full mt-6 text-[18px] border-l border-l-[#849494] outline-none"
        />

        {/* Description */}
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Write description here"
          rows={3}
          className="w-full mt-4 resize-none outline-none text-sm"
        />

        {/* Action */}
        <div className="flex justify-end mt-6">
          <button
            disabled={!isFormValid}
            onClick={handleCreate}
            className={`px-4 py-1 cursor-pointer text-sm rounded-md text-white
              ${
                isFormValid
                  ? "bg-[#B39E37]"
                  : "bg-[#B39E3766] cursor-not-allowed"
              }`}
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
}
