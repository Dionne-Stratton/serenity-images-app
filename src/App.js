import React, { useState, useEffect } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import HeaderNav from "./components/HeaderNav";
import Footer from "./components/Footer";
import Home from "./views/Home";
import About from "./views/About";
import Gallery from "./views/Gallery";
import ProductPage from "./views/ProductPage";
import Watch from "./views/Watch";
import axios from "axios";

export default function App() {
  const [stock, setStock] = useState([]); //stock is the array of objects from the database initially set to an empty array and then set to the response from the database in the useEffect hook. The array is reversed so that the most recent items are displayed first and then passed down to the Gallery and ProductPage components as props

  useEffect(() => {
    axios
      .get("https://serenity-images-mongo.herokuapp.com/artwork")
      .then((res) => setStock(res.data.reverse()))
      .catch((err) => console.log(err, "it has an error"));
  }, []);

  console.log("App.js stock:", stock);

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
