import { DataTable } from "@/components/data-table";
import data from "../assets/data.json";

export default function InstiutionDashboard() {
  return (
    <div className="p-6">
      <DataTable data={data} />
    </div>
  );
}
