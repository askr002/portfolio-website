import emailjs from '@emailjs/browser'
import { useRef } from 'react'
import {AiOutlineMail, AiOutlinePhone, AiOutlineGithub, AiFillLinkedin, AiOutlineCopyright} from 'react-icons/ai'
import {FiExternalLink} from 'react-icons/fi'
import {DiReact} from 'react-icons/di'
import {TbBrandTailwind} from 'react-icons/tb'

function Contact() {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      import.meta.env.VITE_SERVICE_ID,
      import.meta.env.VITE_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_PUBLIC_KEY
    ).then(
      (result) => {
        alert('Message sent successfully');
        console.log(result.text)
      },(error) => {
        console.log(error.text);
      }
    )
  }

  const year = new Date().getFullYear()

  return (
    <div className='flex flex-col gap-10 w-full h-screen items-center justify-between' id='contact'>
      <div className="flex flex-col justify-around h-full items-center">
        <h1 className='font-bold text-6xl'>Contact Me</h1>
        <p className='w-96 md:max-w-xl text-center text-lg'>For any queries, you may use the contact form below to send me a message. Or feel free to contact me via email or phone as well.</p>
        <div className="flex justify-evenly w-full m-10 flex-wrap gap-10">
          <form className="md:w-96 flex flex-col gap-4" ref={form} onSubmit={sendEmail}>
            <input className='w-full h-10 border-2 border-gray-500 p-6' type="text" name="user_name" placeholder="Name" />
            <input className='w-full h-10 border-2 border-gray-500 p-6' type="text" name="user_email" placeholder="Email" />
            <input className='w-full h-32 border-2 border-gray-500 p-6' type="text" name="message" placeholder="Message" />
            <input className='bg-primary cursor-pointer hover:scale-105 transition ease-in-out duration-300 text-white font-semibold text-xl py-2 rounded-lg' type="submit" value="Submit" id="input-submit" />
          </form>
          <span className='hidden md:block bg-secondary w-[4px]'></span>
          <div className="flex flex-col justify-around border-4 p-4 border-primary rounded-lg">
            <a href="mailto:aswinkrish.002@gmail.com" className='hover:underline flex items-center gap-1'><AiOutlineMail className='text-xl'/>Email: aswinkrish.002@gmail.com</a>
            <h2 className='flex items-center gap-1'><AiOutlinePhone className='text-xl rotate-90'/>Phone: +91 70123 29113</h2>
            <a href="https://github.com/askr002" target={'_blank'} className='hover:underline flex items-center gap-1'><AiOutlineGithub className='text-xl'/>Github <FiExternalLink className='text-xs'/></a>
            <a href="https://www.linkedin.com/in/aswin-krishna-9402a7206/" target={"_blank"} className='hover:underline flex items-center gap-1'><AiFillLinkedin className='text-xl'/>Linkedin <FiExternalLink className='text-xs' /></a>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-around px-8 flex-wrap">
        <p className='flex gap-1 items-center font-light flex-nowrap'><AiOutlineCopyright />Aswin Krishna, {year}</p>
        <pre className='flex items-center flex-nowrap'>Built using <DiReact className='text-xl'/>ReactJS and <TbBrandTailwind className='text-xl'/>Tailwind CSS</pre>
      </div>
    </div>
  )
}

export default Contact