import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import HeaderNav from "./views/HeaderNav";
import Footer from "./views/Footer";
import Home from "./views/Home";
import About from "./views/About";
import Contact from "./views/Contact";
import Gallery from "./components/Gallery";
import Shop from "./components/Shop";

function App() {
  return (
    <div className="App">
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Dancing+Script&family=Lemonada&family=Lobster&family=Satisfy&display=swap');
      </style>
      <HeaderNav />
      <Route exact path="/" component={Home} />
      <Route path="/home" component={Home} />
      <Route path="/contact" component={Contact} />
      <Route path="/about" component={About} />
      <Route path="/gallery" component={Gallery} />
      <Route path="/shop" component={Shop} />
      <Footer />
    </div>
  );
}

export default App;
