import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../pages/Home/Home";
import AddProduct from "../pages/AddProduct/AddProduct";
import MyCart from "../pages/MyCart/MyCart";
import BrandPage from "../pages/BrandPage/BrandPage";
import DetailsPage from "../pages/DetailsPage/DetailsPage";
import UpdateProduct from "../pages/UpdateProduct/UpdateProduct";
import NoDataPage from "../pages/BrandPage/NoDataPage";


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
        loader: ()=> fetch("http://localhost:5000/cart"),
        element: <MyCart />,
      },
      {
        path: "/tesla",
        loader: () => fetch("http://localhost:5000/tesla"),
        element: <BrandPage />,
      },
      {
        path: "/mclaren",
        loader: () => fetch("http://localhost:5000/mclaren"),
        element: <BrandPage />,
      },
      {
        path: "/lamborghini",
        loader: () => fetch("http://localhost:5000/lamborghini"),
        element: <BrandPage />,
      },
      {
        path: "/ferrari",
        element: <NoDataPage />,
      },
      {
        path: "/bmw",
        loader: () => fetch("http://localhost:5000/bmw"),
        element: <BrandPage />,
      },
      {
        path: "/mercedes",
        loader: () => fetch("http://localhost:5000/marcedes"),
        element: <BrandPage />,
      },
      {
        path: "/detailsPage/:id",
        loader: ({params})=> fetch(`http://localhost:5000/products/${params.id}`),
        element: <DetailsPage/>
      },
      {
        path: "/updateProduct/:id",
        loader: ({params})=> fetch(`http://localhost:5000/products/${params.id}`),
        element: <UpdateProduct/>
      }
    ],
  },
]);

export default router;
