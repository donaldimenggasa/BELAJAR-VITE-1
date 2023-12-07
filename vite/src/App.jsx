import { Link } from "react-scroll"
import Nav from "./component/Nav"
import Portofolio from "./component/portofolio"
import Contact from "./component/contact"
import Banner from "./component/Banner"
import About from "./component/about"
import Footer from "./component/footer"


const App = () => {
  return (
    <>
      <div className="bg-slate-800">
        <Nav/>
        <Banner/>
        <About/>
        <Portofolio/>
        <Contact/>
        <Footer/>
      </div>
    </>
  )
}
export default App