import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import React, { useState } from "react";
import Alert from "./components/Alert";
// import About from "./components/About";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"; this is not working because new version is comming so bellow line is work.
// import { BrowserRouter,Routes, Route } from "react-router-dom";
function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "Success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light mode has been enabled", "Success");
    }
  };

  return (
    <>
      {/* <Navbar title="textutils" aboutText="about" /> */}
      <div className="container my-5">
        {/* <BrowserRouter> */}
        <Navbar title="textutils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        {/* <Routes> */}
        {/* <Route exact path="/about" element={<About/>}></Route> */}
        {/* <Route exact path="/" element={<Textform showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>}></Route> */}
        {/* </Routes> */}
        {/* </BrowserRouter>       */}
        <Textform
          showAlert={showAlert}
          heading="Enter the text to analyze"
          mode={mode}
        />
      </div>
    </>
  );
}

export default App;
