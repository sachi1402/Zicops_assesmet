
import React, {useState,useEffect} from 'react'
import './Lab.css'
function Lab({Timerem,setTimerem,close}) {
    const [remainingTime, setRemainingTime] = useState( Timerem* 60);        
  useEffect(() => {
    const interval = setInterval(() => {
      if (remainingTime > 0) {
        setRemainingTime(remainingTime - 1);
      }
      else{
        exithandler()
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [remainingTime]);

  const minutes = Math.floor(remainingTime / 60);
  const seconds = remainingTime % 60;
  const exithandler=()=>{
      setTimerem(remainingTime/60)  
      close(false);
    console.log(remainingTime/60)
  }
  return (
    <div className='Lab'>
    <div className='Lab_cont'>
    <h1>Time remaining: {minutes}:{Math.floor(seconds)}</h1>
      <button onClick={exithandler} className='Lab-exit'>Exit</button>
    </div>
    </div>
  );
}

export default Lab