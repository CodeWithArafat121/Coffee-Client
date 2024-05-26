import { createBrowserRouter } from "react-router-dom";
import Layout from "../Components/Layout/Layout";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
    },
  ]);

export default router