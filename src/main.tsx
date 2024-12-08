import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Route,
  Routes,
  type NavigateOptions,
  useHref,
  useNavigate,
} from "react-router-dom";
import { RouterProvider } from "react-aria-components";

import Index from "./pages/index";
import Info from "./pages/info";
import "./styles/pages/global.css";

declare module "react-aria-components" {
  interface RouterConfig {
    routerOptions: NavigateOptions;
  }
}

function App() {
  const navigate = useNavigate();

  return (
    <RouterProvider navigate={navigate} useHref={useHref}>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/info" element={<Info />} />
      </Routes>
    </RouterProvider>
  );
}

const root = document.getElementById("root");
if (!root) {
  throw new Error("root element not found");
}
ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <BrowserRouter
      future={{
        v7_relativeSplatPath: true,
        v7_startTransition: true,
      }}
    >
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
