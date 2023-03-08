import About from "./pages/About"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import Navbar from "./components/Navbar"
import { BsFillArrowUpCircleFill } from "react-icons/bs"

function App() {
  const scrollTo = (id) => {
    const element = document.getElementById(`${id}`)
    element.scrollIntoView({behavior: 'smooth', block: 'center'})
  }

  return (
    <div className="flex flex-col gap-48 w-screen h-full font-montserrat">
      <BsFillArrowUpCircleFill onClick={() => scrollTo('home')} className="hidden md:block fixed cursor-pointer z-20 text-secondary bottom-10 right-10 text-4xl"/>
      <Navbar scrollTo={scrollTo}/>
      <Home scrollTo={scrollTo}/>
      <About />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
