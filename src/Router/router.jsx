import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../pages/Home/Home";
import AddProduct from "../pages/AddProduct/AddProduct";
import MyCart from "../pages/MyCart/MyCart";
import BrandPage from "../pages/BrandPage/BrandPage";
import DetailsPage from "../pages/DetailsPage/DetailsPage";
import UpdateProduct from "../pages/UpdateProduct/UpdateProduct";
import NoDataPage from "../pages/BrandPage/NoDataPage";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "./privateRoute";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NoDataPage/>,
    children: [
      {
        path: "/",
        loader: () => fetch("https://piston-server-gh0fdb7cb-jubair-ahmeds-projects.vercel.app/brands"),
        element: <Home />,
      },
      {
        path: "/addProduct",
        element: <PrivateRoute><AddProduct /></PrivateRoute>
      },
      {
        path: "/myCart",
        loader: ()=> fetch("https://piston-server-gh0fdb7cb-jubair-ahmeds-projects.vercel.app/cart"),
        element: <PrivateRoute><MyCart /></PrivateRoute>
      },
      {
        path: "/tesla",
        loader: () => fetch("https://piston-server-gh0fdb7cb-jubair-ahmeds-projects.vercel.app/tesla"),
        element: <BrandPage />,
      },
      {
        path: "/mclaren",
        loader: () => fetch("https://piston-server-gh0fdb7cb-jubair-ahmeds-projects.vercel.app/mclaren"),
        element: <BrandPage />,
      },
      {
        path: "/lamborghini",
        loader: () => fetch("https://piston-server-gh0fdb7cb-jubair-ahmeds-projects.vercel.app/lamborghini"),
        element: <BrandPage />,
      },
      {
        path: "/ferrari",
        element: <NoDataPage />,
      },
      {
        path: "/bmw",
        loader: () => fetch("https://piston-server-gh0fdb7cb-jubair-ahmeds-projects.vercel.app/bmw"),
        element: <BrandPage />,
      },
      {
        path: "/mercedes",
        loader: () => fetch("https://piston-server-gh0fdb7cb-jubair-ahmeds-projects.vercel.app/marcedes"),
        element: <BrandPage />,
      },
      {
        path: "/detailsPage/:id",
        loader: ({params})=> fetch(`https://piston-server-gh0fdb7cb-jubair-ahmeds-projects.vercel.app/products/${params.id}`),
        element: <PrivateRoute><DetailsPage/></PrivateRoute>
      },
      {
        path: "/updateProduct/:id",
        loader: ({params})=> fetch(`https://piston-server-gh0fdb7cb-jubair-ahmeds-projects.vercel.app/products/${params.id}`),
        element: <PrivateRoute><UpdateProduct/></PrivateRoute>
      },
      {
        path: "/login",
        element: <Login/>
      },
      {
        path: "/register",
        element: <Register/>
      }
    ],
  },
]);

export default router;
