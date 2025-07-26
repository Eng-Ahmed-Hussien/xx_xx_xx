import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FadeLoader } from "react-spinners";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// AOS
import Aos from "aos";
import "aos/dist/aos.css";
// React Icons
import {
  FiInfo,
  FiX,
  FiExternalLink,
  FiGithub,
  FiSearch,
  FiChevronLeft,
  FiChevronRight,
  FiFilter,
  FiGrid,
  FiList,
} from "react-icons/fi";

const AllProjects = () => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expandedProject, setExpandedProject] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [categories, setCategories] = useState(["All"]);
  const [showCategoryMenu, setShowCategoryMenu] = useState(false);
  const [viewMode, setViewMode] = useState("grid"); // 'grid' or 'list'

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const getProjectsPerPage = () => {
    if (viewMode === "list") return 8;
    return 12;
  };

  useEffect(() => {
    const Api = async () => {
      await axios
        .get("./data.json")
        .then((res) => {
          setProjects(res.data);
          setFilteredProjects(res.data);

          // Extract unique categories
          const uniqueCategories = [
            "All",
            ...new Set(
              res.data.map((project) => project.category).filter(Boolean)
            ),
          ];
          setCategories(uniqueCategories);
        })
        .catch((error) => console.log(error))
        .finally(() => setLoading(false));
    };
    Api();
  }, []);

  // AOS
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
    Aos.refresh();
  }, []);

  // Filter projects by category
  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter((project) => project.category === selectedCategory)
      );
    }
    setCurrentPage(1); // Reset to first page when category changes
  }, [selectedCategory, projects]);

  // Reset pagination when view mode changes
  useEffect(() => {
    setCurrentPage(1);
  }, [viewMode]);

  // Pagination calculations
  const projectsPerPage = getProjectsPerPage();
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  const showPagination = filteredProjects.length > projectsPerPage;

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
        },
      },
    ],
  };

  const handleImageClick = (project) => {
    setExpandedProject(project);
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.width = "100%";
    document.body.style.height = "100%";
    document.body.classList.add("modal-open");
  };

  const closeModal = () => {
    setExpandedProject(null);
    document.body.style.overflow = "unset";
    document.body.style.position = "unset";
    document.body.style.width = "unset";
    document.body.style.height = "unset";
    document.body.classList.remove("modal-open");
  };

  // Handle escape key press
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && expandedProject) {
        closeModal();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [expandedProject]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setShowCategoryMenu(false);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleViewModeChange = (mode) => {
    setViewMode(mode);
  };

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
              <Slider
                {...{
                  ...sliderSettings,
                  responsive: [
                    {
                      breakpoint: 768,
                      settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                        dots: true,
                      },
                    },
                    {
                      breakpoint: 480,
                      settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                        dots: true,
                      },
                    },
                  ],
                }}
              >
                {(project.screens || project.screenshots)?.map(
                  (screen, index) => (
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
                  )
                ) || (
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
                <a
                  href={project.live_demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <button className="group w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-[#4A90E2] to-[#5BA3F5] hover:from-[#FF6F91] hover:to-[#FF8FA3] text-white py-2.5 sm:py-3 px-4 sm:px-6 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 text-sm sm:text-base">
                    <FiExternalLink className="text-base sm:text-lg group-hover:rotate-12 transition-transform duration-300" />
                    Live Demo
                  </button>
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
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
                  ? `${(
                      project.long_description || project.description
                    ).substring(0, 150)}...`
                  : project.long_description || project.description}
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

        <div
          className="relative cursor-pointer mb-4"
          onClick={() => handleImageClick(project)}
        >
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
          <h3 className="text-white text-xl font-bold mb-3 group-hover:text-[#4A90E2] transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
            <span className="line-clamp-2">{project.description}</span>
          </p>
        </div>

        <div className="flex gap-3 mt-auto">
          <a
            href={project.live_demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1"
          >
            <button className="group w-full flex items-center justify-center gap-2 text-[#4A90E2] border border-[#4A90E2] hover:bg-[#4A90E2] hover:text-white py-2.5 px-4 transition-all duration-300 rounded-xl text-sm font-medium hover:shadow-lg hover:shadow-[#4A90E2]/30">
              <FiExternalLink className="text-sm group-hover:rotate-12 transition-transform duration-300" />
              Live Demo
            </button>
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1"
          >
            <button className="group w-full flex items-center justify-center gap-2 text-[#FF6F91] border border-[#FF6F91] hover:bg-[#FF6F91] hover:text-white py-2.5 px-4 transition-all duration-300 rounded-xl text-sm font-medium hover:shadow-lg hover:shadow-[#FF6F91]/30">
              <FiGithub className="text-sm group-hover:rotate-12 transition-transform duration-300" />
              Github
            </button>
          </a>
        </div>
      </div>
    </div>
  );

  const ProjectListItem = ({ project }) => (
    <div className="group">
      <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-[#4A90E2]/50 p-6 rounded-2xl relative transition-all duration-500 hover:shadow-2xl hover:shadow-[#4A90E2]/20">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Image Section */}
          <div className="lg:w-80 flex-shrink-0">
            <div
              className="relative cursor-pointer"
              onClick={() => handleImageClick(project)}
            >
              <div className="relative overflow-hidden rounded-xl">
                <img
                  className="w-full h-48 lg:h-40 object-cover transition-all duration-500 group-hover:scale-110"
                  src={project.img}
                  alt={`${project.title} preview`}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center justify-center text-white">
                      <FiSearch className="text-xl mr-2" />
                      <span className="text-sm font-semibold">
                        View Gallery
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="flex-grow flex flex-col">
            <div className="flex-grow">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-white text-xl lg:text-2xl font-bold group-hover:text-[#4A90E2] transition-colors duration-300">
                  {project.title}
                </h3>
                <InfoIcon project={project} />
              </div>

              <p className="text-gray-400 text-sm lg:text-base leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Category Badge */}
              {project.category && (
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-[#4A90E2]/20 text-[#4A90E2] text-xs font-medium rounded-full border border-[#4A90E2]/30">
                    {project.category}
                  </span>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <a
                href={project.live_demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none"
              >
                <button className="group w-full sm:w-auto flex items-center justify-center gap-2 text-[#4A90E2] border border-[#4A90E2] hover:bg-[#4A90E2] hover:text-white py-2.5 px-6 transition-all duration-300 rounded-xl text-sm font-medium hover:shadow-lg hover:shadow-[#4A90E2]/30">
                  <FiExternalLink className="text-sm group-hover:rotate-12 transition-transform duration-300" />
                  Live Demo
                </button>
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none"
              >
                <button className="group w-full sm:w-auto flex items-center justify-center gap-2 text-[#FF6F91] border border-[#FF6F91] hover:bg-[#FF6F91] hover:text-white py-2.5 px-6 transition-all duration-300 rounded-xl text-sm font-medium hover:shadow-lg hover:shadow-[#FF6F91]/30">
                  <FiGithub className="text-sm group-hover:rotate-12 transition-transform duration-300" />
                  Github
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const ViewSwitcher = () => (
    <div
      className="hidden lg:flex items-center gap-2 bg-gray-800/50 border border-gray-700/50 rounded-xl p-1"
      data-aos="fade-up"
    >
      <button
        onClick={() => handleViewModeChange("grid")}
        className={`flex items-center gap-2 px-4 py-2.5 rounded-lg transition-all duration-300 font-medium text-sm
                    cursor-pointer ${
                      viewMode === "grid"
                        ? "bg-gradient-to-r from-[#4A90E2] to-[#5BA3F5] text-white shadow-lg"
                        : "text-gray-300 hover:text-white hover:bg-gray-700/50"
                    }`}
      >
        <FiGrid className="text-base" />
        Grid View
      </button>
      <button
        onClick={() => handleViewModeChange("list")}
        className={`flex items-center gap-2 px-4 py-2.5 rounded-lg transition-all duration-300 font-medium text-sm cursor-pointer ${
          viewMode === "list"
            ? "bg-gradient-to-r from-[#4A90E2] to-[#5BA3F5] text-white shadow-lg"
            : "text-gray-300 hover:text-white hover:bg-gray-700/50"
        }`}
      >
        <FiList className="text-base" />
        List View
      </button>
    </div>
  );

  const CategoryMenu = () => (
    <div className="mb-8" data-aos="fade-up">
      {/* Desktop Categories */}
      <div className="hidden md:flex flex-wrap justify-center gap-3">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryChange(category)}
            className={`px-6 py-3 rounded-full transition-all duration-300 font-medium text-sm ${
              selectedCategory === category
                ? "bg-gradient-to-r from-[#4A90E2] to-[#5BA3F5] text-white shadow-lg shadow-[#4A90E2]/30"
                : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white border border-gray-700/50 hover:border-[#4A90E2]/50"
            } hover:scale-105 hover:shadow-lg`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Mobile Categories Dropdown */}
      <div className="md:hidden relative">
        <button
          onClick={() => setShowCategoryMenu(!showCategoryMenu)}
          className="w-full bg-gray-800/50 border border-gray-700/50 hover:border-[#4A90E2]/50 text-white px-4 py-3 rounded-xl flex items-center justify-between transition-all duration-300"
        >
          <div className="flex items-center gap-2">
            <FiFilter className="text-[#4A90E2]" />
            <span>{selectedCategory}</span>
          </div>
          <FiChevronRight
            className={`transition-transform duration-300 ${
              showCategoryMenu ? "rotate-90" : ""
            }`}
          />
        </button>

        {showCategoryMenu && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-gray-800/95 backdrop-blur-sm border border-gray-700/50 rounded-xl shadow-2xl z-50 max-h-60 overflow-y-auto">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`w-full text-left px-4 py-3 transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-[#4A90E2] to-[#5BA3F5] text-white"
                    : "text-gray-300 hover:bg-gray-700/50 hover:text-white"
                } first:rounded-t-xl last:rounded-b-xl`}
              >
                {category}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );

  const Pagination = () => {
    if (!showPagination) return null;

    const getPageNumbers = () => {
      const delta = 2;
      const range = [];
      const rangeWithDots = [];

      for (
        let i = Math.max(2, currentPage - delta);
        i <= Math.min(totalPages - 1, currentPage + delta);
        i++
      ) {
        range.push(i);
      }

      if (currentPage - delta > 2) {
        rangeWithDots.push(1, "...");
      } else {
        rangeWithDots.push(1);
      }

      rangeWithDots.push(...range);

      if (currentPage + delta < totalPages - 1) {
        rangeWithDots.push("...", totalPages);
      } else {
        if (totalPages > 1) rangeWithDots.push(totalPages);
      }

      return rangeWithDots;
    };

    return (
      <div
        className="flex justify-center items-center mt-16 gap-2"
        data-aos="fade-up"
      >
        {/* Previous Button */}
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`p-3 rounded-xl transition-all duration-300 ${
            currentPage === 1
              ? "bg-gray-800/30 text-gray-600 cursor-not-allowed"
              : "bg-gray-800/50 text-gray-300 hover:bg-[#4A90E2] hover:text-white hover:scale-105"
          }`}
        >
          <FiChevronLeft className="text-lg" />
        </button>

        {/* Page Numbers */}
        <div className="flex gap-2">
          {getPageNumbers().map((page, index) => (
            <button
              key={index}
              onClick={() => typeof page === "number" && handlePageChange(page)}
              disabled={page === "..."}
              className={`px-4 py-3 rounded-xl transition-all duration-300 font-medium ${
                page === currentPage
                  ? "bg-gradient-to-r from-[#4A90E2] to-[#5BA3F5] text-white shadow-lg"
                  : page === "..."
                  ? "text-gray-500 cursor-default"
                  : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white hover:scale-105"
              }`}
            >
              {page}
            </button>
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`p-3 rounded-xl transition-all duration-300 ${
            currentPage === totalPages
              ? "bg-gray-800/30 text-gray-600 cursor-not-allowed"
              : "bg-gray-800/50 text-gray-300 hover:bg-[#4A90E2] hover:text-white hover:scale-105"
          }`}
        >
          <FiChevronRight className="text-lg" />
        </button>
      </div>
    );
  };

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center bg-[#0A0F1F]">
        <div className="text-center">
          <FadeLoader color="#FF6F91" size={15} />
          <p className="text-gray-400 mt-4 text-lg">Loading All Projects...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <section className="bg-[#0A0F1F] min-h-screen" id="top">
        <div className="container mx-auto px-[5%] pb-20">
          {/* Header */}
          <div className="w-full" data-aos="fade-down">
            <h4 className="words text-3xl pt-28 py-10">ALL PROJECTS</h4>
          </div>

          {/* Quote */}
          <div className="w-full mb-8 md:mb-10" data-aos="fade-up">
            <div className="text-center px-4">
              <p className="text-gray-300 text-base md:text-lg italic leading-relaxed max-w-3xl mx-auto">
                Explore my complete collection of projects showcasing diverse
                skills and innovative solutions
              </p>
            </div>
          </div>

          {/* Categories Menu */}
          <CategoryMenu />

          {/* Controls Section - Projects Count and View Switcher */}
          <div
            className="flex flex-col lg:flex-row items-center justify-between mb-8 gap-4"
            data-aos="fade-up"
          >
            {/* Projects Count */}
            <div className="flex items-center gap-2 text-gray-400">
              <FiGrid className="text-[#4A90E2]" />
              <span className="text-sm">
                Showing {indexOfFirstProject + 1}-
                {Math.min(indexOfLastProject, filteredProjects.length)} of{" "}
                {filteredProjects.length} projects
                {selectedCategory !== "All" && ` in "${selectedCategory}"`}
              </span>
            </div>

            {/* View Switcher - Only on large screens */}
            <ViewSwitcher />
          </div>

          {/* Projects Display */}
          {viewMode === "grid" ? (
            /* Grid View */
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-8">
              {currentProjects.map((project, index) => (
                <div
                  key={project.id}
                  data-aos="fade-up"
                  data-aos-delay={index * 50}
                >
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          ) : (
            /* List View - Only on large screens */
            <div className="hidden lg:block space-y-6">
              {currentProjects.map((project, index) => (
                <div
                  key={project.id}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <ProjectListItem project={project} />
                </div>
              ))}
            </div>
          )}

          {/* Mobile always shows grid */}
          <div className="lg:hidden">
            {viewMode === "list" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {currentProjects.map((project, index) => (
                  <div
                    key={project.id}
                    data-aos="fade-up"
                    data-aos-delay={index * 50}
                  >
                    <ProjectCard project={project} />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* No Projects Found */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-20" data-aos="fade-up">
              <div className="text-gray-400 text-lg mb-4">
                No projects found in "{selectedCategory}" category
              </div>
              <button
                onClick={() => setSelectedCategory("All")}
                className="text-[#4A90E2] hover:text-[#FF6F91] transition-colors duration-300 underline"
              >
                View All Projects
              </button>
            </div>
          )}

          {/* Pagination */}
          <Pagination />
        </div>
      </section>

      {/* Image Modal */}
      {expandedProject && (
        <ImageModal project={expandedProject} onClose={closeModal} />
      )}

      {/* Click outside to close category menu */}
      {showCategoryMenu && (
        <div
          className="fixed inset-0 z-40 md:hidden"
          onClick={() => setShowCategoryMenu(false)}
        />
      )}

      <style jsx="true">{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
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

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        /* Regular slider dots */
        .slick-dots li button:before {
          color: #4a90e2;
          font-size: 12px;
          opacity: 0.75;
        }

        .slick-dots li.slick-active button:before {
          color: #ff6f91;
          opacity: 1;
        }

        /* Modal slider specific styles */
        .modal-slider .slick-dots {
          bottom: -40px !important;
        }

        .modal-slider .slick-dots li button:before {
          color: #4a90e2;
          font-size: 10px;
          opacity: 0.75;
        }

        .modal-slider .slick-dots li.slick-active button:before {
          color: #ff6f91;
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
          border-radius: 2px;
        }

        .modal-slider::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #4a90e2, #ff6f91);
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

export default AllProjects;
