import WorksTable from "@/components/WorksTable";
import AppShell from "@/components/AppShell";

export default function Home() {
  return (
    <AppShell>
      <div className="p-2">
        <WorksTable />
      </div>
    </AppShell>
  );
}
