import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  IconChartBar,
  IconDashboard,
  IconFolder,
  IconListDetails,
  IconUsers,
} from "@tabler/icons-react";

import "./index.css";
// import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import InstiutionDashboard from "./pages/InstiutionDashboard";
import PatientDashboard from "./pages/PatientDashboard";
import PhysicianDashboard from "./pages/PhysicianDashboard";
import DashboardLayout from "./components/layouts/DashboardLayout";

const navMainItems = [
  {
    title: "Dashboard",
    url: "#",
    icon: IconDashboard,
  },
  {
    title: "Lifecycle",
    url: "#",
    icon: IconListDetails,
  },
  {
    title: "Analytics",
    url: "#",
    icon: IconChartBar,
  },
  {
    title: "Projects",
    url: "#",
    icon: IconFolder,
  },
  {
    title: "Team",
    url: "#",
    icon: IconUsers,
  },
];

const navMainItems2 = [
  {
    title: "Dashboard",
    url: "#",
    icon: IconDashboard,
  },

  {
    title: "Team",
    url: "#",
    icon: IconUsers,
  },
];

const router = createBrowserRouter([
  {
    path: "/inst",
    element: (
      <DashboardLayout navMainItems={navMainItems2}>
        <InstiutionDashboard />
      </DashboardLayout>
    ),
  },
  {
    path: "/pt",
    element: (
      <DashboardLayout navMainItems={navMainItems}>
        <PatientDashboard />
      </DashboardLayout>
    ),
  },
  {
    path: "/phy",
    element: (
      <DashboardLayout navMainItems={navMainItems}>
        <PhysicianDashboard />
      </DashboardLayout>
    ),
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
