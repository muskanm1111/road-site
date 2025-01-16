import About from "./components/About"
import Banner from "./components/Banner"
import Contact from "./components/Contect"
import Footer from "./components/Footer"
//import BannerContent from "./components/BannerContent"
import Header from "./components/Header"
 import ImgAbout from "./components/ImgAbout"
import Products  from "./components/Products"
import Reviews from "./components/Reviews"


function App() {
  // const [count, setCount] = useState(0)

  return (
    
    <div>
     <Header />
     <Banner />
     <About/>
     <ImgAbout /> 
     <Products />
     <Reviews />
     <Contact />
    <Footer />
    </div>
  )
}

export default App