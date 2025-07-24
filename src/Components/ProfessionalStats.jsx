import React, { useEffect } from 'react';
// AOS
import Aos from 'aos';
import 'aos/dist/aos.css';

const ProfessionalStats = () => {
    useEffect(() => {
        Aos.init({ duration: 1000, once: false, mirror: true });
        Aos.refresh();
    }, []);

    return (
        <section id="professional" className="bg-[#0A0F1F] scroll-mt-18">
           
            <div className=' pb-16 md:pb-20'>
            <div className="container mx-auto px-4 sm:px-[5%] flex flex-col items-center">
                {/* Header */}
                <div className="w-full" data-aos="fade-down">
                    <h4 className="words text-3xl py-10">
                        PROFESSIONAL STATS
                    </h4>
                </div>
                {/* Quote */}
                <div className="w-full mb-8 md:mb-10" data-aos="fade-up">
                    <div className="text-center px-4">
                        <p className="text-gray-300 text-base md:text-lg italic leading-relaxed max-w-3xl mx-auto">
                            Numbers that reflect my journey and commitment to excellence
                        </p>
                    </div>
                </div>

                {/* Stats Grid */}
                <div
                    className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 w-[80%] lg:w-[70%]"
                    data-aos="fade-up"
                    data-aos-delay="300"
                >
                    <div className="text-center p-6 sm:p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl border border-slate-700/50 backdrop-blur-sm hover:border-[#FF6F92] transition-all duration-300 hover:scale-105 ">
                        <div className="text-3xl sm:text-4xl font-bold  text-[#FF6F91] mb-2">21+</div>
                        <div className="text-slate-300 text-sm sm:text-base font-medium">Technologies</div>
                        <div className="text-xs text-slate-500 mt-1">Mastered &amp; Applied</div>
                    </div>
                    <div className="text-center p-6 sm:p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl border border-slate-700/50 backdrop-blur-sm hover:border-[#be129ee3] transition-all duration-300 hover:scale-105">
                        <div className="text-3xl sm:text-4xl font-bold words mb-2">3+</div>
                        <div className="text-slate-300 text-sm sm:text-base font-medium">Years Experience</div>
                        <div className="text-xs text-slate-500 mt-1">Frontend Development</div>
                    </div>
                    <div className="text-center p-6 sm:p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl border border-slate-700/50 backdrop-blur-sm hover:border-blue-400/50 transition-all duration-300 hover:scale-105 sm:col-span-1 col-span-1">
                        <div className="text-3xl sm:text-4xl font-bold text-blue-400 mb-2">50+</div>
                        <div className="text-slate-300 text-sm sm:text-base font-medium">Projects Built</div>
                        <div className="text-xs text-slate-500 mt-1">Successfully Delivered</div>
                    </div>
                </div>
            </div>
            </div>
            <div className="h-[1px] bg-gray-600" data-aos="fade-down"></div>
        </section>
    );
};

export default ProfessionalStats;
