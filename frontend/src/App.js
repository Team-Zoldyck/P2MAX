import React, { useState } from "react";
import "./App.css";
import Wrapper from "./utils/Wrapper";

function App() {

  const [user, setUser] = useState({});

  return (
    <>
      <Wrapper user={user}/>
    </>
  );
}

export default App;
