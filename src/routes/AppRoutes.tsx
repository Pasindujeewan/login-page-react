import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import TokenPage from "../pages/TokenPage";

// this is main application routes
export const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/tokenPage",
    element: <TokenPage />,
  },
]);
