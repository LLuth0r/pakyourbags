import React from "react";
import {useEffect, useState} from "react";
import {getCity} from "../services/amadeus/services";

const MyTrips = () => {
  const [city, setCity] = useState({});

  const handleCity = async () => {
    const resp = await getCity("Paris");
    setCity(resp);
  };

  useEffect(() => {
    handleCity();
  }, []);

  console.log(city);

  return <div>This is a test screen.</div>;
};

export default MyTrips;
