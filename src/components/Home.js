import React, { useEffect, useState } from "react";
import api from "../api/api";
import ChartCity from "./ChartCity";
import ChartCountry from "./ChartCountry";
import ChartState from "./ChartState";

export default function Home() {
  const [cities, setCities] = useState([]);
  const [states, setStates] = useState([]);
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    getCities();
    getStates();
    getCountry();
  }, []);

  const getCities = async () => {
    api
      .get("/city")
      .then(function (response) {
        setCities(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const getStates = async () => {
    api
      .get("/state")
      .then(function (response) {
        setStates(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const getCountry = async () => {
    api
      .get("/country")
      .then(function (response) {
        setCountries(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <>
      <ChartCity cities={cities} />
      <ChartState states={states} />
      <ChartCountry countries={countries} />
    </>
  );
}
