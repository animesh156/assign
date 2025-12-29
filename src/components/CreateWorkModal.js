/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { useState } from "react";
import { useWorkspace } from "../context/WorkspaceContext";
import {
 
  MdKeyboardArrowRight,
  MdClose
 
} from "react-icons/md";

export default function CreateWorkModal({
  isOpen,
  onClose,
  onCreate,
}) {
  if (!isOpen) return null;

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const { workspace } = useWorkspace();

  const isFormValid = name.trim().length > 0;

  const handleCreate = () => {
    onCreate({ name, description });
    setName("");
    setDescription("");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
      <div className="w-[720px] rounded-lg bg-white p-6 shadow-lg">
        
        <div className="flex justify-between">

            {/* Workspace badge */}
        <div className="mb-4 flex gap-1.5 items-center ">
          <span className="inline-block rounded-md border border-[#DBDBD6] shadow shadow-[#0000000B] px-3 py-0.5 text-[11px] font-medium text-[#849494]">
            {workspace}
          </span>
         <MdKeyboardArrowRight size={12} className="text-[#555073]" />
          <span className="text-[11px] font-medium">
            New
          </span>
        </div>

        <button className="-mt-5 cursor-pointer" onClick={onClose}><MdClose className="text-[#849494]"/></button>

        </div>
      

        {/* Name */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Give it a name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="
              w-full  text-[18px]
              border-l border-l-[#849494]
              
              outline-none placeholder:text-[#849494]
            "
          />
        </div>

        {/* Description */}
        <div className="mb-6">
          <textarea
            placeholder="Write description here"
            rows={3}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="
              w-full resize-none  py-2 text-sm
              rounded-md
              outline-none placeholder:text-[#849494]
            "
          />
        </div>

        {/* Actions */}
        <div className="flex justify-end ">
         

          <button
            disabled={!isFormValid}
            onClick={handleCreate}
            className={`
              px-4 py-1 text-sm cursor-pointer rounded-md text-white
              ${
                isFormValid
                  ? "bg-[#B39E37]"
                  : "bg-[#B39E3766] cursor-not-allowed"
              }
            `}
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
}
