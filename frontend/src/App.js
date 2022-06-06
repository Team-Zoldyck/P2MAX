import { useState } from "react";
import { useLocation } from "react-router";
import "./App.css";
import Footer from "./components/footer";
import Navbar from "./components/Navbar";
import RoutesComponent from "./routes/RoutesComponent";

function App() {

  const [user, setUser] = useState({})
  
  const pathname = useLocation().pathname.split('/');
  let route = pathname[1];

  const checkRoute = (data) => {
    switch (data) {
      case '':
       return <Footer />
      case 'FAQs':
        return <Footer />
      case 'aboutUs':
        return <Footer />
      case 'support':
        return <Footer />
      default:
        return '';
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
