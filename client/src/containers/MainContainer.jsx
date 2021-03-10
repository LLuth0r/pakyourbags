// DEPENDENCIES
import {Switch, Route} from "react-router-dom";
import React from "react";

const MainContainer = () => {
  return (
    <>
      <div>
        <h1>Stuff</h1>
      </div>
      <Switch>
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
    </>
  );
};

export default MainContainer;
