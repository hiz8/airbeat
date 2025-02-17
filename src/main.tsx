import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Route,
  Routes,
  type NavigateOptions,
  useHref,
  useNavigate,
} from "react-router";
import { RouterProvider } from "react-aria-components";

import Index from "./pages/index";
import Info from "./pages/info";
import "./styles/pages/global.css";
import * as styles from "./styles/pages/main.css";

declare module "react-aria-components" {
  interface RouterConfig {
    routerOptions: NavigateOptions;
  }
}

function App() {
  const navigate = useNavigate();

  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <RouterProvider navigate={navigate} useHref={useHref}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/info" element={<Info />} />
          </Routes>
        </RouterProvider>
      </div>
    </div>
  );
}

const root = document.getElementById("root");
if (!root) {
  throw new Error("root element not found");
}
ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
