import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import UserInput from './components/UserInput';
import Result from './components/Result';

function App() {
  const [userInput, setUserinput]=useState({
    initialInvestment:10000,
    annualInvestment:1200,
    expectedReturn:6,
    duration:10,
  });

  const handleChange =(inputIdentifier, newValue)=>{
    setUserinput((preValue)=>{
      return{
        ...preValue,
        [inputIdentifier]: +newValue,
      }
    })
   
  }
  return (
    <div>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />
      <Result input={userInput} />
    </div>
  );
}
export default App;
