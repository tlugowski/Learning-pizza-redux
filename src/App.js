import React, { useState } from "react";
import Navigation from "./components/Navigation";
import Title from "./components/Title";
import PizzaCalculator from "./components/PizzaCalculator";
import "./style.css";

export default function App() {
  return (
    <div>
      <Navigation />
      <main>
        <div className="userNameSection">
          <label>Your name: </label>
          <input />
        </div>
        <Title />
        <PizzaCalculator />
      </main>
    </div>
  );
}
