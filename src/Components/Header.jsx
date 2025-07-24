import { useEffect, useState } from 'react';
// import { myPhoto, CV } from '../../public/assets';
import { myPhoto2, CV } from '../../public/assets';
import { MdEmail } from 'react-icons/md';
import { GiSatelliteCommunication } from 'react-icons/gi';
import { IoMdClose } from 'react-icons/io';
import { FaLinkedin, FaWhatsapp } from 'react-icons/fa'
// AOS
import Aos from 'aos';
import 'aos/dist/aos.css';

const Header = () => {
    const [downBar , setDownBar] = useState(false);
    const [opencv , setOpencv] = useState(false);
    
    useEffect(() => {
        if(opencv) {
            document.body.classList.add("overflow-hidden");
        }
        else
            document.body.classList.remove("overflow-hidden");
        if(downBar)
            setTimeout(() => setDownBar(false),5000)
    },[opencv,downBar])
    
    // AOS
    useEffect(() => {
        Aos.init({
            duration: 1000,
            once: true,
            mirror: true,
        });
        Aos.refresh();
    }, []);

    const handleModalBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            setOpencv(false);
        }
    };

    return (
        <header id='Home' className='bg-[#0A0F1F] pt-35 pb-15'>
            <div className={`container mx-auto px-[5%]`}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-between">
                    <div className="flex items-center ">
                        <div data-aos="fade-right">
                            <h2 className='text-[45px] lg:text-[75px] xl:text-[95px] md:text-[55px] mb-0 words box'>FRONTEND DEVELOPER</h2>
                            <div className="flex items-center gap-3 mt-10">
                                <p className='text-white'>I am Ahmed</p>
                                <span className='text-[#4A90E2] jop_name'>
                                    Web Developer
                                </span>
                            </div>
                            <p className='text-white mb-5'>Passion Creating Beautiful And Responsive Design</p>
                            <div className="flex flex-wrap gap-5">
                                <button 
                                    onClick={() => setOpencv(true)} 
                                    className="group relative overflow-hidden text-[#4A90E2] border-2 border-[#4A90E2] hover:text-white py-3 px-10 transition-all duration-500 cursor-pointer rounded-3xl"
                                >
                                    <span className="absolute inset-0 bg-[#4A90E2] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
                                    <span className="relative z-10">View CV</span>
                                </button>
                                <a href={CV} download="AhmedHussien_CV.pdf">
                                    <button className="group relative overflow-hidden text-[#FF6F91] border-2 border-[#FF6F91] hover:text-white py-3 px-10 transition-all duration-500 cursor-pointer rounded-3xl">
                                        <span className="absolute inset-0 bg-[#FF6F91] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
                                        <span className="relative z-10">Download CV</span>
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    {/* Enhanced CV Modal */}
                    {opencv && (
                        <div 
                            onClick={handleModalBackdropClick} 
                            className="fixed inset-0 flex justify-center items-center w-full z-[999] bg-[#0a0f1f33]  p-4 cursor-pointer"
                        >
                            <div className="absolute inset-0 bg-black opacity-50" />

                            {/* Modal content */}
                            <div 
                                onClick={(e) => e.stopPropagation()} 
                                className="bg-[#0a112b] rounded-lg overflow-hidden cursor-auto w-full max-w-7xl max-h-[95vh] flex flex-col"
                            >
                                <div className="flex items-center justify-between p-4 border-b bg-gray-800">
                                    <h3 className="text-lg font-semibold text-[#FF6F91]">Ahmed Hussien - CV</h3>
                                    <button
                                        onClick={() => setOpencv(false)}
                                        className="p-1  rounded-full border-[#FF6F91] border hover:border-[#4A90E2] transition-colors duration-200 text-[#FF6F91] hover:text-[#4A90E2] cursor-pointer  hover:scale-110 "
                                    >
                                        <IoMdClose size={20} className="" />
                                    </button>
                                </div>
                                <div className="flex-1 p-4">
                                    <iframe
                                        src="https://flowcv.com/resume/pheq1uwl1rb8"
                                        className="w-full h-full min-h-[70vh] sm:min-h-[80vh] lg:min-h-[85vh] border-0 rounded"
                                        title="Ahmed Hussien CV"
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        </div>
                    )}
                    
                    <div className="flex justify-end items-center" data-aos="fade-left">
                        <img className=' w-[80%] lg:w-[75%] xl:w-[60%] mx-auto h-full object-cover z-10 rounded-3xl transition duration-500   shadow-2xl shadow-[#4A90E2]/20 hover:shadow-[#FF6F91]/20 cursor-pointer' src={myPhoto2} alt="Image-Error" loading='lazy' />
                         
                    </div>
                </div>
                <div className="flex justify-end">
                    <div className="text-white fixed bottom-5 z-100">
                        <div className="flex">
                            {downBar && <a href="https://linkedin.com/in/ahmed-hussien-front-end-developer/"><FaLinkedin className='rounded-full text-end px-4 py-5 mb-2 mr-3 mt-5 ml-5 bg-gray-800 cursor-pointer' color='blue' size={65}/></a>}
                            {downBar && <a href="mailto:ahmedHussien1352@gmail.com"><MdEmail className='rounded-full text-end px-4 py-5 mb-5 bg-gray-800 cursor-pointer' color='red' size={65}/></a>}
                        </div>
                        <div className="flex">
                            {downBar && <a href="https://wa.me/201098909476?text=Hello%20Ahmed!"><FaWhatsapp className='rounded-full px-4 py-5 mr-8 bg-gray-800 cursor-pointer' color='green' size={65}/></a>}
                            {!downBar ? <GiSatelliteCommunication onClick={() => setDownBar(true)} className='rounded-full px-4 py-5 bg-gray-800 cursor-pointer' color='#4A90E2' size={65}/> :
                            <IoMdClose onClick={() => setDownBar(false)} className='rounded-full px-4 py-5 bg-gray-800 cursor-pointer' color='#4A90E2' size={65}/>}
                        </div>
                    </div>
                </div>
            </div>
            
        </header>
    )
}

export default Header