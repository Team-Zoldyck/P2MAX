import Navbar from "../components/Navbar"
import Footer from "../components/footer"
import RoutesComponent from "../routes/RoutesComponent"

const Wrapper = ({ user }) => {
  return (
    <div>
        <Navbar user={user}/>
        <RoutesComponent />
        <Footer />
    </div>
  )
}

export default Wrapper