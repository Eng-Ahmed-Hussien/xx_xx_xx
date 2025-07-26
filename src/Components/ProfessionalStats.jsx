import React, { useEffect } from "react";
import { FiCheckCircle, FiStar, FiTrendingUp, FiMonitor } from "react-icons/fi";
// AOS
import Aos from "aos";
import "aos/dist/aos.css";

const ProfessionalStats = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, once: false, mirror: true });
    Aos.refresh();
  }, []);

  const mainStats = [
    { number: "50+", label: "Projects Completed", icon: FiCheckCircle },
    { number: "30+", label: "Happy Clients", icon: FiStar },
    { number: "3+", label: "Years Experience", icon: FiTrendingUp },
    { number: "7", label: "Services Offered", icon: FiMonitor },
  ];

  const additionalStats = [
    {
      number: "21+",
      label: "Technologies",
      subtitle: "Mastered & Applied",
      color: "text-[#FF6F91]",
      hoverBorder: "hover:border-[#FF6F92]",
    },
    {
      number: "100%",
      label: "Client Satisfaction",
      subtitle: "Success Rate",
      color: "words",
      hoverBorder: "hover:border-[#be129ee3]",
    },
    {
      number: "15+",
      label: "Successful Deliveries",
      subtitle: "Completed Projects",
      color: "text-blue-400",
      hoverBorder: "hover:border-blue-400/50",
    },
  ];

  return (
    <section id="professional" className="bg-[#0A0F1F] scroll-mt-18">
      <div className="pb-16 md:pb-20">
        <div className="container mx-auto px-4 sm:px-[5%] flex flex-col items-center">
          {/* Header */}
          <div className="w-full" data-aos="fade-down">
            <h4 className="words text-3xl py-10">PROFESSIONAL STATS</h4>
          </div>

          {/* Quote */}
          <div className="w-full mb-8 md:mb-10" data-aos="fade-up">
            <div className="text-center px-4">
              <p className="text-gray-300 text-base md:text-lg italic leading-relaxed max-w-3xl mx-auto">
                Numbers that reflect my journey and commitment to excellence
              </p>
            </div>
          </div>

          {/* Main Stats Grid */}
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            {mainStats.map((stat) => (
              <div key={stat.label} className="text-center group">
                <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-md border border-gray-700/50 hover:border-[#4A90E2]/50 rounded-xl p-4 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="flex items-center justify-center mb-2">
                    <stat.icon
                      className="text-[#4A90E2] group-hover:text-[#FF6F91] transition-colors duration-300"
                      size={24}
                    />
                  </div>
                  <div className="text-2xl font-bold text-white mb-1 group-hover:text-[#4A90E2] transition-colors duration-300">
                    {stat.number}
                  </div>
                  <div className="text-xs text-gray-400">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Stats Grid */}
          <div
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 w-[80%] lg:w-[70%]"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            {additionalStats.map((stat) => (
              <div
                key={stat.label}
                className={`text-center p-6 sm:p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl border border-slate-700/50 backdrop-blur-sm ${stat.hoverBorder} transition-all duration-300 hover:scale-105`}
              >
                <div
                  className={`text-3xl sm:text-4xl font-bold ${stat.color} mb-2`}
                >
                  {stat.number}
                </div>
                <div className="text-slate-300 text-sm sm:text-base font-medium">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-500 mt-1">
                  {stat.subtitle}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="h-[1px] bg-gray-600" data-aos="fade-down"></div>
    </section>
  );
};

export default ProfessionalStats;
