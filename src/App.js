import "./App.css";
import Navbar from "./components/Navbar";
import Userform from "./components/Userform";
import About from './components/About';
import { useState } from "react";
import Alert from "./components/Alert";
import Contact from "./components/Contact";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const [alertmsg, setalertmsg] = useState(null);

  const changingmode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      showalertmsg("kala mode");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showalertmsg("gora mode");
    }
  };

  const showalertmsg = (msg) => {
    setalertmsg({
      msg: msg,
    });
    setTimeout(() => {
      setalertmsg(null);
    }, 2000);
  };

  return (
    <>
      {/* <Navbar
        logo="LOGOs"
        ghar="Home"
        mode={mode}
        changingmode={changingmode}
      />
      <Alert alert={alert} alertext={alertmsg} /> */}
      {/* <About /> */}
      {/* <Userform heading="Enter the text here" showalertmsg={showalertmsg} /> */}

      <Router>
      <Navbar
        logo="LOGOs"
        ghar="Home"
        mode={mode}
        changingmode={changingmode}
      />
      <Alert alert={alert} alertext={alertmsg} />
        <Routes>
          <Route exact path="/" element={<Userform heading="Enter the text here" showalertmsg={showalertmsg}/>}/>
          <Route exact path="about" element={<About/>}/>
          <Route exact path="contact" element={<Contact/>}/>
        </Routes>
      </Router>

     
    </>
  );
}

export default App;
