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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/Mens" element={<Mens />} />
      <Route path="/Womens" element={<Womens />} />
      <Route path="/Kids" element={<Kids />} />
      <Route path="/products/:id" element={<ProductDetail />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <DataContext>
        <RouterProvider router={router}></RouterProvider>
      </DataContext>
    </>
  );
}

export default App;
