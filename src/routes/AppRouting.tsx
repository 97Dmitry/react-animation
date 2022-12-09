import { AppRoutes } from "@/constants/routes";
import { MainLayout } from "@/layouts";
import { Main } from "@/pages";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: AppRoutes.MAIN,
        element: <Main />,
      },
      { path: "*", element: <Navigate to={AppRoutes.MAIN} /> },
    ],
  },
]);

const AppRouting = () => {
  return <RouterProvider router={router} />;
};

export default AppRouting;
