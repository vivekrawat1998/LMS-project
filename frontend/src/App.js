import "./App.css";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero section/Hero";
import React from "react";
import { ProductProvider } from "../src/Productcontext";
function App() {

  return (
    <ProductProvider>
      <Header  />
      <Hero />
    </ProductProvider>
  );
}

export default App;
