import { useState } from "react";
import Header from "./components/Header";
import InvestmentTable from "./components/InvestmentTable";
import UserInput from "./components/UserInput";

function App() {
  const [rawAnnualData, setRawAnnualData] = useState({
    "Initial Investment": 1000,
    "Annual Investment": 50,
    "Expects Return": 10,
    Duration: 2,
  });

  const inputIsValid = rawAnnualData.Duration > 0;

  function updateRawData(event, title) {
    setRawAnnualData(prevRawAnnualData => {
      return {
        ...prevRawAnnualData,
        [title]: +event.target.value
      }
    });
  }
  return (
    <main>
      <Header />
      <UserInput handleChange={updateRawData} />
      {!inputIsValid && <p className="center">Please enter a duration greater than zero.</p>}
      {inputIsValid && <InvestmentTable rawAnnualData={rawAnnualData} />}
    </main>
  );
}

export default App;
