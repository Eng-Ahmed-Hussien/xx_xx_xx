import React, { useEffect } from "react";
import { AiOutlineAntDesign } from "react-icons/ai";
import { DiResponsive } from "react-icons/di";
import { GrPersonalComputer } from "react-icons/gr";
import {
  FiTrendingUp,
  FiMonitor,
  FiBookOpen,
  FiCheckCircle,
  FiArrowRight,
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
    features: [
      "Custom Development",
      "Responsive Design",
      "Performance Optimized",
      "SEO Ready",
    ],
    price: "Starting from $500",
  },
  {
    icon: <AiOutlineAntDesign color="#4A90E2" size={40} />,
    title: "UI/UX Design",
    description: `Designing modern, user-centric interfaces from scratch that align with your brand and drive engagement.`,
    features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
    price: "Starting from $300",
  },
  {
    icon: <FiCheckCircle color="#4A90E2" size={40} />,
    title: "Code Review & Consultation",
    description: `In-depth code analysis, feedback, and step-by-step guidance to maintain high-quality, scalable codebases.`,
    features: [
      "Code Quality Analysis",
      "Best Practices Review",
      "Architecture Guidance",
      "Documentation Review",
    ],
    price: "Starting from $80",
  },

  {
    icon: <FiTrendingUp color="#4A90E2" size={40} />,
    title: "Performance Optimization",
    description: `Improving load times, optimizing assets, and leveraging best practices to boost your site's Lighthouse scores.`,
    features: [
      "Speed Optimization",
      "Image Compression",
      "Code Minification",
      "CDN Setup",
    ],
    price: "Starting from $150",
  },
  {
    icon: <FiMonitor color="#4A90E2" size={40} />,
    title: "Accessibility Audit",
    description: `Ensuring your site meets WCAG standards with high-contrast styling, semantic markup, and keyboard navigation.`,
    features: [
      "WCAG Compliance",
      "Screen Reader Testing",
      "Keyboard Navigation",
      "Color Contrast Audit",
    ],
    price: "Starting from $100",
  },
  {
    icon: <FiBookOpen color="#4A90E2" size={40} />,
    title: "Workshops & Training",
    description: `Interactive sessions on HTML5, CSS3, JavaScript, React, and best coding practices for teams and individuals.`,
    features: [
      "Hands-on Learning",
      "Custom Curriculum",
      "Team Training",
      "Follow-up Support",
    ],
    price: "Starting from $250",
  },
  {
    icon: <DiResponsive color="#4A90E2" size={40} />,
    title: "Responsive Design",
    description: `Building mobile-first, responsive layouts that adapt flawlessly across all screen sizes and devices.`,
    features: [
      "Mobile-First Approach",
      "Cross-Browser Compatible",
      "Touch-Friendly",
      "Flexible Layouts",
    ],
    price: "Starting from $200",
  },
];

const ServicesPage = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, once: false, mirror: true });
    Aos.refresh();
  }, []);

  return (
    <div className="bg-[#0A0F1F] ">
      {/* Header Section */}
      <section className="pt-35 pb-10 md:pb-0">
        <div className="container mx-auto px-[5%]">
          {/* Title and Description */}
          <div className="w-full" data-aos="fade-down">
            <h4 className="words text-4xl pb-10">My SERVICES</h4>
          </div>
          <div className="w-full md:mb-10" data-aos="fade-up">
            <div className="text-center px-4">
              <p className="text-gray-300 text-base md:text-lg italic leading-relaxed max-w-3xl mx-auto">
                Comprehensive web development and design solutions to bring your
                digital vision to life. From concept to deployment, I provide
                end-to-end services tailored to your needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="scroll-mt-18 bg-[#0A0F1F]">
        <div className="pb-16 md:pb-20">
          <div className="container mx-auto px-[5%]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
              {services.map((service, idx) => (
                <div
                  key={service.title}
                  className="group border border-gray-600 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 hover:border-[#4A90E2] hover:shadow-2xl hover:shadow-[#4A90E2]/20 hover:-translate-y-3 transition-all duration-300 transform"
                  data-aos="fade-up"
                  data-aos-delay={idx * 100}
                >
                  {/* Mobile Layout (< md) - Stack vertically */}
                  <div className="flex flex-col lg:hidden">
                    {/* Icon and Title */}
                    <div className="flex items-center gap-1 mb-4">
                      <div className="p-2.5 rounded-xl bg-[#4A90E2]/10 group-hover:bg-[#4A90E2]/20 transition-colors duration-300 flex-shrink-0">
                        {service.icon}
                      </div>
                      <h3 className="text-white text-lg font-bold group-hover:text-[#4A90E2] transition-colors duration-300">
                        {service.title}
                      </h3>
                    </div>

                    {/* Price - Mobile position */}
                    <div className="mb-4">
                      <span className="text-[#4A90E2] font-bold text-xl">
                        {service.price}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3">
                        What's Included:
                      </h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIdx) => (
                          <li
                            key={featureIdx}
                            className="flex items-center gap-2 text-gray-400 text-sm"
                          >
                            <div className="w-1.5 h-1.5 bg-[#4A90E2] rounded-full flex-shrink-0"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA Button - Full width on mobile */}
                    <Link
                      to="/contact"
                      className={`flex items-center justify-center gap-2 py-3 px-6 transition-all duration-300 rounded-xl text-sm hover:text-white font-medium w-full
                  ${
                    idx % 2 === 0
                      ? "text-[#4A90E2] border border-[#4A90E2] hover:bg-[#4A90E2] hover:shadow-lg hover:shadow-[#4A90E2]/30"
                      : "text-[#FF6F91] border border-[#FF6F91] hover:bg-[#FF6F91] hover:shadow-lg hover:shadow-[#FF6F91]/30"
                  }`}
                    >
                      Get Started
                      <FiArrowRight size={20} />
                    </Link>
                  </div>

                  {/* Desktop/Tablet Layout (>= md) - Side by side */}
                  <div className="hidden lg:flex flex-row gap-4 lg:gap-6">
                    {/* Left Content */}
                    <div className="flex-1">
                      {/* Icon and Title */}
                      <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 rounded-xl bg-[#4A90E2]/10 group-hover:bg-[#4A90E2]/20 transition-colors duration-300 flex-shrink-0">
                          {service.icon}
                        </div>
                        <h3 className="text-white text-lg md:text-xl lg:text-2xl font-bold group-hover:text-[#4A90E2] transition-colors duration-300">
                          {service.title}
                        </h3>
                      </div>

                      {/* Description */}
                      <p className="text-gray-400 text-sm leading-relaxed mb-4">
                        {service.description}
                      </p>

                      {/* Features */}
                      <div>
                        <h4 className="text-white font-semibold mb-3">
                          What's Included:
                        </h4>
                        <ul className="space-y-2">
                          {service.features.map((feature, featureIdx) => (
                            <li
                              key={featureIdx}
                              className="flex items-center gap-2 text-gray-400 text-sm"
                            >
                              <div className="w-1.5 h-1.5 bg-[#4A90E2] rounded-full flex-shrink-0"></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Right Content - Price and CTA */}
                    <div className="flex flex-col justify-between items-end min-w-[140px] md:min-w-[160px] lg:min-w-[180px]">
                      <div className="text-right mb-4">
                        <span className="text-[#4A90E2] font-bold text-lg">
                          {service.price}
                        </span>
                      </div>
                      <Link
                        to="/contact"
                        className={`flex items-center justify-center gap-2 py-2.5 px-3 md:px-4 lg:px-6 transition-all duration-300 rounded-xl text-xs md:text-sm hover:text-white font-medium whitespace-nowrap
                    ${
                      idx % 2 === 0
                        ? "text-[#4A90E2] border border-[#4A90E2] hover:bg-[#4A90E2] hover:shadow-lg hover:shadow-[#4A90E2]/30"
                        : "text-[#FF6F91] border border-[#FF6F91] hover:bg-[#FF6F91] hover:shadow-lg hover:shadow-[#FF6F91]/30"
                    }`}
                      >
                        Get Started
                        <FiArrowRight size={20} />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="h-[1px] bg-gray-600" data-aos="fade-down"></div>
      </section>

      {/* CTA Section */}
      <section className=" scroll-mt-18" id="cat">
        <div className="pb-16 md:pb-20">
          <div className="container mx-auto px-[5%]">
            <div className="w-full" data-aos="fade-down">
              <h4 className="words text-3xl py-10">
                Ready to Start Your Project?
              </h4>
            </div>
            <div className="w-full mb-8 md:mb-10" data-aos="fade-up">
              <div className="text-center px-4">
                <p className="text-gray-300 text-base md:text-lg italic leading-relaxed max-w-3xl mx-auto">
                  Whether you need a new website, a redesign, or just some
                  expert advice, I'm here to help. Let's work together to create
                  something amazing!
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-6 py-2 text-[#FF6F91] border border-[#FF6F91] hover:bg-[#FF6F91]  hover:shadow-lg hover:shadow-[#FF6F91]/30 rounded-lg font-semibold hover:text-white transition-all duration-300"
              >
                Contact Me
              </Link>
              <Link
                to="/projects"
                className="py-2 px-6 border-2 border-[#4A90E2] text-[#4A90E2] font-semibold rounded-lg hover:bg-[#4A90E2] hover:shadow-lg hover:shadow-[#4A90E2]/30  hover:text-white transition-all duration-300"
              >
                View Projects
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
