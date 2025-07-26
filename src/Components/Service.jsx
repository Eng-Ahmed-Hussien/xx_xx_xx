import React, { useEffect } from "react";
import { AiOutlineAntDesign } from "react-icons/ai";
import { DiResponsive } from "react-icons/di";
import { GrPersonalComputer } from "react-icons/gr";
import {
  FiTrendingUp,
  FiMonitor,
  FiBookOpen,
  FiCheckCircle,
} from "react-icons/fi";
import { Link } from "react-router-dom";
// AOS
import Aos from "aos";
import "aos/dist/aos.css";

const services = [
  {
    icon: <GrPersonalComputer color="#4A90E2" size={40} />,
    title: "Website Development",
    description: `I create websites based on your ready-made designs—landing pages or full business sites—that look great and work smoothly on any device.`,
  },
  {
    icon: <AiOutlineAntDesign color="#4A90E2" size={40} />,
    title: "UI/UX Design",
    description: `Designing modern, user-centric interfaces from scratch that align with your brand and drive engagement.`,
  },
  {
    icon: <DiResponsive color="#4A90E2" size={40} />,
    title: "Responsive Design",
    description: `Building mobile-first, responsive layouts that adapt flawlessly across all screen sizes and devices.`,
  },
  {
    icon: <FiTrendingUp color="#4A90E2" size={40} />,
    title: "Performance Optimization",
    description: `Improving load times, optimizing assets, and leveraging best practices to boost your site's Lighthouse scores.`,
  },
  {
    icon: <FiMonitor color="#4A90E2" size={40} />,
    title: "Accessibility Audit",
    description: `Ensuring your site meets WCAG standards with high-contrast styling, semantic markup, and keyboard navigation.`,
  },
  {
    icon: <FiBookOpen color="#4A90E2" size={40} />,
    title: "Workshops & Training",
    description: `Interactive sessions on HTML5, CSS3, JavaScript, React, and best coding practices for teams and individuals.`,
  },
  {
    icon: <FiCheckCircle color="#4A90E2" size={40} />,
    title: "Code Review & Consultation",
    description: `In-depth code analysis, feedback, and step-by-step guidance to maintain high-quality, scalable codebases.`,
  },
];

const Service = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, once: false, mirror: true });
    Aos.refresh();
  }, []);

  return (
    <section id="service" className="bg-[#0A0F1F] scroll-mt-18">
      <div className="bg-[#0A0F1F] pb-20">
        <div className="h-[1px] bg-gray-600"></div>

        <div className="container mx-auto px-[5%] flex flex-col items-center">
          <div className="w-full" data-aos="fade-up">
            <h4 className="words text-3xl py-10">My SERVICES</h4>
          </div>

          {/* Grid Layout for Cards - Show only first 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mb-8">
            {services.slice(0, 3).map((item, idx) => (
              <div
                key={item.title}
                className="border border-gray-600 p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 hover:border-[#4A90E2] hover:shadow-lg hover:shadow-[#4A90E2]/20 transition-all duration-300 transform hover:-translate-y-2"
                data-aos="fade-up"
                data-aos-delay={idx * 100}
              >
                <div className="flex flex-col items-start h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-[#4A90E2]/10">
                      {item.icon}
                    </div>
                    <h3 className="text-white text-lg lg:text-xl font-semibold">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed flex-grow">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* More Button */}
          <div
            className="flex justify-center w-full"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <Link
              to="/services"
              aria-label="View All Services"
              data-aos="fade-up"
              data-aos-delay="500"
              className="group relative overflow-hidden text-[#4A90E2] border-2 border-[#4A90E2] hover:text-white py-3 px-10 transition-all duration-500 cursor-pointer rounded-3xl shadow-2xl shadow-[#4A90E2]/30 "
            >
              <span className="absolute inset-0 bg-[#4A90E2] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left "></span>
              <span className="relative z-10"> View All Services</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="h-[1px] bg-gray-600" data-aos="fade-down"></div>
    </section>
  );
};

export default Service;
