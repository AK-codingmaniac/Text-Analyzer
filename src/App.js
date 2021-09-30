import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";
// import About from "./components/About";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setalert] = useState(null);

  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 1500);
  };
  const togglemode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "black";
      showalert("Dark Mode has been enabled", "success");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showalert("Light Mode has been enabled", "success");
    }
  };
  return (
    <>
    {/* <Router> */}
      <Navbar mode={mode} togglemode={togglemode} />
      <Alert alert={alert} />
      <div className="container my-3">
        {/* <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/"> */}
            <TextForm
              showalert={showalert}
              heading="Enter the text to analyze below"
              mode={mode}
           />
          {/* </Route> */}
        {/* </Switch> */}
      </div>
      {/*  </Router> */}
    </>
  );
}

export default App;
