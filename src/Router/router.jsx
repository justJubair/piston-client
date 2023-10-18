import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../pages/Home/Home";
import AddProduct from "../pages/AddProduct/AddProduct";
import MyCart from "../pages/MyCart/MyCart";
import TeslaPage from "../pages/TeslaPage/TeslaPage";
import McLarenPage from "../pages/McLarenPage/McLarenPage";
import LamboPage from "../pages/LamboPage/LamboPage";
import FerrariPage from "../pages/FerrariPage/FerrariPage";
import BMWpage from "../pages/BMWpage/BMWpage";
import MercedesPage from "../pages/MercedesPage/MercedesPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        loader: () => fetch("http://localhost:5000/brands"),
        element: <Home />,
      },
      {
        path: "/addProduct",
        element: <AddProduct />,
      },
      {
        path: "/myCart",
        element: <MyCart />,
      },
      {
        path: "/tesla",
        loader:()=> fetch("http://localhost:5000/tesla"),
        element: <TeslaPage />,
      },
      {
        path: "/mclaren",
        element: <McLarenPage/>
      },
      {
        path: "/lamborghini",
        element: <LamboPage/>
      },
      {
        path: "/ferrari",
        element: <FerrariPage/>
      },
      {
        path: "/bmw",
        element: <BMWpage/>
      },
      {
        path: "/mercedes",
        element: <MercedesPage/>
      }
    ],
  },
]);

export default router;
