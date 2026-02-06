import React from "react";
import type { NavMainItem } from "@/types/index";
import { AppSidebar } from "../app-sidebar";
import { SiteHeader } from "../site-header";
import { SidebarInset, SidebarProvider } from "../ui/sidebar";
// navMain is accepted and forwarded to the sidebar; keep typing flexible for now

interface DashboardLayoutProps {
  children: React.ReactNode;
  navMainItems: NavMainItem[];
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  children,
  navMainItems,
}) => {
  const [dashboardLocation, setDashboardLocation] = React.useState("Dashboard");

  return (
    <SidebarProvider>
      <AppSidebar
        navMainItems={navMainItems}
        onNavSelect={(location: string) => setDashboardLocation(location)}
      />
      <SidebarInset>
        <SiteHeader dashboardLocation={dashboardLocation} />
        <main className="flex flex-1 flex-col gap-4 overflow-auto">
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default DashboardLayout;
