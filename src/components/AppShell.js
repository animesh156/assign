"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";

export default function AppShell({ children }) {
  const [workspace, setWorkspace] = useState("Label 1");

  return (
    <>
      <Navbar onWorkspaceChange={setWorkspace} />
      {children}
    </>
  );
}
