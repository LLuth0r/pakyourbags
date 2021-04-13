// DEPENDENCIES
import {Switch, Route} from "react-router-dom";
import React from "react";

// COMPONENTS
import Home from "../screens/Home";
import MyTrips from "../screens/MyTrips";

const MainContainer = () => {
  return (
    <Switch>
      {/* LANDING PAGE */}
      <Route exact path="/">
        <Home />
      </Route>
      {/* MY TRIPS */}
      <Route path="/mytrips">
        <MyTrips />
      </Route>
      {/* CREATE TRIP */}
      <Route></Route>
      {/* TRIP OVERVIEW */}
      {/* BUDGET */}
      {/* ACTIVITIES */}
      {/* PHOTOS */}
      {/* FLIGHTS/TRAVEL INFO */}
    </Switch>
  );
};

export default MainContainer;
