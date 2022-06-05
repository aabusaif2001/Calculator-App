import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Financial Independence Calculator</h1>
      <h2>You can retire at age</h2>
      <div>Target Retirement Amount: </div>
      <form>
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
      </form>
    </div>
  );
}

export default App;
