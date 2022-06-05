import React, { useState } from "react";
import { useParams } from "react-router";
import "./App.css";
import Footer from "./components/footer";
import Navbar from "./components/Navbar";
import RoutesComponent from "./routes/RoutesComponent";

function App() {

  const [route, setRoute] = useState();

  // console.log(useParams())

  // const onRouteChange = (path) => {
  //   setRoute();
  // }

  return (
    <>
      <Navbar />
        <RoutesComponent />
      {/* (route === '') */}
      <Footer />
    </>
  );
}

export default App;
