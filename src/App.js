import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

function App() {

  const [num, setNum] = useState(0);

  useEffect(() => {

    let numspan = document.querySelector('span');
    let para = document.querySelector('p');

    if(num < 100){

      setTimeout(() => {
        setNum(prev => prev += 1);
        para.innerHTML = 'Loading...';
      }, 100);
  

      if(num > 55){
        numspan.style.color = 'white';
      }
    }

    if(num === 100){
      para.innerHTML = 'Completed!'
      document.querySelector('.App').style.backgroundColor = 'cyan';
    }
    
  },[num])

  return (
    <div className="App">
    <h1>Progress Bar</h1>
        <div className='main'>
          <div style={{width:`${num}%`, height: '100%', backgroundColor: 'green', transition: 'width 0.5s'}}></div>
          <span>{num}%</span>
        </div>
        <p></p>
    </div>
  );
}

export default App;
