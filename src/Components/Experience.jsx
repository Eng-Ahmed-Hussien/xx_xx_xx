import React, { useEffect, useState } from "react";
import {
  FiAward,
  FiBookOpen,
  FiTrendingUp,
  FiCode,
  FiArrowRight,
} from "react-icons/fi";
import { FaGraduationCap } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const getIconForRole = (role = "") => {
  const lower = role.toLowerCase();
  if (lower.includes("freelance"))
    return <FiTrendingUp color="#4A90E2" size={40} />;
  if (lower.includes("instructor"))
    return <FaGraduationCap color="#4A90E2" size={40} />;
  if (lower.includes("trainee"))
    return <FiBookOpen color="#4A90E2" size={40} />;
  if (lower.includes("internship"))
    return <FiAward color="#4A90E2" size={40} />;
  return <FiCode color="#4A90E2" size={40} />;
};

const Experience = () => {
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Aos.init({ duration: 1000, once: false, mirror: true });
    Aos.refresh();

    fetch("/experienceDetails.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load experience data");
        return res.json();
      })
      .then((data) => {
        const entries = Object.entries(data).map(([id, entry]) => ({
          id,
          ...entry,
        }));
        setExperiences(entries);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <section id="experience" className="bg-[#0A0F1F] scroll-mt-18">
        <div className="bg-[#0A0F1F] pb-20">
          <div className="container mx-auto px-[5%] flex flex-col items-center">
            <h4 className="words text-3xl py-10 text-white">My EXPERIENCE</h4>
            <div className="text-white">Loading experiences...</div>
          </div>
        </div>
        <div className="h-[1px] bg-gray-600" />
      </section>
    );
  }

  return (
    <section id="experience" className="bg-[#0A0F1F] scroll-mt-18">
      <div className="bg-[#0A0F1F] pb-10">
        <div className="container mx-auto px-[5%] flex flex-col items-center">
          <div className="w-full" data-aos="fade-down">
            <h4 className="words text-3xl py-10">My EXPERIENCE</h4>
          </div>
          {/* Quote */}
          <div className="w-full mb-8 md:mb-10" data-aos="fade-up">
            <div className="text-center px-4">
              <p className="text-gray-300 text-base md:text-lg italic leading-relaxed max-w-3xl mx-auto">
                A journey of growth, learning, and impactful contributions
              </p>
            </div>
          </div>
          {experiences.map((item, idx) => {
            const isEven = idx % 2 === 0;
            const gridCols = isEven
              ? "lg:grid-cols-[1.2fr_1fr]"
              : "lg:grid-cols-[1fr_1.2fr]";
            if (idx >= 4) return null;
            return (
              <React.Fragment key={item.id}>
                <div
                  className={`grid grid-cols-1 ${gridCols} text-white w-full mb-7 lg:mb-0`}
                  data-aos="fade-down"
                >
                  <div
                    className={
                      isEven ? "border border-gray-600 p-5 rounded-2xl" : ""
                    }
                  >
                    {isEven && (
                      <>
                        <div className="flex items-center gap-3 mb-3">
                          {getIconForRole(item.role)}
                          <div className="flex flex-col">
                            <span className="text-[20px] lg:text-2xl">
                              {item.role}
                            </span>
                            {item.volunteer && (
                              <span className="text-sm text-green-400 font-medium">
                                Volunteer
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="text-gray-400 mb-4">
                          <p className="text-[15px] font-medium mb-1">
                            {item.organization}
                          </p>
                          <p className="text-[13px] text-gray-500">
                            {`${item.start} - ${item.end}`}
                          </p>
                        </div>
                        <Link
                          to={`/experience/${item.id}`}
                          className="flex items-center gap-2 text-[#4A90E2] hover:text-blue-300 transition-colors duration-300 text-sm font-medium"
                        >
                          More Details <FiArrowRight size={16} />
                        </Link>
                      </>
                    )}
                  </div>

                  {!isEven && (
                    <div className="border border-gray-600 p-5 rounded-2xl">
                      <div className="flex items-center gap-3 mb-3">
                        {getIconForRole(item.role)}
                        <div className="flex flex-col">
                          <span className="text-[20px] lg:text-2xl">
                            {item.role}
                          </span>
                          {item.volunteer && (
                            <span className="text-sm text-green-400 font-medium">
                              Volunteer
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="text-gray-400 mb-4">
                        <p className="text-[15px] font-medium mb-1">
                          {item.organization}
                        </p>
                        <p className="text-[13px] text-gray-500">
                          {`${item.start} - ${item.end}`}
                        </p>
                      </div>
                      <Link
                        to={`/experience/${item.id}`}
                        className="flex items-center gap-2 text-[#4A90E2] hover:text-blue-300 transition-colors duration-300 text-sm font-medium"
                      >
                        More Details <FiArrowRight size={16} />
                      </Link>
                    </div>
                  )}
                </div>

                {idx < experiences.length - 1 && (
                  <div
                    className="w-[1.6px] h-15 bg-gray-600 hidden lg:flex"
                    data-aos="fade-down"
                  />
                )}
              </React.Fragment>
            );
          })}
          <div className="text-center mt-3" data-aos="fade-up">
            <Link to="/Experiences">
              <button className="group relative overflow-hidden text-[#4A90E2] border-2 border-[#4A90E2] hover:text-white py-3 px-10 transition-all duration-500 cursor-pointer rounded-3xl shadow-2xl shadow-[#4A90E2]/30 ">
                <span className="absolute inset-0 bg-[#4A90E2] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
                <span className="relative z-10">View All Experiences</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="h-[1px] bg-gray-600" data-aos="fade-down" />
    </section>
  );
};

export default Experience;
