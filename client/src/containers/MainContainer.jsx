// DEPENDENCIES
import { Switch, Route } from "react-router-dom";
import React, { useState } from "react";

// COMPONENTS
import Home from "../screens/Home";
import MyTrips from "../screens/MyTrips";
import CreateTrip from "../screens/CreateTrip";
import UserTrips from "../screens/UserTrips";
import Messages from "../screens/Messages";

const MainContainer = () => {
  const [userTrips, setUserTrips] = useState();
  
  return (
    <Switch>
      {/* LANDING PAGE */}
      <Route exact path="/">
        <Home />
      </Route>
      {/* MY TRIPS */}
      <Route path="/mytrips">
        <MyTrips />
        <UserTrips />
      </Route>
      {/* CREATE TRIP */}
      <Route path="/create-trip">
        <CreateTrip userTrips={userTrips} />
      </Route>
      {/* TRIP OVERVIEW */}
      {/* BUDGET */}
      {/* ACTIVITIES */}
      {/* PHOTOS */}
      {/* FLIGHTS/TRAVEL INFO */}
      {/* MESSAGING */}
      <Route path="/messages">
        <Messages />
      </Route>
    </Switch>
  );
};

export default MainContainer;
