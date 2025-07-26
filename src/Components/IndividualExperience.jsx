import React, { useEffect, useState } from "react";
import {
  FiCalendar,
  FiMapPin,
  FiAward,
  FiExternalLink,
  FiHeart,
  FiTarget,
  FiBookOpen,
  FiCode,
  FiTrendingUp,
} from "react-icons/fi";
import { FaGraduationCap } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";
import { useParams, Link } from "react-router-dom";

const getIconForRole = (role = "") => {
  const lower = role.toLowerCase();
  if (lower.includes("freelance"))
    return <FiTrendingUp size={32} className="text-cyan-400" />;
  if (lower.includes("instructor"))
    return <FaGraduationCap size={32} className="text-cyan-400" />;
  if (lower.includes("trainee"))
    return <FiBookOpen size={32} className="text-cyan-400" />;
  if (lower.includes("internship"))
    return <FiAward size={32} className="text-cyan-400" />;
  return <FiCode size={32} className="text-cyan-400" />;
};

const IndividualExperiencePage = () => {
  const { id } = useParams();
  const [experience, setExperience] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    Aos.init({ duration: 1000, once: false, mirror: true });
    Aos.refresh();

    fetch("/experienceDetails.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load experience data");
        return res.json();
      })
      .then((data) => {
        const exp = data[id];
        if (exp) {
          setExperience({ id, ...exp });
        } else {
          setError("Experience not found");
        }
      })
      .catch(() => setError("Error loading data"))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0A0E1A] flex items-center justify-center">
        <div className="text-white text-xl animate-pulse">
          Loading experience details...
        </div>
      </div>
    );
  }

  if (error || !experience) {
    return (
      <div className="min-h-screen bg-[#0A0E1A] flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-400 text-xl mb-4">Experience not found</div>
          <button
            onClick={() => window.history.back()}
            className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium"
          >
            Go back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0A0E1A] pt-35 pb-15">
      <div className="fixed inset-0 bg-gradient-to-br from-cyan-900/10 via-transparent to-purple-900/10 pointer-events-none"></div>

      <section className="container mx-auto px-5 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header Card */}
          <div
            className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 lg:p-12 mb-12 shadow-2xl"
            data-aos="fade-up"
          >
            <div className="flex flex-col lg:flex-row lg:justify-between mb-8">
              <div className="flex items-center gap-6 mb-6 lg:mb-0">
                <div className="p-3 bg-cyan-400/10 rounded-2xl border border-cyan-400/20">
                  {getIconForRole(experience.role)}
                </div>
                <div>
                  <h1 className="text-3xl lg:text-5xl  font-bold mb-3 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    {experience.role}
                  </h1>
                  <div className="flex items-center gap-2 text-cyan-400 font-semibold mb-3">
                    <FiExternalLink size={20} />
                    <span className="text-lg">{experience.organization}</span>
                  </div>
                  {experience.volunteer && (
                    <div className="flex items-center gap-2 text-emerald-400 mb-3">
                      <FiHeart size={18} />
                      <span className="font-medium">Volunteer Position</span>
                    </div>
                  )}
                  <span className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 border border-cyan-400/30">
                    {experience.type}
                  </span>
                </div>
              </div>
              <div className="flex flex-col space-y-3 text-gray-300">
                <div className="flex items-center gap-3 bg-gray-800/50 rounded-lg p-3">
                  <FiCalendar size={20} className="text-cyan-400" />
                  <span className="font-medium">
                    {experience.start} - {experience.end}
                  </span>
                </div>
                <div className="flex items-center gap-3 bg-gray-800/50 rounded-lg p-3">
                  <FiMapPin size={20} className="text-cyan-400" />
                  <span className="font-medium">{experience.location}</span>
                </div>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed text-lg">
              {experience.longDescription}
            </p>
          </div>

          {/* Achievements & Responsibilities */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div
              className="bg-gradient-to-br from-gray-900/70 to-gray-800/70 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 shadow-xl"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h2 className="text-2xl text-white font-bold mb-6 flex items-center gap-3">
                <div className="p-2 bg-cyan-400/10 rounded-xl">
                  <FiAward size={24} className="text-cyan-400" />
                </div>
                Achievements
              </h2>
              <ul className="space-y-4">
                {experience.achievements.map((ach, i) => (
                  <li
                    key={i}
                    className="text-gray-300 flex items-start gap-4 group"
                  >
                    <div className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mt-2 group-hover:scale-125 transition-transform"></div>
                    <span className="leading-relaxed">{ach}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="bg-gradient-to-br from-gray-900/70 to-gray-800/70 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 shadow-xl"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h2 className="text-2xl text-white font-bold mb-6 flex items-center gap-3">
                <div className="p-2 bg-emerald-400/10 rounded-xl">
                  <FiTarget size={24} className="text-emerald-400" />
                </div>
                Responsibilities
              </h2>
              <ul className="space-y-4">
                {experience.responsibilities.map((resp, i) => (
                  <li
                    key={i}
                    className="text-gray-300 flex items-start gap-4 group"
                  >
                    <div className="w-3 h-3 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full mt-2 group-hover:scale-125 transition-transform"></div>
                    <span className="leading-relaxed">{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Projects */}
          {experience.projects && (
            <div
              className="bg-gradient-to-br from-gray-900/70 to-gray-800/70 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 mb-12 shadow-xl"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <h2 className="text-2xl text-white font-bold mb-8 flex items-center gap-3">
                <div className="p-2 bg-purple-400/10 rounded-xl">
                  <FiBookOpen size={24} className="text-purple-400" />
                </div>
                Projects
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {experience.projects.map((proj, i) => (
                  <div
                    key={i}
                    className="bg-gradient-to-br from-gray-800/80 to-gray-700/80 border border-gray-600/50 rounded-xl p-6 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-400/10 transition-all duration-300 group"
                  >
                    <h3 className="text-white font-bold text-lg mb-3 group-hover:text-cyan-300 transition-colors">
                      {proj.name}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                      {proj.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {proj.technologies.map((tech, j) => (
                        <span
                          key={j}
                          className="px-3 py-1 bg-gray-700/80 border border-gray-600/50 rounded-lg text-xs font-medium text-gray-300 hover:bg-cyan-400/10 hover:border-cyan-400/30 hover:text-cyan-300 transition-all"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technologies & Skills */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div
              className="bg-gradient-to-br from-gray-900/70 to-gray-800/70 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 shadow-xl"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <h2 className="text-2xl text-white font-bold mb-6 flex items-center gap-3">
                <div className="p-2 bg-orange-400/10 rounded-xl">
                  <FiCode size={24} className="text-orange-400" />
                </div>
                Technologies
              </h2>
              <div className="flex flex-wrap gap-3">
                {experience.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-gradient-to-r from-gray-800/80 to-gray-700/80 border border-gray-600/50 rounded-xl text-sm font-medium text-gray-300 hover:bg-orange-400/10 hover:border-orange-400/30 hover:text-orange-300 transition-all cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div
              className="bg-gradient-to-br from-gray-900/70 to-gray-800/70 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 shadow-xl"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <h2 className="text-2xl text-white font-bold mb-6 flex items-center gap-3">
                <div className="p-2 bg-green-400/10 rounded-xl">
                  <FaGraduationCap size={24} className="text-green-400" />
                </div>
                Skills
              </h2>
              <div className="flex flex-wrap gap-3">
                {experience.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-gradient-to-r from-green-900/30 to-emerald-900/30 border border-green-400/20 rounded-xl text-sm font-medium text-green-300 hover:bg-green-400/20 hover:border-green-400/40 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Back Button */}
          <div className="text-center">
            <Link
              to="/experiences"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 border border-cyan-400/30 rounded-xl text-cyan-400 hover:text-cyan-300 hover:bg-cyan-400/10 transition-all duration-300 font-medium"
            >
              ← Back to All Experiences
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IndividualExperiencePage;
