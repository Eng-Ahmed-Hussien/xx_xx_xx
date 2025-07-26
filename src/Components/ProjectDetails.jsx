import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link, useNavigate } from "react-router-dom";
import { FadeLoader } from "react-spinners";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import {
  FiArrowLeft,
  FiExternalLink,
  FiGithub,
  FiUser,
  FiClock,
  FiTag,
  FiActivity,
  FiCalendar,
  FiStar,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";
// AOS
import Aos from "aos";
import "aos/dist/aos.css";

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [related, setRelated] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function load() {
      try {
        const { data } = await axios.get("/data.json");
        if (!Array.isArray(data)) throw Error("Invalid data format");
        const current = data.find((p) => p.id === +id);
        if (!current) throw Error("Project not found");
        setProject(current);
        setRelated(
          data
            .filter(
              (p) =>
                current.related_projects?.includes(p.id) && p.id !== current.id
            )
            .slice(0, 3)
        );
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [id]);

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
      className="absolute top-1/2 right-4 z-10 -translate-y-1/2 w-12 h-12 bg-[#4A90E2] hover:bg-[#FF6F91] rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 shadow-lg"
      onClick={onClick}
    >
      <FiChevronRight className="text-white text-xl" />
    </div>
  );

  const PrevArrow = ({ onClick }) => (
    <div
      className="absolute top-1/2 left-4 z-10 -translate-y-1/2 w-12 h-12 bg-[#4A90E2] hover:bg-[#FF6F91] rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 shadow-lg"
      onClick={onClick}
    >
      <FiChevronLeft className="text-white text-xl" />
    </div>
  );

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    adaptiveHeight: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    dotsClass: "slick-dots !bottom-6",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center bg-[#0A0F1F]">
        <div className="text-center">
          <FadeLoader color="#FF6F91" size={15} />
          <p className="text-gray-400 mt-4 text-lg">
            Loading Project Details...
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-[#0A0F1F]">
        <div className="text-center max-w-md mx-auto p-8">
          <div className="w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <FiActivity className="text-red-500 text-3xl" />
          </div>
          <h2 className="text-white text-2xl font-bold mb-4">
            Oops! Something went wrong
          </h2>
          <p className="text-red-400 text-lg mb-6">{error}</p>
          <button
            onClick={() => navigate("/projects")}
            className="bg-gradient-to-r from-[#4A90E2] to-[#5BA3F5] hover:from-[#FF6F91] hover:to-[#FF8FA3] text-white px-8 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 font-semibold"
          >
            Back to Projects
          </button>
        </div>
      </div>
    );
  }

  const projectDetails = [
    { icon: FiUser, label: "Author", value: project.author },
    { icon: FiClock, label: "Duration", value: project.duration },
    { icon: FiTag, label: "Category", value: project.category },
    { icon: FiActivity, label: "Status", value: project.status },
    { icon: FiCalendar, label: "Created", value: project.created_date },
    { icon: FiStar, label: "Rating", value: `${project.rating}/5` },
  ];

  return (
    <div className="bg-[#0A0F1F] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 lg:pt-32 pb-8">
        {/* Hero Section */}
        <div className="mb-16" data-aos="fade-up">
          <h4 className="words text-3xl py-10">
            {project.title}
            <div className="w-24 h-1 bg-gradient-to-r from-[#4A90E2] to-[#FF6F91] mt-2 mb-4"></div>
          </h4>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed md:max-w-4xl font-light text-left">
            {project.long_description || project.description}
          </p>
        </div>

        {/* Featured Image */}
        {project.img && (
          <div className="mb-16" data-aos="zoom-in">
            <div className="relative group overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={`${project.img}`}
                alt={`${project.title} preview`}
                className="w-full h-auto max-h-[70vh] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        )}

        {/* screenshots Gallery */}
        {project.screenshots?.length > 0 && (
          <section className="mb-16" data-aos="fade-up">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Project{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4A90E2] to-[#FF6F91]">
                  Gallery
                </span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-[#4A90E2] to-[#FF6F91] mx-auto rounded-full"></div>
            </div>

            <div className="relative bg-gray-900/50 backdrop-blur-sm rounded-2xl p-2 border border-gray-700/50">
              <Slider {...sliderSettings}>
                {project.screenshots.map((src, idx) => (
                  <div key={idx} className="px-0">
                    <div className="relative">
                      <img
                        src={src}
                        alt={`${project.title} screenshot ${idx + 1}`}
                        className="w-full h-auto max-h-[60vh] object-contain mx-auto rounded-lg shadow-lg border border-gray-600/30"
                      />
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </section>
        )}

        {/* Project Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Project Details */}
          <div className="space-y-6" data-aos="fade-right">
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-[#4A90E2] to-[#FF6F91] rounded-lg flex items-center justify-center mr-3">
                  <FiActivity className="text-white text-lg" />
                </div>
                Project Details
              </h3>

              <div className="space-y-4">
                {projectDetails.map(
                  ({ icon: Icon, label, value }) =>
                    value && (
                      <div
                        key={label}
                        className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-colors duration-300"
                      >
                        <div className="flex items-center">
                          {Icon && (
                            <Icon className="text-[#4A90E2] text-lg mr-3" />
                          )}
                          <span className="text-gray-400 font-medium">
                            {label}
                          </span>
                        </div>
                        <span className="text-white font-semibold">
                          {value}
                        </span>
                      </div>
                    )
                )}
              </div>
            </div>
          </div>

          {/* Technologies */}
          <div className="space-y-6" data-aos="fade-left">
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-[#FF6F91] to-[#FF8FA3] rounded-lg flex items-center justify-center mr-3">
                  <FiTag className="text-white text-lg" />
                </div>
                Technologies Used
              </h3>

              <div className="flex flex-wrap gap-3">
                {project.technologies?.map((tech, i) => (
                  <span
                    key={i}
                    className="group px-4 py-2 bg-gradient-to-r from-[#4A90E2]/20 to-[#FF6F91]/20 hover:from-[#4A90E2] hover:to-[#FF6F91] text-[#4A90E2] hover:text-white rounded-full text-sm font-medium border border-[#4A90E2]/30 hover:border-transparent transition-all duration-300 cursor-default hover:scale-105"
                  >
                    {tech}
                  </span>
                )) || <p className="text-gray-400">No technologies listed</p>}
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <section className="text-center mb-16" data-aos="fade-up">
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            {project.live_demo && (
              <a
                href={project.live_demo}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="group w-full sm:w-auto flex items-center justify-center gap-3 bg-gradient-to-r from-[#4A90E2] to-[#5BA3F5] hover:from-[#FF6F91] hover:to-[#FF8FA3] text-white py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-[#4A90E2]/30 hover:scale-105 font-semibold text-lg">
                  <FiExternalLink className="text-xl group-hover:rotate-12 transition-transform duration-300" />
                  View Live Demo
                </button>
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="group w-full sm:w-auto flex items-center justify-center gap-3 bg-gradient-to-r from-gray-700 to-gray-600 hover:from-[#4A90E2] hover:to-[#5BA3F5] text-white py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-[#4A90E2]/30 hover:scale-105 font-semibold text-lg">
                  <FiGithub className="text-xl group-hover:rotate-12 transition-transform duration-300" />
                  View Source Code
                </button>
              </a>
            )}
          </div>
        </section>

        {/* Related Projects */}
        {related.length > 0 && (
          <section data-aos="fade-up">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Related{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4A90E2] to-[#FF6F91]">
                  Projects
                </span>
              </h3>
              <div className="w-20 h-1 bg-gradient-to-r from-[#4A90E2] to-[#FF6F91] mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {related.map((pr, index) => (
                <Link key={pr.id} to={`/projects/${pr.id}`}>
                  <div
                    className="group bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-[#4A90E2]/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-[#4A90E2]/20"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={pr.img}
                        alt={pr.title}
                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    <div className="p-6">
                      <h4 className="text-xl font-bold text-white mb-2 group-hover:text-[#4A90E2] transition-colors duration-300">
                        {pr.title}
                      </h4>
                      <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                        {pr.description}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>

      <style jsx="true">{`
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .slick-dots li button:before {
          color: #4a90e2;
          font-size: 12px;
          opacity: 0.75;
        }

        .slick-dots li.slick-active button:before {
          color: #ff6f91;
          opacity: 1;
        }

        @media (max-width: 768px) {
          .slick-dots {
            bottom: -30px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default ProjectDetails;
