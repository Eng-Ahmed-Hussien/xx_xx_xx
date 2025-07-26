import { useEffect, useState } from "react";
import {
  MdEmail,
  MdLocationOn,
  MdPhone,
  MdPerson,
  MdCode,
} from "react-icons/md";
import { IoMdClose } from "react-icons/io";

import { myPhoto2, CV } from "../../public/assets";

const AboutMe = () => {
  const [downBar, setDownBar] = useState(false);
  const [opencv, setOpencv] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("personal");

  useEffect(() => {
    if (opencv) {
      document.body.classList.add("overflow-hidden");
    } else document.body.classList.remove("overflow-hidden");
    if (downBar) setTimeout(() => setDownBar(false), 5000);
  }, [opencv, downBar]);

  const handleModalBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      setOpencv(false);
    }
  };

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const personalInfo = {
    name: "Ahmed Hussien",
    title: "Full Stack Developer",
    profileImage: myPhoto2,
    summary:
      "Front-End Developer passionate about transforming complex designs into intuitive, engaging web experiences. Skilled in Angular, React, and modern JavaScript ecosystems. Part-time instructor and MEAN Stack Developer with hands-on experience in freelancing and training. Graduating in Computer Science & Engineering (Jan 2025) with a focus on bridging technical excellence with user-centric solutions.",
    personalDetails: {
      age: 25,
      email: "ahmedHussien1352@gmail.com",
      phone: "+20 109 8909 476",
      location: "Ashmon, Menofia - Egypt",
    },
    skills: [
      "React",
      "Angular",
      "Node.js",
      "MongoDB",
      "TypeScript",
      "JavaScript",
      "MEAN Stack",
      "Express.js",
    ],
    experience: "3+ Years",
    projects: "50+ Projects",
  };

  const tabContent = {
    personal: [
      {
        icon: MdPerson,
        label: "AGE",
        value: `${personalInfo.personalDetails.age} Years`,
      },
      {
        icon: MdEmail,
        label: "EMAIL",
        value: personalInfo.personalDetails.email,
        isLink: true,
        href: `mailto:${personalInfo.personalDetails.email}`,
      },
      {
        icon: MdPhone,
        label: "PHONE",
        value: personalInfo.personalDetails.phone,
        isLink: true,
        href: `tel:${personalInfo.personalDetails.phone}`,
      },
      {
        icon: MdLocationOn,
        label: "LOCATION",
        value: personalInfo.personalDetails.location,
      },
    ],
    professional: [
      { icon: MdCode, label: "EXPERIENCE", value: personalInfo.experience },
      { icon: MdPerson, label: "PROJECTS", value: personalInfo.projects },
      { icon: MdCode, label: "EDUCATION", value: "Computer Science" },
      { icon: MdPerson, label: "STATUS", value: "Available for Work" },
    ],
  };

  return (
    <section id="About" className="bg-[#0A0F1F] pt-35 scroll-mt-18 ">
      <div className="pb-16 md:pb-20">
        {/* Subtle Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-60 md:w-80 h-60 md:h-80 bg-[#4A90E2]/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-60 md:w-80 h-60 md:h-80 bg-[#FF6F91]/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10 max-w-7xl">
          {/* Section Title */}
          <div
            className={`mb-16 md:mb-20 transform transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-6 font-bold tracking-wider words">
              ABOUT ME
            </h2>
            <div className="w-20 h-1 bg-[#FF6F91] mb-6"></div>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
              Crafting digital experiences with passion and precision
            </p>
          </div>

          {/* Main Content Container */}
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              {/* Profile Section */}
              <div
                className={`lg:col-span-5 transform transition-all duration-1000 delay-300 ${
                  isVisible
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-10 opacity-0"
                }`}
              >
                <div className="relative group max-w-md mx-auto">
                  {/* Profile Image Container */}
                  <div className="relative bg-[#0A0F1F] border border-[#4A90E2]/30 p-2 rounded-3xl shadow-2xl shadow-[#4A90E2]/20">
                    <img
                      className="w-full aspect-[4/5] object-cover rounded-3xl group-hover:scale-[1.02] transition-all duration-500 shadow-2xl shadow-[#4A90E2]/20"
                      src={personalInfo.profileImage}
                      alt="Ahmed - Profile"
                      loading="lazy"
                    />

                    {/* Floating icon */}
                    <div className="absolute -bottom-4 -right-4 w-16 h-16 md:w-20 md:h-20 bg-[#4A90E2] rounded-full flex items-center justify-center shadow-2xl shadow-[#4A90E2]/30">
                      <MdPerson size={28} className="text-white" />
                    </div>
                  </div>

                  {/* Floating skill badges */}
                  <div className="hidden md:block absolute -top-4 -left-4 bg-[#FF6F91] text-white px-3 py-1.5 rounded-full text-xs font-medium shadow-lg animate-float z-10">
                    React
                  </div>
                  <div className="hidden md:block absolute top-1/4 -right-6 bg-[#4A90E2] text-white px-3 py-1.5 rounded-full text-xs font-medium shadow-lg animate-float delay-1000 z-10">
                    Angular
                  </div>
                  <div className="hidden md:block absolute bottom-1/3 -left-6 bg-gradient-to-r from-[#4A90E2] to-[#FF6F91] text-white px-3 py-1.5 rounded-full text-xs font-medium shadow-lg animate-float delay-500 z-10">
                    Node.js
                  </div>
                </div>

                {/* Skills Section - Mobile centered, desktop left-aligned */}
                <div className="space-y-4 md:space-y-6 mt-6 md:mt-8">
                  <h4 className="text-white font-bold text-lg md:text-xl flex items-center justify-center md:justify-start gap-3">
                    <div className="w-6 md:w-8 h-6 md:h-8 bg-[#4A90E2]/20 rounded-full flex items-center justify-center">
                      <MdCode className="text-[#4A90E2] text-sm md:text-lg" />
                    </div>
                    Core Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2 md:gap-3 justify-center md:justify-start">
                    {personalInfo.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="bg-[#0A0F1F] border border-[#4A90E2]/30 text-white px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium hover:scale-110 hover:shadow-lg hover:shadow-[#4A90E2]/20 hover:border-[#4A90E2]/50 hover:bg-[#4A90E2]/10 transition-all duration-300 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div
                className={`lg:col-span-7 space-y-6 md:space-y-8 transform transition-all duration-1000 delay-500 ${
                  isVisible
                    ? "translate-x-0 opacity-100"
                    : "translate-x-10 opacity-0"
                }`}
              >
                {/* Name and Title */}
                <div className="text-center lg:text-left">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                    I'm{" "}
                    <span className="text-[#4A90E2]">{personalInfo.name}</span>
                  </h3>
                  <div className="inline-block bg-gradient-to-r from-[#FF6F91] to-[#4A90E2] text-white px-4 py-2 md:px-6 md:py-3 rounded-full text-base md:text-lg font-medium mb-6 shadow-lg">
                    {personalInfo.title}
                  </div>
                </div>

                {/* Summary */}
                <div className="relative">
                  <div className="lg:pl-6">
                    <p className="text-gray-300 leading-relaxed text-base md:text-lg mb-6 md:mb-8">
                      {personalInfo.summary}
                    </p>
                  </div>
                  <div className="hidden lg:block absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-[#4A90E2] to-[#FF6F91] rounded-full"></div>
                </div>

                {/* Tab Navigation */}
                <div className="flex bg-[#0A0F1F] border border-[#4A90E2]/30 rounded-2xl md:rounded-3xl p-1 md:p-2 shadow-lg">
                  <button
                    onClick={() => setActiveTab("personal")}
                    className={`flex-1 py-3 md:py-4 px-4 md:px-6 rounded-2xl md:rounded-3xl font-medium text-sm md:text-base transition-all duration-300 ${
                      activeTab === "personal"
                        ? "bg-[#4A90E2] text-white shadow-lg shadow-[#4A90E2]/30"
                        : "text-gray-400 hover:text-white hover:bg-[#4A90E2]/10"
                    }`}
                  >
                    Personal Info
                  </button>
                  <button
                    onClick={() => setActiveTab("professional")}
                    className={`flex-1 py-3 md:py-4 px-4 md:px-6 rounded-2xl md:rounded-3xl font-medium text-sm md:text-base transition-all duration-300 ${
                      activeTab === "professional"
                        ? "bg-[#FF6F91] text-white shadow-lg shadow-[#FF6F91]/30"
                        : "text-gray-400 hover:text-white hover:bg-[#FF6F91]/10"
                    }`}
                  >
                    Professional
                  </button>
                </div>

                {/* Details Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                  {tabContent[activeTab].map((item, index) => (
                    <div
                      key={index}
                      className="group bg-[#0A0F1F] border border-[#4A90E2]/20 rounded-2xl md:rounded-3xl p-4 md:p-6 hover:scale-105 hover:shadow-xl hover:shadow-[#4A90E2]/20 transition-all duration-300 hover:border-[#4A90E2]/40 hover:bg-[#4A90E2]/5"
                    >
                      <div className="flex items-center gap-3 md:gap-4">
                        <div className="w-12 h-12 md:w-14 md:h-14 bg-[#4A90E2]/20 rounded-xl md:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg border border-[#4A90E2]/30 flex-shrink-0">
                          <item.icon className="text-[#4A90E2] text-xl md:text-2xl" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-gray-400 text-xs md:text-sm font-medium uppercase tracking-wider mb-1">
                            {item.label}
                          </p>
                          {item.isLink ? (
                            <a
                              href={item.href}
                              className="text-[#4A90E2] font-medium text-sm md:text-lg hover:underline transition-colors duration-300 block truncate"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <p className="text-white font-medium text-sm md:text-lg truncate">
                              {item.value}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Resume Button */}
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
          </div>
          {/* CV Modal */}
        </div>
        {opencv && (
          <div
            onClick={handleModalBackdropClick}
            className="fixed inset-0 flex justify-center items-center w-full z-[999] bg-[#0a0f1f33]  p-4 cursor-pointer"
          >
            <div className="absolute inset-0 bg-black opacity-50 z-[-1]" />

            {/* Modal content */}
            <div
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0a112b] rounded-lg overflow-hidden cursor-auto w-full max-w-7xl max-h-[95vh] flex flex-col"
            >
              <div className="flex items-center justify-between p-4 border-b bg-gray-800">
                <h3 className="text-lg font-semibold text-[#FF6F91]">
                  Ahmed Hussien - CV
                </h3>
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
        <style jsx>{`
          @keyframes float {
            0%,
            100% {
              transform: translateY(0px) rotate(0deg);
            }
            50% {
              transform: translateY(-10px) rotate(2deg);
            }
          }

          .animate-float {
            animation: float 3s ease-in-out infinite;
          }
        `}</style>
      </div>
      <div className="h-[1px] bg-gray-600" data-aos="fade-down"></div>
    </section>
  );
};

export default AboutMe;
