import {BsFillArrowDownCircleFill} from 'react-icons/bs'
import Navbar from '../components/Navbar'

export default function Home({scrollTo}) {
  return (
    <div className="relative conic-background text-white flex flex-col justify-center items-center md:items-start md:px-20 gap-2 h-screen w-full" id="home">
        <h1 className="hidden md:block font-bold text-[5.5vw] leading-tight">I'm Aswin Krishna. <br /> Frontend Web Developer</h1>
        <p className="hidden md:block font-light text-[1.9vw]">Developing professional and intuitive websites for your business</p>
        <h1 className='md:hidden font-bold leading-tight text-4xl'>I'm Aswin Krishna.</h1>
        <h1 className='md:hidden font-bold leading-tight text-4xl text-center'>Freelance Web Developer</h1>
        <p className='text-center text-lg md:hidden'>Developing professional and intuitive websites for your business</p>
        <div className="flex gap-5 mt-5">
            <button onClick={() => scrollTo('projects')} className="border-secondary border-solid border-[3px] rounded-lg px-4 py-1 text-xl transition duration-300 ease-in-out hover:scale-110">View Projects</button>
            <button onClick={() => scrollTo('contact')} className="bg-primary px-4 py-1 rounded-lg text-xl transition duration-300 ease-in-out hover:scale-110">Contact Me</button>
        </div>
    </div>
  )
}
