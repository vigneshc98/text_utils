import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 1500);
  };

  const removeBodyClasees= () => {
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-warning');
  }

  //Dark mode toggle
  const toggleMode = (cls) => {
    console.log(cls);
    removeBodyClasees();
    
    if(cls==='dark'|| cls==='light'){
      if (mode === "light") {
        setmode("dark");
        document.body.style.backgroundColor = "#0a2235";
        showAlert("Dark mode has been enabled", "success");
        document.title = "Utils-DarkMode";
      } else {
        setmode("light");
        document.body.style.backgroundColor = "white";
        showAlert("Light mode has been enabled", "success");
        document.title = "Utils-LightMode";
      }
    } else {
      setmode("light");
      document.body.classList.add('bg-'+cls);
    }
  };

  return (
    <>

        <Navbar
          title="TextUtil"
          aboutText="About us"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container my-3">
              <TextForm
                heading="enter your text here"
                mode={mode}
                showAlert={showAlert}
              />
        </div>
    </>
  );
}

export default App;
