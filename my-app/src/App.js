import './App.css';
import React, { useState, useEffect } from "react";

function App() {
  const initialRetirementAge = Number(localStorage.getItem("retirementAge") || 100);
  const initialTargetRetAmt = Number(localStorage.getItem("targetRetAmt") || 0);
  const initialAnnualRetExp = Number(localStorage.getItem("annualRetExp") || 0);
  const initialCurrentAge = Number(localStorage.getItem("currentAge") || 35);
  const initialCurrentSavings = Number(localStorage.getItem("currentSavings") || 10000);
  const initialContributions = Number(localStorage.getItem("contributions") || 500);
  const initialContributionFreq = Number(localStorage.getItem("contributionFreq") || "Monthly");
  const initialPreRetROR = Number(localStorage.getItem("preRetROR") || 7);
  const initialPostRetROR = Number(localStorage.getItem("postRetROR") || 7);
  const initialInflation = Number(localStorage.getItem("inflation") || 2.9);
  return (
    <div className="App">
      <h1>Financial Independence Calculator</h1>
      <h2>You can retire at age</h2>
      <div>Target Retirement Amount: </div>
      <form className='fire-calc-form'>
        <label>
          Annual Retirement Expenses (today's dollars)
          <input type="number"/>
        </label>
        <label>
         Current Age           
        <input type="number"/>
        </label>
        <label>
          Current Savings Balance
          <input type="number"/>
        </label>
        <label>
          Regular Contributions
          <input type="number"/>
        </label>
        <label>
          Contribution Frequency
          <select>
            <option value="Monthly">Monthly</option>
            <option value="Annually">Annually</option>
          </select>
        </label>
        <div>
          <h2>Advanced</h2>
          <label>
            Pre-Retirement Rate of return
            <input type="number"/>
          </label>
          <label>
            Post-Retirement Rate of Return
            <input type="number"/>
          </label>
          <label>
            Inflation
            <input type="number"/>
          </label>
        </div>
      </form>
    </div>
  );
}

export default App;
