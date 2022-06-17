import { useState } from "react";
import { useLocation } from "react-router";
import "./App.css";
import Footer from "./components/footer";
import Navbar from "./components/Navbar";
import RoutesComponent from "./routes/RoutesComponent";

function App() {

  const [user, setUser] = useState({});
  
  const pathname = useLocation().pathname.split('/');
  let route = pathname[1];

  const checkRoute = (data) => {
    switch (data) {
      case '':
      case 'faqs':
      case 'about':
      case 'support':
        return <Footer />
      default:
        return null;
    }
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
