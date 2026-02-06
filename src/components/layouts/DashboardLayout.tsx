import type { NavMainItem } from "@/types/index";
import { AppSidebar } from "../app-sidebar";
import { SiteHeader } from "../site-header";
import { SidebarInset, SidebarProvider } from "../ui/sidebar";
// navMain is accepted and forwarded to the sidebar; keep typing flexible for now

export default function DashboardLayout({
  children,
  navMainItems,
}: {
  children: React.ReactNode;
  navMainItems: NavMainItem[];
}) {
  return (
    <SidebarProvider>
      <AppSidebar navMainItems={navMainItems} />
      <SidebarInset>
        <SiteHeader />
        <main className="flex flex-1 flex-col gap-4 overflow-auto">
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
