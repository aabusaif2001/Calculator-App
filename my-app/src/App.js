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

  const [retirementAge, setRetirementAge] = useState(initialRetirementAge);
  const [targetRetAmt, setTargetRetAmt] = useState(initialTargetRetAmt);
  const [annualRetExp, setAnnualRetExp] = useState(initialAnnualRetExp);
  const [currentAge, setCurrentAge] = useState(initialCurrentAge);
  const [currentSavings, setCurrentSavings] = useState(initialCurrentSavings);
  const [contributions, setContributions] = useState(initialContributions);
  const [contributionFreq, setContributionFreq] = useState(initialContributionFreq);
  const [preRetROR, setInitialPreRetROR] = useState(initialPreRetROR);
  const [postRetROR, setInitialPostRetROR] = useState(initialPostRetROR);
  const [inflation, setInitialInflatione] = useState(initialInflation);
  
  return (
    <div className="App">
      <h1>Financial Independence Calculator</h1>
      <h2>You can retire at age {retirementAge}</h2>
      <div>Target Retirement Amount {targetRetAmt}</div>
      <form className='fire-calc-form'>
        <label>
          Annual Retirement Expenses (today's dollars)
          <input type="number" value={annualRetExp} onChange={(e)=> setAnnualRetExp(parseInt(e.target.value) || 0)} />
        </label>
        <label>
         Current Age           
        <input type="number" value={currentAge} onChange={(e)=> setCurrentAge(parseInt(e.target.value) || 0)}/>
        </label>
        <label>
          Current Savings Balance
          <input type="number" value={currentSavings} onChange={(e)=> setCurrentSavings(parseInt(e.target.value) || 0)}/>
        </label>
        <label>
          Regular Contributions
          <input type="number" value={contributions} onChange={(e)=> setContributions(parseInt(e.target.value) || 0)}/>
        </label>
        <label>
          Contribution Frequency
          <select
          value={contributionFreq} onChange={(e)=> setContributionFreq(e.target.value)}>
            <option value="Monthly">Monthly</option>
            <option value="Annually">Annually</option>
          </select>
        </label>
        <div>
          <h2>Advanced</h2>
          <label>
            Pre-Retirement Rate of return
            <input type="number" value={preRetROR} onChange={(e)=> setPreRetROR(parseInt(e.target.value) || 0)}/>
          </label>
          <label>
            Post-Retirement Rate of Return
            <input type="number" value={postRetROR} onChange={(e)=> setPostRetROR(parseInt(e.target.value) || 0)}/>
          </label>
          <label>
            Inflation
            <input type="number" value={inflation} onChange={(e)=> setInflation(parseInt(e.target.value) || 0)}/>
          </label>
        </div>
      </form>
    </div>
  );
}

export default App;
