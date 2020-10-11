import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import Homepage from "./pages/homepage/homepage.component.jsx";
import ShopPage from "./pages/shop/shop.component.jsx";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route path="/shop" component={ShopPage} />
    </Switch>
  );
}

export default App;
