import React, { useState, useEffect } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import HeaderNav from "./views/HeaderNav";
import Footer from "./views/Footer";
import Home from "./views/Home";
import About from "./views/About";
import Gallery from "./components/Gallery";
import ProductPage from "./components/ProductPage";
import Watch from "./components/Watch";
import axios from "axios";

export default function App() {
  const [stock, setStock] = useState([]);

  useEffect(() => {
    axios
      .get("https://serenity-images-mongo.herokuapp.com/artwork")
      .then((res) => setStock(res.data))
      .catch((err) => console.log(err, "it has an error"));
  }, []);

  return (
    <div className="App">
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Dancing+Script&family=Lemonada&family=Lobster&family=Satisfy&display=swap');
      </style>

      <HeaderNav />

      <Switch>
        <Route path="/gallery/:id">
          <ProductPage items={stock} />
        </Route>

        <Route path="/gallery">
          <Gallery items={stock} />
        </Route>

        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/watch" component={Watch} />
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}
