import { FaBootstrap, FaCss3Alt, FaGitAlt, FaGithub, FaHtml5, FaJsSquare, FaReact } from 'react-icons/fa'
import { SiTypescript, SiFramer, SiJquery, SiFontawesome, SiIonic, SiAxios, SiJson } from 'react-icons/si'
import { IoLogoVercel } from 'react-icons/io5'
import { RiTailwindCssFill } from 'react-icons/ri'
import { TbBrandRedux, TbApi } from 'react-icons/tb'
import { SiFirebase } from 'react-icons/si'
import { VscVscode } from 'react-icons/vsc'
import { BiCode } from 'react-icons/bi'
import { MdOutlineDashboard } from 'react-icons/md'
import { useEffect } from 'react'
// AOS
import Aos from 'aos';
import 'aos/dist/aos.css';

const Skill = () => {
    // AOS
    useEffect(() => {
        Aos.init({
            duration: 1000,
            once: false,
            mirror: true,
        });
        Aos.refresh();
    }, []);

    return (
        <section className='bg-[#0A0F1F] scroll-mt-18' id='skill'>
            <div className=' pb-16 md:pb-20'>
                  <div className="container mx-auto px-4 sm:px-6 lg:px-[5%] flex flex-col items-center">
                    <div className='w-full' data-aos='fade-down'>
                                <h4 className="words text-3xl py-10">SKILLS</h4>
                              </div>
                              
                              <div className='w-full mb-8 md:mb-10' data-aos='fade-up'>
                                <div className='text-center px-4'>
                                  <p className='text-gray-300 text-base md:text-lg italic leading-relaxed max-w-3xl mx-auto'>
                                    "The Skills, Tools And Technology I Use To Build Modern Web Applications"
                                  </p>
                                </div>
                              </div>
                
                <div className="flex items-center flex-col w-full text-white text-lg sm:text-[20px] pb-16 sm:pb-20">
                
                    <div className="flex flex-col items-center gap-4 sm:gap-6 mt-6 sm:mt-10">
                        {/* Row 1 - Top of reverse triangle (7 skills) */}
                        <div className="flex justify-center gap-2 sm:gap-4 flex-wrap max-w-full" data-aos="fade-down" data-aos-delay="100">
                            <FaHtml5 
                                className='shadow-2xl shadow-[#4A90E2] hover:scale-110 transition-transform duration-300 cursor-pointer m-1' 
                                color='#E34F26' 
                                size={window.innerWidth < 640 ? 35 : 45} 
                                title='HTML5'
                            />
                            <FaCss3Alt 
                                className='shadow-2xl shadow-[#4A90E2] hover:scale-110 transition-transform duration-300 cursor-pointer m-1' 
                                color='#1572B6' 
                                size={window.innerWidth < 640 ? 35 : 45} 
                                title='CSS3'
                            />
                            <FaJsSquare 
                                className='shadow-2xl shadow-[#4A90E2] hover:scale-110 transition-transform duration-300 cursor-pointer m-1' 
                                color='#F7DF1E' 
                                size={window.innerWidth < 640 ? 35 : 45} 
                                title='JavaScript ES6+'
                            />
                            <SiTypescript 
                                className='shadow-2xl shadow-[#4A90E2] hover:scale-110 transition-transform duration-300 cursor-pointer m-1' 
                                color='#3178C6' 
                                size={window.innerWidth < 640 ? 35 : 45} 
                                title='TypeScript'
                            />
                            <FaReact 
                                className='shadow-2xl shadow-[#4A90E2] hover:scale-110 transition-transform duration-300 cursor-pointer m-1' 
                                color='#61DAFB' 
                                size={window.innerWidth < 640 ? 35 : 45} 
                                title='React.js'
                            />
                            <SiFramer 
                                className='shadow-2xl shadow-[#4A90E2] hover:scale-110 transition-transform duration-300 cursor-pointer m-1' 
                                color='#FF0055' 
                                size={window.innerWidth < 640 ? 35 : 45} 
                                title='Framer Motion'
                            />
                            <SiJquery 
                                className='shadow-2xl shadow-[#4A90E2] hover:scale-110 transition-transform duration-300 cursor-pointer m-1' 
                                color='#0769AD' 
                                size={window.innerWidth < 640 ? 35 : 45} 
                                title='jQuery'
                            />
                        </div>
                        
                        {/* Row 2 - (5 skills) */}
                        <div className="flex justify-center gap-3 sm:gap-6 flex-wrap max-w-full" data-aos="fade-down" data-aos-delay="200">
                            <TbBrandRedux 
                                className='shadow-2xl shadow-[#4A90E2] hover:scale-110 transition-transform duration-300 cursor-pointer m-1' 
                                color='#764ABC' 
                                size={window.innerWidth < 640 ? 35 : 45} 
                                title='Redux'
                            />
                            <RiTailwindCssFill 
                                className='shadow-2xl shadow-[#4A90E2] hover:scale-110 transition-transform duration-300 cursor-pointer m-1' 
                                color='#06B6D4' 
                                size={window.innerWidth < 640 ? 35 : 45} 
                                title='Tailwind CSS'
                            />
                            <FaBootstrap 
                                className='shadow-2xl shadow-[#4A90E2] hover:scale-110 transition-transform duration-300 cursor-pointer m-1' 
                                color='#7952B3' 
                                size={window.innerWidth < 640 ? 35 : 45} 
                                title='Bootstrap'
                            />
                            <MdOutlineDashboard 
                                className='shadow-2xl shadow-[#4A90E2] hover:scale-110 transition-transform duration-300 cursor-pointer m-1' 
                                color='#0081CB' 
                                size={window.innerWidth < 640 ? 35 : 45} 
                                title='Material UI'
                            />
                            <SiFontawesome 
                                className='shadow-2xl shadow-[#4A90E2] hover:scale-110 transition-transform duration-300 cursor-pointer m-1' 
                                color='#528DD7' 
                                size={window.innerWidth < 640 ? 35 : 45} 
                                title='Font Awesome'
                            />
                        </div>
                        
                        {/* Row 3 - (4 skills) */}
                        <div className="flex justify-center gap-4 sm:gap-8 flex-wrap max-w-full" data-aos="fade-down" data-aos-delay="300">
                            <SiIonic 
                                className='shadow-2xl shadow-[#4a91e25c] hover:scale-110 transition-transform duration-300 cursor-pointer m-1' 
                                color='#3880FF' 
                                size={window.innerWidth < 640 ? 35 : 45} 
                                title='Ionicons'
                            />
                            <FaGitAlt 
                                className='shadow-2xl shadow-[#4a91e2] hover:scale-110 transition-transform duration-300 cursor-pointer m-1' 
                                color='#F05032' 
                                size={window.innerWidth < 640 ? 35 : 45} 
                                title='Git'
                            />
                            <FaGithub 
                                className='shadow-2xl shadow-[#4A90E2] hover:scale-110 transition-transform duration-300 cursor-pointer m-1' 
                                color='white' 
                                size={window.innerWidth < 640 ? 35 : 45} 
                                title='GitHub'
                            />
                            <TbApi 
                                className='shadow-2xl shadow-[#4A90E2] hover:scale-110 transition-transform duration-300 cursor-pointer m-1' 
                                color='#FF6B35' 
                                size={window.innerWidth < 640 ? 35 : 45} 
                                title='RESTful APIs'
                            />
                        </div>
                        
                        {/* Row 4 - (3 skills) */}
                        <div className="flex justify-center gap-4 sm:gap-8 flex-wrap max-w-full" data-aos="fade-down" data-aos-delay="400">
                            <SiAxios 
                                className='shadow-2xl shadow-[#4A90E2] hover:scale-110 transition-transform duration-300 cursor-pointer m-1' 
                                color='#5A29E4' 
                                size={window.innerWidth < 640 ? 35 : 45} 
                                title='Axios'
                            />
                            <SiJson 
                                className='shadow-2xl shadow-[#4A90E2] hover:scale-110 transition-transform duration-300 cursor-pointer m-1' 
                                color='#000000' 
                                size={window.innerWidth < 640 ? 35 : 45} 
                                title='JSON'
                            />
                            <BiCode 
                                className='shadow-2xl shadow-[#4A90E2] hover:scale-110 transition-transform duration-300 cursor-pointer m-1' 
                                color='#FFD700' 
                                size={window.innerWidth < 640 ? 35 : 45} 
                                title='AJAX'
                            />
                        </div>
                        
                        {/* Row 5 - (2 skills) */}
                        <div className="flex justify-center gap-4 sm:gap-8 flex-wrap max-w-full" data-aos="fade-down" data-aos-delay="500">
                            <SiFirebase 
                                className='shadow-2xl shadow-[#4A90E2] hover:scale-110 transition-transform duration-300 cursor-pointer m-1' 
                                color='#FFCA28' 
                                size={window.innerWidth < 640 ? 35 : 45} 
                                title='Firebase'
                            />
                            <IoLogoVercel 
                                className='shadow-2xl shadow-[#4A90E2] hover:scale-110 transition-transform duration-300 cursor-pointer m-1' 
                                color='#000000' 
                                size={window.innerWidth < 640 ? 35 : 45} 
                                title='Vercel'
                            />
                        </div>
                        
                        {/* Row 6 - Bottom point of reverse triangle (1 skill) */}
                        <div className="flex justify-center gap-6 flex-wrap max-w-full" data-aos="fade-down" data-aos-delay="600">
                            <VscVscode 
                                className='shadow-2xl shadow-[#4A90E2] hover:scale-110 transition-transform duration-300 cursor-pointer m-1' 
                                color='#007ACC' 
                                size={window.innerWidth < 640 ? 35 : 45} 
                                title='VS Code'
                            />
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div className="h-[1px] bg-gray-600" data-aos="fade-down"></div>
        </section>
    )
}
export default Skill;