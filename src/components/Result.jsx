import React from 'react';
import { calculateInvestmentResults} from '../investment';
import './Result.css';

const Result = ({input}) => {
  const resultsData = calculateInvestmentResults(input);
  const initialInvestment = 
  resultsData[0].valueEndOfYear-
  resultsData[0].interest-
  resultsData[0].annualInvestment
  console.log(resultsData);
  return (
    <table className='table'>
      <thead>
        <tr>
          <th className='theader'>Year</th>
          <th className='theader'>Investment Value</th>
          <th className='theader'>Interest (Year)</th>
          <th className='theader'>Total interest</th>
          <th className='theader'>Invested capital</th>
        </tr>
      </thead>
      <tbody>
        {resultsData.map((yearData)=>{
          const totalInterest=
          yearData.valueEndOfYear-yearData.annualInvestment*yearData.year-initialInvestment
          const amountInvetsted = yearData.valueEndOfYear-totalInterest
          const optionFormat = {style:'currency', currency:'USD'}
          const numberFormat = new Intl.NumberFormat('en-US',optionFormat)
          return (<tr key={yearData.year}>
            <td className='table-data'>{yearData.year}</td>
            <td className='table-data'>{numberFormat.format(yearData.valueEndOfYear)}</td>
            <td className='table-data'>{numberFormat.format(yearData.interest)}</td>
            <td className='table-data'>{numberFormat.format(totalInterest)}</td>
            <td className='table-data'>{numberFormat.format(amountInvetsted)}</td>
          </tr>)
        })}
      </tbody>
    </table>
  );
}
export default Result;
