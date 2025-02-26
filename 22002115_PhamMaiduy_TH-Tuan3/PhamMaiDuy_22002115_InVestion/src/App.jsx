import { useState } from 'react';
import './App.css';

function App() {
  const [invest, setInvest] = useState(0);
  const [rate, setRate] = useState(0);
  const [goal, setGoal] = useState(0);
  const [results, setResults] = useState([]);

  function handleInvest(e) {
    setInvest(e.target.value);
  }

  function handleRate(e) {
    setRate(e.target.value);
  }

  function handleGoal(e) {
    setGoal(e.target.value);
  }

  function handleResult() {
    const investNum = parseFloat(invest);
    const rateNum = parseFloat(rate);
    const goalNum = parseFloat(goal);

    if (isNaN(investNum) || isNaN(rateNum) || isNaN(goalNum) || investNum <= 0 || rateNum <= 0 || goalNum <= 0) {
      setResults([{ year: 0, invest: investNum, goal: goalNum, result: "Invalid input" }]);
      return;
    }

    let newResults = [];
    let year = new Date().getFullYear();
    let currentInvest = investNum; 

    while (currentInvest < goalNum) {
      const result = currentInvest + (currentInvest * rateNum) / 100;
      
      newResults.push({
        year: year++,
        invest: currentInvest.toFixed(2), 
        goal: goalNum,
        result: result.toFixed(2),
      });

      currentInvest = result; 
    }

    setResults(newResults);
}


  return (
    <>
      <header>
        <h1>Investment Calculation</h1>
      </header>
      <main>
        <label htmlFor="invest">Invest</label>
        <input
          type="number"
          id="invest"
          value={invest}
          onChange={handleInvest}
        />
        <br />
        <br />
        <label htmlFor="rate">Rate (%)</label>
        <input
          type="number"
          id="rate"
          value={rate}
          onChange={handleRate}
        />
        <br />
        <br />
        <label htmlFor="goal">Goal </label>
        <input
          type="number"
          id="goal"
          value={goal}
          onChange={handleGoal}
        />
        <br />
        <br />
        <input
          type="button"
          value="Calculate"
          onClick={handleResult}
        />
      </main>

      <section>
        <table>
          <thead>
            <tr>
              <th>Year</th>
              <th>Invest</th>
              <th>Goal</th>
              <th>Result</th>
            </tr>
          </thead>
          <tbody>
            {results.length === 0 ? (
              <tr>
                <td colSpan="4">No results yet</td>
              </tr>
            ) : (
              results.map((result, index) => (
                <tr key={index}>
                  <td>{result.year}</td>
                  <td>{result.invest}</td>
                  <td>{result.goal}</td>
                  <td>{result.result}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </section>
    </>
  );
}

export default App;
