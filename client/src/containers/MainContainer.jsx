// DEPENDENCIES
import { Switch, Route } from "react-router-dom";
import React, { useState } from "react";

// COMPONENTS
import Home from "../screens/Home";
import MyTrips from "../screens/MyTrips";
import CreateTrip from "../screens/CreateTrip";
import UserTrips from "../screens/UserTrips";
import Chats from "../screens/Chats";

const MainContainer = (props) => {
  const { currentUser, handleLogout } = props;
  const [userTrips, setUserTrips] = useState();

  //TRIPS API CALLS

  //Get user specific trips

  //Create a new trip

  //Update a trip

  //Delete a trip

  //

  return (
    <Switch>
      {/* LANDING PAGE */}
      <Route exact path="/">
        <Home />
      </Route>
      {/* MY TRIPS */}
      <Route path="/mytrips">
        {/* <MyTrips /> */}
        <UserTrips />
      </Route>
      {/* CREATE TRIP */}
      <Route path="/create-trip">
        <CreateTrip userTrips={userTrips} />
      </Route>
      {/* TRIP OVERVIEW */}
      <Route path="/trip/:id">
        {/* <CreateTrip userTrips={userTrips} /> */}
      </Route>
      {/* BUDGET */}
      <Route path="/trip/:id/budget">
        {/* <CreateTrip userTrips={userTrips} /> */}
      </Route>
      {/* ACTIVITIES */}
      <Route path="/trip/:id/activities">
        {/* <CreateTrip userTrips={userTrips} /> */}
      </Route>
      {/* PHOTOS */}
      <Route path="/trip/:id/photos">
        {/* <CreateTrip userTrips={userTrips} /> */}
      </Route>
      {/* FLIGHTS/TRAVEL INFO */}
      <Route path="/flights">
        {/* <CreateTrip userTrips={userTrips} /> */}
      </Route>
      {/* CHATS */}
      <Route path="/chats">
        <Chats />
      </Route>
    </Switch>
  );
};

export default MainContainer;
