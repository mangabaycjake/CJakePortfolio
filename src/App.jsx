import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";

const App = () => {

  const[theme, setTheme] = useState('dark');

  return (
    <div className={`container ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme} />
      <h1>Header</h1>
      <div className="content">
        <p>This is some text on the left side.</p>
        <img src="https://via.placeholder.com/150" alt="Example" />
      </div>
    </div>
  )
}

export
 default App