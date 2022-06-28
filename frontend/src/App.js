import { useState } from "react";
import { useLocation } from "react-router";
import "./App.css";
import BackToTopButton from "./components/BackToTopButton";
import Footer from "./components/footer";
import Navbar from "./components/Navbar";
import OptIn from "./components/OptIn";
import RoutesComponent from "./routes/RoutesComponent";

import {  animateScroll as scroll } from 'react-scroll';

function App() {

  const [user] = useState();
  
  const pathname = useLocation().pathname.split('/');
  let route = pathname[1];

  const onScrollToTop = () => {
    scroll.scrollToTop();
  }

  const checkRoute = (data) => {
    switch (data) {
      case '':
      case 'faqs':
      case 'about':
      case 'support':
        return <OptionalComponents />
      default:
        return null;
    }
  }

  const OptionalComponents = () => {
    return (
      <>
        <BackToTopButton onScrollToTop={onScrollToTop}/>
        <OptIn />
        <Footer />
      </>
    )
  }

  

  return (
    <>
      <Navbar user={user}/>
        <RoutesComponent />
      { checkRoute(route) }
    </>
  );
}

export default App;
