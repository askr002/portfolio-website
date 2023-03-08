import {CgMenu, CgMenuMotion} from 'react-icons/cg'
import { useState } from 'react'

export default function Navbar({scrollTo}) {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = (id) => {
    setIsOpen(false)
    scrollTo(`${id}`)
  }

  return (
    <div className="text-white flex items-center justify-between px-7 py-5 z-30 absolute top-0 left-0 w-full">
        <div className="w-full md:flex justify-between hidden">
          <a href="/" className="text-4xl drop-shadow-lg font-bold transition duration-300 ease-in-out hover:scale-125">A.</a>
          <nav className="list-none flex justify-between items-center w-96 font-semibold text-xl ml-9">
              <li onClick={() => scrollTo('home')} className="hover:underline cursor-pointer hover:text-gray-400 hover:-translate-y-1 transition-all">Home</li>
              <li onClick={() => scrollTo('about')} className="hover:underline cursor-pointer hover:text-gray-400 hover:-translate-y-1 transition-all">About</li>
              <li onClick={() => scrollTo('projects')} className="hover:underline cursor-pointer hover:text-gray-400 hover:-translate-y-1 transition-all">Projects</li>
              <li onClick={() => scrollTo('contact')} className="hover:underline cursor-pointer hover:text-gray-400 hover:-translate-y-1 transition-all">Contact</li>
          </nav>
          <button onClick={() => scrollTo('contact')} className="bg-primary font-bold px-5 py-2 rounded-lg text-lg drop-shadow-lg transition duration-300 ease-in-out hover:scale-110 hover:animate-pulse">Hire Me</button>
        </div>
        <div className="flex justify-between items-center w-full md:hidden">
          <a href="/" className="text-4xl drop-shadow-lg font-bold">A.</a>
          <li className='list-none text-3xl' onClick={() => setIsOpen(true)}><CgMenu /></li>
          <div className={`${!isOpen ? 'inactive' : null} list-none text-black bg-white h-screen text-2xl flex flex-col justify-start gap-6 items-end p-5 fixed top-0 right-0 transition ease-in-out duration-300`} id='mobile_menu'>
            <CgMenuMotion onClick={() => setIsOpen(false)} className='text-3xl mr-5'/>
            <li onClick={() => handleClick('home')}>Home</li>
            <li onClick={() => handleClick('about')}>About</li>
            <li onClick={() => handleClick('projects')}>Projects</li>
            <li onClick={() => handleClick('contact')}>Contact</li>
            {/* <li onClick={}>Hire Me</li> */}
          </div>
        </div>
    </div>
  )
}
