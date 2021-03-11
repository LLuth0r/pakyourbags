// DEPENDENCIES
import {Switch, Route} from "react-router-dom";
import React from "react";

// COMPONENTS
import Home from "../screens/Home";

const MainContainer = () => {
  return (
    <Switch>
      {/* LANDING PAGE */}
      <Route exact path="/">
        <Home />
      </Route>
      {/* MY TRIPS */}
      <Route path="/mytrips"></Route>
      {/* CREATE TRIP */}
      <Route></Route>
      {/* TRIP OVERVIEW */}
      {/* BUDGET */}
      {/* ITINERARY */}
      {/* PHOTOS */}
      {/* FLIGHTS/TRAVEL INFO */}
    </Switch>
  );
};

export default MainContainer;
