import { useLocation } from "react-router";
import "./App.css";
import Footer from "./components/footer";
import Navbar from "./components/Navbar";
import RoutesComponent from "./routes/RoutesComponent";

function App() {
  
  const pathname = useLocation().pathname.split('/');
  let route = pathname[1];

  

  return (
    <>
      <Navbar />
        <RoutesComponent />
      {
        (route === '' || route === 'FAQs' || route === 'aboutUs' || route === 'support')
        ?
        (
          <Footer />
        )
        :
        (
          ''
        )
      }
    </>
  );
}

export default App;
