import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom"


import './App.css';
import Container from "./components/Container";
import FullCard from "./components/FullCard";

function App() {
  const [parks, setParks] = useState([])

  useEffect(() => {
      fetch('http://localhost:9393/national_parks/')
      .then(res => res.json())
      .then(data => {
          console.log(data)
          setParks(data.national_parks)})
  }, []);

  function addPark(newPark) {
      setParks((mostUpdatedParks) => [...mostUpdatedParks, newPark])
  }

  return (
    <Router>
      <Route exact path="/">
        <Container parks={parks} addPark={addPark}/>
      </Route>
      <Route path="/parks/:name">
        <FullCard parks={parks}/>
      </Route>
    </Router>
  )
  
}

export default App;
