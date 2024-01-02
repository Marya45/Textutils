import { useState } from "react";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import Alert from "./components/Alert";
import About from './components/About';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  const[mode,setMode] = useState('light');
  const[alert,setAlert] = useState(null);  //alert as a object

  const showAlert = (message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = ()=>{
    if(mode==='dark'){
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled","success");
      document.title = 'TextUtils - Light Mode';
    }
    else{
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode has been enabled","success");
      document.title = 'TextUtils - Dark Mode';
      // setInterval(() => {
      //   document.title = 'TextUtils is Amazing';
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'Install TextUtils now';
      // }, 1500);
    }
  }

  return (
    <>
      <BrowserRouter>
        <Navbar title="TextUtils" aboutText = "About TextUtils" mode={mode} toggleMode = {toggleMode} />
        <Alert alert={alert}/>
        <div className="container my-3">

          <Routes>
              <Route exact path="/about" 
                element={<About mode={mode}/>}>
              </Route>
              <Route exact path="/"
                element={<Textform showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>}>
              </Route>
          </Routes>

        </div>
      </BrowserRouter>
    </>
  );
}

export default App;