import './App.css';
import {Questions} from './Questions'
import React , {useState} from 'react'

function App() {
  const [index,setIndex] = useState(0);
  const [result,setResult] = useState('Click Check');
  const [select,setSelect] = useState('E');
  const last = Questions.length;
  const  inc = () => {
    if(index+1 < last){
      setIndex(index+1);
    }
  }
  const  dec = () => {
    if(index > 0){
      setIndex(index-1);
    }
  }
  const check = () => {
    if(select === 'E'){
      setResult('Select Option')
    }else if(select === Questions[index].answer){
      setResult('Correct');
    }else{
      setResult('Incorrect');
    }
  }
  const valueSet= (e) => {
    if(e.target.value >= 0 && e.target.value < last && (e.target.value).length > 0){
      setIndex(e.target.value);
    }
  }
  return (
    <>
    <div className="outer">
    <button type="button" className="qstn">{Questions[index].text}</button><br/>
      <button type="button" className="option" onClick={()=>setSelect('A') & setResult('Click Check')}>{Questions[index].optionA}</button><br/>
      <button type="button" className="option" onClick={()=>setSelect('B') & setResult('Click Check')}>{Questions[index].optionB}</button><br/>
      <button type="button" className="option" onClick={()=>setSelect('C') & setResult('Click Check')}>{Questions[index].optionC}</button><br/>
      <button type="button" className="option" onClick={()=>setSelect('D') & setResult('Click Check')}>{Questions[index].optionD}</button><br/>
      <div className="inner">
        <button type="button" className="btn" onClick={dec}>prev</button>
        <button type="button" className="btn" onClick={check}>Check</button>
        <button type="button" className="btn" onClick={inc}>Next</button>
        <input onChange={valueSet} type="number" min="0" max={last}></input>
      </div>
    </div>
    <div className="output">{result}</div>
    </>
  );
}

export default App;
