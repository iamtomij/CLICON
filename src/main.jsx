import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Root from "./Components/Root/Root.jsx";
import ErrorPage from "./Components/ErrorPage/ErrorPage.jsx";
import Home from "./Components/Home/Home.jsx";
import ElectronicsShop from "./Components/ElectronicsShop/ElectronicsShop.jsx";
import ProductDetails from "./Components/ElectronicsShop/ProductDetails.jsx";
import { AppProvider } from './Components/Context/CartContext.jsx';
import TrackOrder from "./Components/TrackOrder/TrackOrder.jsx";
import ProductComparison from "./Components/ProductComparison/ProductComparison.jsx";
import CustomerSupport from "./Components/CustomerSupport/CustomerSupport.jsx";
import SupportDropdown from "./Components/SupportDropdown/SupportDropdown.jsx";
import CheckoutPage from "./Components/CheckoutPage/CheckoutPage.jsx";
import OrderSuccess from "./Components/OrderSuccess/OrderSuccess.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "shop",
        element: <ElectronicsShop />,
      },
      {
        path: "product/:id",
        element: <ProductDetails />
      },
      {
        path: "/trackorder",
        element: <TrackOrder />
      },
      {
        path: "/compair",
        element: <ProductComparison />
      },
      {
        path: "/support",
        element: <CustomerSupport />
      },
      {
        path: '/help',
        element: <SupportDropdown />
      },
      {
        path: "/checkout",
        element: <CheckoutPage />
      },
      {
        path:"/order-success",
        element: <OrderSuccess />
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  </StrictMode>
);
