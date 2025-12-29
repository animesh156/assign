"use client";

import Navbar from "../components/Navbar";
import { WorkspaceProvider, useWorkspace } from "../context/WorkspaceContext";

export default function AppShell({ children }) {
  return (
    <WorkspaceProvider>
      <NavbarWrapper />
      {children}
    </WorkspaceProvider>
  );
}

function NavbarWrapper() {
  const { setWorkspace } = useWorkspace();
  return <Navbar onWorkspaceChange={setWorkspace} />;
}
