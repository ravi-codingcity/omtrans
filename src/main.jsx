import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home/Home.jsx";
import Contact from "./Contact/Contact.jsx";
import About_us from "./About_us/About_us.jsx";
import Network from "./About_us/Network.jsx";
import Freight_forwarding from "./Our_Services/Freight_forwarding.jsx";
import Supply_chain_management from "./Our_Services/Supply_chain_management.jsx";
import Project_cargo_ODC_handle from "./Our_Services/Project_cargo_ODC_handle.jsx";
import Warehouse_distributation from "./Our_Services/Warehouse_distributation.jsx";
import Customs_brokerage_air_sea from "./Our_Services/Customs_brokerage_air_sea.jsx";
import Sustainability from "./Components/Sustainability.jsx";
import News from "./News/News.jsx";
import Thank_you from "./Components/Thank_you.jsx";
import FCL_sea_export from "./Forms/FCL_sea_export.jsx";
import LCL_sea_export from "./Forms/LCL_sea_export.jsx";
import LCL_sea_export_step2 from "./Forms/LCL_sea_export_step2.jsx";
import LCL_sea_import_step2 from "./Forms/LCL_sea_import_step2.jsx";
import FCL_sea_export_step2 from "./Forms/FCL_sea_export_step2.jsx";
import FCL_sea_import_step2 from "./Forms/FCL_sea_import_step2.jsx";
import Air_export from "./Forms/Air_export.jsx";
import Air_import from "./Forms/Air_import.jsx";
import LCL_sea_import from "./Forms/LCL_sea_import.jsx";
import FCL_sea_import from "./Forms/FCL_sea_import.jsx";
import Air_export_step2 from "./Forms/Air_export_step2.jsx";
import Air_import_step2 from "./Forms/Air_import_step2.jsx";
import Careers from "./Components/Careers.jsx";
import Clients from "./Components/Clients.jsx";
import JobPortal from "./Components/Job_portal.jsx";
import Login from "./Components/Login.jsx";
import Register from "./Components/Register.jsx";
import Privacy_policy from "./Components/Privacy_policy.jsx";
import Terms_and_condition from "./Components/Terms_and_condition.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/contact-us/",
    element: <Contact />,
  },
  {
    path: "/about_us",
    element: <About_us />,
  },
  {
    path: "/network",
    element: <Network />,
  },
  {
    path: "/freight_forwarding",
    element: <Freight_forwarding />,
  },
  {
    path: "/servicecat/sea-freight-in-india/",
    element: <Freight_forwarding />,
  },
  {
    path: "/services/",
    element: <Home />,
  },
  {
    path: "/supply_chain_management",
    element: <Supply_chain_management />,
  },
  {
    path: "/project_cargo_ODC_handle",
    element: <Project_cargo_ODC_handle />,
  },
  {
    path: "/warehouse_distributation",
    element: <Warehouse_distributation />,
  },
  {
    path: "/customs_brokerage_services",
    element: <Customs_brokerage_air_sea />,
  },
  {
    path: "/lcl_sea_export",
    element: <LCL_sea_export />,
  },
  {
    path: "/fcl_sea_export",
    element: <FCL_sea_export />,
  },
  {
    path: "/lcl_sea_import",
    element: <LCL_sea_import />,
  },
  {
    path: "/fcl_sea_import",
    element: <FCL_sea_import />,
  },
  {
    path: "/air_export",
    element: <Air_export />,
  },
  {
    path: "/air_export/step2",
    element: <Air_export_step2 />,
  },
  {
    path: "/air_import/step2",
    element: <Air_import_step2 />,
  },
  {
    path: "/air_import",
    element: <Air_import />,
  },
  {
    path: "/sustainability",
    element: <Sustainability />,
  },
  {
    path: "/careers",
    element: <Careers />,
  },
  {
    path: "/log-in",
    element: <Login />,
  },
  {
    path: "/job-portal",
    element: <JobPortal />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/news",
    element: <News />,
  },
  {
    path: "/clients",
    element: <Clients />,
  },
  {
    path: "/lcl_sea_export/thank_you",
    element: <Thank_you />,
  },
  {
    path: "/lcl_sea_import/thank_you",
    element: <Thank_you />,
  },
  {
    path: "/fcl_sea_export/thank_you",
    element: <Thank_you />,
  },
  {
    path: "/fcl_sea_import/thank_you",
    element: <Thank_you />,
  },
  {
    path: "/air_import/thank_you",
    element: <Thank_you />,
  },
  {
    path: "/air_export/thank_you",
    element: <Thank_you />,
  },
  {
    path: "/lcl_sea_export",
    element: <LCL_sea_export />,
  },
  {
    path: "/lcl_sea_export/step2",
    element: <LCL_sea_export_step2 />,
  },
  {
    path: "/lcl_sea_import/step2",
    element: <LCL_sea_import_step2 />,
  },
  {
    path: "/fcl_sea_export/step2",
    element: <FCL_sea_export_step2 />,
  },
  {
    path: "/fcl_sea_import/step2",
    element: <FCL_sea_import_step2 />,
  },
  {
    path: "/privacy_policy",
    element: <Privacy_policy />,
  },
  {
    path: "/terms_and_condition",
    element: <Terms_and_condition />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
