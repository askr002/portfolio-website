import {AiFillGithub} from 'react-icons/ai'
import {HiOutlineExternalLink} from 'react-icons/hi'

function Card() {
  return (
    <div className="flex flex-col gap-6 justify-center items-center hover:scale-110 transition ease-in-out duration-300 md:w-1/3 border-2 p-4 rounded-lg">
        <img src="screenshot-1.png" alt="" className="rounded-lg" />
        <h2 className="font-bold text-lg text-center">Huddle - Landing Page Design</h2>
        <p className="text-center">Frontendmentor.io project to design a landing page, using Vite for building and development, and Tailwind CSS for styling</p>
        <div className='flex gap-2 flex-wrap'>
            <a href="https://github.com/askr002/huddle-landing-page" target={'_blank'} className='flex gap-2 items-center border-white  border-[1px] rounded-full p-2'>
                <AiFillGithub className='text-2xl' /> View Code
            </a>
            <a href="https://askr002.github.io/huddle-landing-page" target={'_blank'} className='flex gap-2 items-center border-white border-[1px] rounded-full p-2'>
                <HiOutlineExternalLink className='text-2xl' /> Visit
            </a>
        </div>
    </div>
  )
}

export default Card