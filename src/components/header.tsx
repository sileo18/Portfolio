
import { FiGithub } from 'react-icons/fi'
import { SlSocialLinkedin } from 'react-icons/sl'

export default function Header() {
  return (
    <header className='flex w-full px-24 bg-white shadow-xl justify-between items-center py-8 md:flex-row sm:flex-col sm:gap-8 sm:relative md:fixed z-20'>

<div className='flex gap-4 items-center'>
              

              <a className='cursor-pointer' target="_blank" href="linkedin.com/in/lucas-antonio-toledo-sileo-b42593237/
              "><SlSocialLinkedin size={26} color='#000000' /></a>       
              
              
            </div>  

            <div className='text-black flex gap-6 text-center md:flex-row sm:flex-col'>
              <a href='#work-top' className='text-xl font-medium hover:scale-105 transition-transform cursor-pointer'>Trabalho</a>
              <a href='#resume-top' className='text-xl font-medium hover:scale-105 transition-transform cursor-pointer'>Resume</a>
              <a className='text-xl font-medium hover:scale-105 transition-transform cursor-pointer'>Contact</a>
            </div>
            
            <div className='flex gap-4 items-center'>
              
              <a className='cursor-pointer' target="_blank" href="https://github.com/sileo18"><FiGithub size={26} color='#000000'/></a>            
              
            </div>          

          </header>
  )
}