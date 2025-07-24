import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FadeLoader } from 'react-spinners';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// AOS
import Aos from 'aos';
import 'aos/dist/aos.css';
// React Icons
import { FiInfo, FiX, FiExternalLink, FiGithub, FiSearch, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const Portfolio = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [expandedProject, setExpandedProject] = useState(null);

    useEffect(() => {
        const Api = async () => {
            await axios.get("./data.json")
            .then(res => {
                setProjects(res.data)
            }).catch(error => console.log(error))
            .finally(() => setLoading(false));
        };
        Api();
    }, [])

    // AOS
    useEffect(() => {
        Aos.init({
            duration: 1000,
            once: false,
            mirror: true,
        });
        Aos.refresh();
    }, []);

    // Custom arrow components for slider
    const NextArrow = ({ onClick }) => (
        <div 
            className="absolute top-1/2 right-4 z-10 -translate-y-1/2 w-10 h-10 bg-[#4A90E2] hover:bg-[#FF6F91] rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 shadow-lg"
            onClick={onClick}
        >
            <FiChevronRight className="text-white text-xl" />
        </div>
    );

    const PrevArrow = ({ onClick }) => (
        <div 
            className="absolute top-1/2 left-4 z-10 -translate-y-1/2 w-10 h-10 bg-[#4A90E2] hover:bg-[#FF6F91] rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 shadow-lg"
            onClick={onClick}
        >
            <FiChevronLeft className="text-white text-xl" />
        </div>
    );

    // Slider settings
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        dotsClass: "slick-dots !bottom-4",
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                }
            }
        ]
    };

    const handleImageClick = (project) => {
        setExpandedProject(project);
        document.body.style.overflow = 'hidden';
        document.body.style.position = 'fixed';
        document.body.style.width = '100%';
        document.body.style.height = '100%';
        document.body.classList.add('modal-open');
    };

    const closeModal = () => {
        setExpandedProject(null);
        document.body.style.overflow = 'unset';
        document.body.style.position = 'unset';
        document.body.style.width = 'unset';
        document.body.style.height = 'unset';
        document.body.classList.remove('modal-open');
    };

    // Handle escape key press
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape' && expandedProject) {
                closeModal();
            }
        };
        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [expandedProject]);

    const InfoIcon = ({ project }) => (
        <Link 
            to={`/projects/${project.id}`}
            className="absolute top-3 right-3 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0"
        >
            <div className="w-9 h-9 bg-gradient-to-r from-[#4A90E2] to-[#5BA3F5] hover:from-[#FF6F91] hover:to-[#FF8FA3] rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110">
                <FiInfo className="text-white text-lg" />
            </div>
        </Link>
    );


   const ImageModal = ({ project, onClose }) => (
       <div 
        className="fixed inset-0 bg-black/95 backdrop-blur-sm flex items-center justify-center z-[9999] p-2 sm:p-4 lg:p-6 animate-fadeIn"
        onClick={onClose}
    >
        <div 
            className="relative w-full max-w-[95vw] sm:max-w-4xl lg:max-w-6xl max-h-[80vh] sm:max-h-[95vh] overflow-y-auto animate-slideUp"
            onClick={(e) => e.stopPropagation()}
        >
            <div className="bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-6 lg:p-8 shadow-2xl border border-gray-700/50">
                {/* Close Button */}
                <button 
                    onClick={onClose}
                    className="absolute top-3 right-3 z-30 text-white bg-red-500/90 hover:bg-red-600 backdrop-blur-sm w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
                >
                    <FiX className="text-lg sm:text-xl" />
                </button>
                
                {/* Header */}
                <div className="text-center mb-4 sm:mb-6 mt-2">
                    <h2 className="text-[#FF6F91] text-xl sm:text-2xl lg:text-3xl font-bold mb-2 px-2 pr-16">
                        {project.title}
                    </h2>
                    <div className="w-12 sm:w-16 lg:w-20 h-0.5 sm:h-1 bg-gradient-to-r from-[#4A90E2] to-[#FF6F91] mx-auto rounded-full"></div>
                </div>
                
                {/* Image Slider */}
                <div className="relative mb-4 sm:mb-6">
                    <div className="modal-slider">
                        <Slider {...{
                            ...sliderSettings,
                            responsive: [
                                {
                                    breakpoint: 768,
                                    settings: {
                                        slidesToShow: 1,
                                        slidesToScroll: 1,
                                        arrows: false,
                                        dots: true,
                                    }
                                },
                                {
                                    breakpoint: 480,
                                    settings: {
                                        slidesToShow: 1,
                                        slidesToScroll: 1,
                                        arrows: false,
                                        dots: true,
                                    }
                                }
                            ]
                        }}>
                            {(project.screens || project.screenshots)?.map((screen, index) => (
                                <div key={index} className="outline-none px-1 sm:px-2">
                                    <div className="relative">
                                        <img 
                                            src={screen} 
                                            alt={`${project.title} - Screenshot ${index + 1}`}
                                            className="w-full h-auto max-h-[35vh] sm:max-h-[45vh] lg:max-h-[55vh] object-contain mx-auto rounded-lg shadow-lg border border-gray-600/50"
                                            loading="lazy"
                                        />
                                    </div>
                                </div>
                            )) || (
                                <div className="outline-none px-1 sm:px-2">
                                    <img 
                                        src={project.img} 
                                        alt={`${project.title} - Main Screenshot`}
                                        className="w-full h-auto max-h-[35vh] sm:max-h-[45vh] lg:max-h-[55vh] object-contain mx-auto rounded-lg shadow-lg border border-gray-600/50"
                                        loading="lazy"
                                    />
                                </div>
                            )}
                        </Slider>
                    </div>
                </div>
                
                {/* Description and Buttons */}
                <div className="text-center px-2">
                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                        {project.live_demo && (
                            <a href={project.live_demo} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                                <button className="group w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-[#4A90E2] to-[#5BA3F5] hover:from-[#FF6F91] hover:to-[#FF8FA3] text-white py-2.5 sm:py-3 px-4 sm:px-6 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 text-sm sm:text-base">
                                    <FiExternalLink className="text-base sm:text-lg group-hover:rotate-12 transition-transform duration-300" />
                                    Live Demo
                                </button>
                            </a>
                        )}
                        {project.github && (
                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                                <button className="group w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-gray-700 to-gray-600 hover:from-[#4A90E2] hover:to-[#5BA3F5] text-white py-2.5 sm:py-3 px-4 sm:px-6 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 text-sm sm:text-base">
                                    <FiGithub className="text-base sm:text-lg group-hover:rotate-12 transition-transform duration-300" />
                                    Github Code
                                </button>
                            </a>
                        )}
                    </div>
                    
                    {/* Mobile Description */}
                    {(project.long_description || project.description) && (
                        <p className="text-gray-400 mt-4 text-xs leading-relaxed block sm:hidden">
                            {(project.long_description || project.description).length > 150 
                                ? `${(project.long_description || project.description).substring(0, 150)}...`
                                : (project.long_description || project.description)
                            }
                        </p>
                    )}
                </div>
            </div>
        </div>
    </div>
);
    const ProjectCard = ({ project }) => (
        <div className="group h-full">
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-[#4A90E2]/50 p-6 rounded-2xl relative transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-[#4A90E2]/20 h-full flex flex-col">
                <InfoIcon project={project} />
                
                <div className="relative cursor-pointer mb-4" onClick={() => handleImageClick(project)}>
                    <div className="relative overflow-hidden rounded-xl">
                        <img 
                            className="w-full h-48 object-cover transition-all duration-500 group-hover:scale-110" 
                            src={project.img} 
                            alt={`${project.title} preview`}
                            loading="lazy" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                            <div className="absolute bottom-4 left-4 right-4">
                                <div className="flex items-center justify-center text-white">
                                    <FiSearch className="text-2xl mr-2" />
                                    <span className="text-lg font-semibold">View Gallery</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="flex-grow">
                    <h3 className="text-white text-l font-bold mb-3 group-hover:text-[#4A90E2] transition-colors duration-300">
                        {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
                        {/* only two line of description */}
                        <span className="line-clamp-2">{project.description}</span>
                    </p>
                </div>
                
                <div className="flex gap-3 mt-auto">
                    <a href={project.live_demo} target="_blank" rel="noopener noreferrer" className="flex-1">
                        <button className="group w-full flex items-center justify-center gap-2 text-[#4A90E2] border border-[#4A90E2] hover:bg-[#4A90E2] hover:text-white py-2.5 px-4 transition-all duration-300 rounded-xl text-sm font-medium hover:shadow-lg hover:shadow-[#4A90E2]/30">
                            <FiExternalLink className="text-sm group-hover:rotate-12 transition-transform duration-300" />
                            Live Demo
                        </button>
                    </a>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1">
                        <button className="group w-full flex items-center justify-center gap-2 text-[#FF6F91] border border-[#FF6F91] hover:bg-[#FF6F91] hover:text-white py-2.5 px-4 transition-all duration-300 rounded-xl text-sm font-medium hover:shadow-lg hover:shadow-[#FF6F91]/30">
                            <FiGithub className="text-sm group-hover:rotate-12 transition-transform duration-300" />
                            Github
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );

    if (loading) {
        return (
            <div className="h-screen flex items-center justify-center bg-[#0A0F1F]">
                <div className="text-center">
                    <FadeLoader color="#FF6F91" size={15} />
                    <p className="text-gray-400 mt-4 text-lg">Loading Portfolio...</p>
                </div>
            </div>
        );
    }

    return (
        <>
            <section id="portfolio" className="bg-[#0A0F1F] scroll-mt-18">
                <div className=' pb-16 md:pb-20'>
                   <div className="container mx-auto px-[5%]">
                    {/* Header */}
                <div className="w-full" data-aos="fade-down">
                    <h4 className="words text-3xl py-10">
                         PORTFOLIO
                    </h4>
                </div>
                {/* Quote */}
                <div className="w-full mb-8 md:mb-10" data-aos="fade-up">
                    <div className="text-center px-4">
                        <p className="text-gray-300 text-base md:text-lg italic leading-relaxed max-w-3xl mx-auto">
                            Discover my latest projects showcasing creativity, innovation, and technical expertise
                        </p>
                    </div>
                </div>
                {/* Projects Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
                        {projects.slice(0, 8).map((project, index) => (
                            <div 
                                key={project.id} 
                                data-aos="fade-up" 
                                data-aos-delay={index * 100}
                            >
                                <ProjectCard project={project} />
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-16" data-aos="fade-up">
                        <Link to="/projects">
                            {/* <button className="group relative overflow-hidden bg-gradient-to-r from-[#FF6F91] to-[#FF8FA3] hover:from-[#4A90E2] hover:to-[#5BA3F5] text-white py-4 px-8 rounded-full transition-all duration-500 shadow-lg hover:shadow-2xl hover:shadow-[#4A90E2]/30 transform hover:scale-105 font-semibold text-lg">
                                <span className="relative z-10">View All Projects</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-[#4A90E2] to-[#5BA3F5] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </button> */}
                            <button className="group relative overflow-hidden text-[#FF6F91] border-2 border-[#FF6F91] hover:text-white py-3 px-10 transition-all duration-500 cursor-pointer rounded-3xl shadow-2xl shadow-[#FF6F91]/30 ">
                                        <span className="absolute inset-0 bg-[#FF6F91] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
                                        <span className="relative z-10">View All Projects</span>
                                    </button>
                        </Link>
                    </div>
                </div>
                </div>
                <div className="h-[1px] bg-gray-600" data-aos="fade-down"></div>
            </section>

           {/* Image Modal */}
            {expandedProject && (
                <ImageModal 
                    project={expandedProject} 
                    onClose={closeModal}
                />
            )}

            <style jsx="true">{`
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                
                @keyframes slideUp {
                    from { 
                        opacity: 0;
                        transform: translateY(30px) scale(0.95);
                    }
                    to { 
                        opacity: 1;
                        transform: translateY(0) scale(1);
                    }
                }
                
                .animate-fadeIn {
                    animation: fadeIn 0.3s ease-out;
                }
                
                .animate-slideUp {
                    animation: slideUp 0.4s ease-out;
                }
                
                .line-clamp-3 {
                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
                
                /* Regular slider dots */
                .slick-dots li button:before {
                    color: #4A90E2;
                    font-size: 12px;
                    opacity: 0.75;
                }
                
                .slick-dots li.slick-active button:before {
                    color: #FF6F91;
                    opacity: 1;
                }
                
                /* Modal slider specific styles */
                .modal-slider .slick-dots {
                    bottom: -40px !important;
                }
                
                .modal-slider .slick-dots li button:before {
                    color: #4A90E2;
                    font-size: 10px;
                    opacity: 0.75;
                }
                
                .modal-slider .slick-dots li.slick-active button:before {
                    color: #FF6F91;
                    opacity: 1;
                }
                
                /* Mobile optimizations */
                @media (max-width: 640px) {
                    .modal-slider .slick-dots {
                        bottom: -30px !important;
                    }
                    
                    .modal-slider .slick-dots li {
                        margin: 0 3px;
                    }
                    
                    .modal-slider .slick-dots li button:before {
                        font-size: 8px;
                    }
                }
                
                /* Custom scrollbar for modal */
                .modal-slider::-webkit-scrollbar {
                    width: 4px;
                }
                
                .modal-slider::-webkit-scrollbar-track {
                    background: rgba(75, 85, 99, 0.3);
                    rounded: 2px;
                }
                
                .modal-slider::-webkit-scrollbar-thumb {
                    background: linear-gradient(to bottom, #4A90E2, #FF6F91);
                    border-radius: 2px;
                }
                
                /* Prevent body scroll when modal is open */
                body.modal-open {
                    overflow: hidden;
                    position: fixed;
                    width: 100%;
                    height: 100%;
                }
            `}</style>
        </>
    );
};

export default Portfolio;