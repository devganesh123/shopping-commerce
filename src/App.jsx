import { useState } from "react";
import "./App.css";
import { DataContext } from "./context/DataContext";

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Root from "./components/Root";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import Mens from "./pages/Mens";
import Womens from "./pages/Womens";
import Kids from "./pages/Kids";
import ProductDetail from "./pages/ProductDetail";
import CartProvider from "./context/CartProvider";
import Cart from "./pages/Cart";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/Mens" element={<Mens />} />
      <Route path="/Womens" element={<Womens />} />
      <Route path="/Kids" element={<Kids />} />
      <Route path="/products/:id" element={<ProductDetail />} />
      <Route path="/cart" element={<Cart />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <DataContext>
        <CartProvider>
          <RouterProvider router={router}></RouterProvider>
        </CartProvider>
      </DataContext>
    </>
  );
}

export default App;
