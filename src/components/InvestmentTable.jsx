import React from "react";
import { calculateInvestmentResults, formatter } from "../util/investment";

function deriveResult(rawAnnualData) {
  return calculateInvestmentResults({
    initialInvestment: rawAnnualData["Initial Investment"],
    annualInvestment: rawAnnualData["Annual Investment"],
    expectedReturn: rawAnnualData["Expects Return"],
    duration: rawAnnualData["Duration"],
  });
}

export default function InvestmentTable({ rawAnnualData }) {
  const annualData = deriveResult(rawAnnualData);
  const initialInvestment =
    annualData[0].valueEndOfYear -
    annualData[0].interest -
    annualData[0].annualInvestment;

  return (
      <table id="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {annualData.map((data, index) => {
            console.log(data)
            const totalInterest =
              data.valueEndOfYear - data.annualInvestment * data.year - initialInvestment;
            const totalAmountInvested = data.valueEndOfYear - totalInterest;
            return (
              <tr key={data.year}>
                <td>{data.year}</td>
                <td>{formatter.format(data.valueEndOfYear)}</td>
                <td>{formatter.format(data.interest)}</td>
                <td>{formatter.format(totalInterest)}</td>
                <td>{formatter.format(totalAmountInvested)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
  );
}
