import React from "react";
import NavBar from "./Components/NavigationBar";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import AppLayout from "./Layout/AppLayout";
const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="product" element={<Products />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
