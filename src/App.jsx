import Layout from "./components/Layout/Layout"
import Navbar from "./components/Navbar/Navbar"
import Tech from "./components/Tech/Tech"
import About from "./pages/About/About"
import Contact from "./pages/Contact/Contact"
import Education from "./pages/Education/Education"
import Project from "./pages/Project/Project"
import ScrollToTop from "react-scroll-to-top";


function App() {


  return (
    <> 
     {/* <Navbar></Navbar> */}
     <Layout></Layout>
     <div className="container">
     <About></About>
     <Education></Education>
     <Tech></Tech>
     <Project></Project>
     <Contact></Contact>
     </div>
     <div className="footer mb-3 ms-3">
      <h4 className="text-center">Made with 😊 Self Efforts  &copy; 2024</h4>
     </div>
     <ScrollToTop smooth  style={{backgroundColor:' #138781',color:"white",borderRadius:"80px"}}/>

     
    </>
  )
}

export default App
