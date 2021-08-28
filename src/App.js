import './App.css';
//  import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
// import{
//   BrowserRouter as Router,
//   Switch,
//   Route,
// }from "react-router-dom";
function App() {
  const [mode, setMode] = useState('light');  //whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);
  const showAlert=(message,type)=>{
     setAlert({
       msg:message,
       type:type
     })
     setTimeout(()=>{
        setAlert(null);
     },1500);
  }
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.background='#042743';
      showAlert("Dark mode has been enabled","success");
      // setInterval(()=>{
      //    document.title=" TextUtils is amazing";
      // },2000);
      // setInterval(()=>{
      //    document.title="Install TextUtils Now";
      // },1500);
    }
    else{
      setMode('light');
      document.body.style.background='white';
      showAlert("Light mode has been enabled","success");
    }
  }
  return (
  <>
{/* <Navbar title="TextUtils" About="About Utils"/> */}
{/* <Router> */}
<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className="container my-3">
{/* <Switch> */}
{/* /users------> Component-1 */}
{/* /users/home-----> Component-2 */}
          {/* <Route exact path="/about">
            <About />
          </Route> */}
          {/* <Route exact path="/"> */}
          <TextForm  showAlert={showAlert} heading="Try TextUtils - Word Counter, Character Counter, Remove extra spaces " mode={mode}/> 
          {/* </Route> */}
  {/* </Switch> */}
  </div>
  {/* </Router> */}

</>
  )
 
}

export default App;
