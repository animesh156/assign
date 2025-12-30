"use client";

import Navbar from "@/components/Navbar";
import { WorkspaceProvider, useWorkspace } from "@/context/WorkspaceContext";
import WorksTable from "@/components/WorksTable";

export default function AppShell() {
  return (
    <WorkspaceProvider>
      <ShellContent />
    </WorkspaceProvider>
  );
}

function ShellContent() {
  const { workspace, setWorkspace } = useWorkspace();

  return (
    <>
      <Navbar onWorkspaceChange={setWorkspace} />
      <div className="p-2">
        {/* ✅ key is SAFE here */}
        <WorksTable key={workspace} />
      </div>
    </>
  );
}
