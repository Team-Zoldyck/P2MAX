import Navbar from "../components/Navbar"
import Footer from "../components/footer"
import RoutesComponent from "../routes/RoutesComponent"

const Wrapper = () => {
  return (
    <div>
        <Navbar />
        <RoutesComponent />
        <Footer />
    </div>
  )
}

export default Wrapper