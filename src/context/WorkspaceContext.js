"use client";

import { createContext, useContext, useState } from "react";

const WorkspaceContext = createContext(null);

export function WorkspaceProvider({ children }) {
  const [workspace, setWorkspace] = useState("Label 1");

  return (
    <WorkspaceContext.Provider value={{ workspace, setWorkspace }}>
      {children}
    </WorkspaceContext.Provider>
  );
}

export function useWorkspace() {
  const context = useContext(WorkspaceContext);
  if (!context) {
    throw new Error("useWorkspace must be used inside WorkspaceProvider");
  }
  return context;
}
