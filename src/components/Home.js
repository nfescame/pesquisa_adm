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
    getData();
  }, []);

  const getData = async () => {
    api
      .get("/data")
      .then(function (response) {
        setCities(response.data.city);
        setStates(response.data.state);
        setCountries(response.data.country);
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
