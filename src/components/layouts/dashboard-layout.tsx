import { Outlet } from "react-router-dom";
import Header from "./header";
import Sidebar from "./sidebar";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function DashboardLayout() {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => setCollapsed((prev) => !prev);

  return (
    <div
      className={cn("h-full w-full", collapsed ? "pl-[56px]" : "pl-[220px]")}
    >
      <Sidebar collapsed={collapsed} />
      <Header collapsed={collapsed} toggleCollapsed={toggleCollapsed} />
      <div className="w-full bg-background h-full">
        <Outlet />
      </div>
    </div>
  );
}
