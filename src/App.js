import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import HeaderNav from "./views/HeaderNav";
import Footer from "./views/Footer";
import Home from "./views/Home";
import About from "./views/About";
import Gallery from "./components/Gallery";
import Shop from "./components/Shop";
import Originals from "./components/Originals";
import POD from "./components/POD";
import Watch from "./components/Watch";

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
      <Route path="/about" component={About} />
      <Route path="/gallery" component={Gallery} />
      <Route path="/originals" component={Originals} />
      <Route path="/pod" component={POD} />
      <Route path="/shop" component={Shop} />
      <Route path="/watch" component={Watch} />
      <Footer />
    </div>
  );
}

export default App;
