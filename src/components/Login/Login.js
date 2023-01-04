import React,{useState,useEffect} from 'react'
import './Login.css'
import { IoFingerPrintSharp } from "react-icons/io5";
import Lab from '../Lab/Lab';
function Login() {
  const [open, setOpen] = useState(false);
  const [Timerem, setTimerem] = useState(10);
  const [password, setPassword] = useState('');
  useEffect(() => {
    
    return () => {
      
    };
  }, [open]);
  return (
    
     <div className="login_page">
      
        <div className={`door door-left ${open ? 'openl' : 'closed'}`}>
          <div className="door_border">

          </div>
        </div>
        <div className={`door door-right ${open ? 'openr' : 'closed'}`}>
          <div className="door_border">
          <div className="tinerem-cont">
          <div className='timerem' style={{height: `${(Timerem/10)*100}%`}}></div>
          </div>
          <div className="tinerem-text">{Math.floor(Timerem)}:{Math.floor((Timerem*60)%60)}</div>
          </div>
        </div>
      
        <div className={`login_center ${open ? 'hidden' : ''}`}>
            <IoFingerPrintSharp  className='IoFingerPrintSharp'/>
        <form onSubmit={e => {
          e.preventDefault();
          if (password === 'pass') {
            if(Timerem!==0){
            setOpen(true);
            }
            else {
              alert('time up ')
            }
            console.log('d22')
          } else {
            alert('Please enter correct password')
            console.log('ds')
          }
        }}>
            <label>ENTER YOUR PILEARNING PASSWORD</label>
            
            <input type="text" id="username" name="username" style={{display: 'none'}}/>
            <input type="password" className="login_center-input" value={password} onChange={(e)=>{setPassword(e.target.value)}} required autoComplete="new-password"/>
            <button type="submit" className="login_center-buttion" >Enter Lab</button>
            </form>
        </div>

        
        {open&& <Lab Timerem={Timerem} setTimerem={setTimerem} close={setOpen}/>}
    </div>
  
  )
}

export default Login