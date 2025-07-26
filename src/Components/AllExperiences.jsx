import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// AOS
import Aos from "aos";
import "aos/dist/aos.css";
// React Icons
import {
  FiBriefcase,
  FiCalendar,
  FiMapPin,
  FiAward,
  FiUsers,
  FiArrowLeft,
  FiFilter,
  FiX,
  FiExternalLink,
} from "react-icons/fi";

const AllExperience = () => {
  const [filter, setFilter] = useState("all");
  const [filteredExperiences, setFilteredExperiences] = useState([]);
  const [allExperiences, setAllExperiences] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
    Aos.refresh();

    fetch("/experienceDetails.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load experience data");
        return res.json();
      })
      .then((data) => {
        // Convert the object to an array with IDs
        const experiencesArray = Object.keys(data).map((id) => ({
          id,
          ...data[id],
        }));
        setAllExperiences(experiencesArray);
        setFilteredExperiences(experiencesArray);
      })
      .catch((err) => {
        setError("Error loading experience data");
        console.error(err);
      })
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    if (filter === "all") {
      setFilteredExperiences(allExperiences);
    } else {
      setFilteredExperiences(
        allExperiences.filter((exp) => exp.type === filter)
      );
    }
  }, [filter, allExperiences]);

  const getTypeIcon = (type) => {
    switch (type) {
      case "work":
        return <FiBriefcase className="text-white" />;
      case "volunteer":
        return <FiUsers className="text-white" />;
      case "internship":
        return <FiAward className="text-white" />;
      case "training":
        return <FiMapPin className="text-white" />;
      default:
        return <FiBriefcase className="text-white" />;
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case "freelance":
        return {
          bg: "from-cyan-500 to-blue-600",
          text: "text-cyan-400",
          border: "border-cyan-400",
          shadow: "shadow-cyan-400/20",
        };
      case "volunteer":
        return {
          bg: "from-pink-500 to-rose-600",
          text: "text-pink-400",
          border: "border-pink-400",
          shadow: "shadow-pink-400/20",
        };
      case "internship":
        return {
          bg: "from-emerald-500 to-green-600",
          text: "text-emerald-400",
          border: "border-emerald-400",
          shadow: "shadow-emerald-400/20",
        };
      case "training":
        return {
          bg: "from-orange-500 to-amber-600",
          text: "text-orange-400",
          border: "border-orange-400",
          shadow: "shadow-orange-400/20",
        };
      default:
        return {
          bg: "from-cyan-500 to-blue-600",
          text: "text-cyan-400",
          border: "border-cyan-400",
          shadow: "shadow-cyan-400/20",
        };
    }
  };

  const FilterButton = ({ type, label, isActive, onClick }) => {
    const colors = getTypeColor(type === "all" ? "work" : type);
    return (
      <button
        onClick={onClick}
        className={`px-6 py-3 rounded-xl transition-all duration-300 text-sm font-medium border ${
          isActive
            ? `bg-gradient-to-r ${colors.bg} text-white shadow-lg ${colors.shadow} border-transparent`
            : `${colors.text} ${colors.border} hover:bg-gradient-to-r hover:${colors.bg} hover:text-white hover:border-transparent hover:shadow-lg hover:${colors.shadow}`
        }`}
      >
        {label}
      </button>
    );
  };

  const ExperienceCard = ({ experience, index }) => {
    const colors = getTypeColor(experience.type);

    return (
      <div className="group" data-aos="fade-up" data-aos-delay={index * 100}>
        <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl border border-gray-700/50 hover:border-cyan-400/50 p-8 rounded-2xl relative transition-all duration-500 hover:transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-cyan-400/10">
          {/* Type Badge */}
          <div className="absolute top-6 right-6">
            <div
              className={`w-12 h-12 bg-gradient-to-r ${colors.bg} rounded-xl flex items-center justify-center shadow-lg ${colors.shadow}`}
            >
              {getTypeIcon(experience.type)}
            </div>
          </div>

          {/* Volunteer Badge */}
          {experience.volunteer && (
            <div className="absolute top-6 left-6">
              <span className="bg-gradient-to-r from-pink-500 to-rose-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg">
                Volunteer
              </span>
            </div>
          )}

          <div className="pr-16">
            {/* Role and Organization */}
            <div className="mb-4">
              <h3 className="text-white text-2xl font-bold mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                {experience.role}
              </h3>
              <div className="flex items-center gap-2 text-cyan-400 font-semibold mb-2">
                <FiExternalLink size={18} />
                <h4 className="text-xl">{experience.organization}</h4>
              </div>
            </div>

            {/* Date and Location */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-gray-400 text-sm mb-6">
              <div className="flex items-center">
                <FiCalendar className="mr-2 text-cyan-400" />
                <span className="font-medium">
                  {experience.start} - {experience.end}
                </span>
              </div>
              {experience.location && (
                <div className="flex items-center">
                  <FiMapPin className="mr-2 text-cyan-400" />
                  <span className="font-medium">{experience.location}</span>
                </div>
              )}
            </div>

            {/* Description */}
            <p className="text-gray-300 text-base leading-relaxed mb-6">
              {experience.longDescription || experience.description}
            </p>

            {/* View Details Link */}
            <div className="mt-6 pt-4 border-t border-gray-700/50">
              <Link
                to={`/experience/${experience.id}`}
                className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium"
              >
                <span>View Full Details</span>
                <FiExternalLink size={16} />
              </Link>
            </div>
          </div>

          {/* Timeline Connector */}
          <div className="absolute left-0 top-1/2 w-1 h-20 bg-gradient-to-b from-cyan-400 to-purple-400 rounded-full transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
        </div>
      </div>
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0A0E1A] flex items-center justify-center">
        <div className="text-white text-xl animate-pulse">
          Loading experiences...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[#0A0E1A] flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-400 text-xl mb-4">{error}</div>
          <button
            onClick={() => window.location.reload()}
            className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <section className="bg-[#0A0E1A] min-h-screen pt-35 relative">
        <div className="fixed inset-0 bg-gradient-to-br from-cyan-900/10 via-transparent to-purple-900/10 pointer-events-none"></div>

        <div className="container mx-auto px-[5%] pb-16 relative z-10">
          {/* Header */}
          <div
            className="flex items-center justify-between mb-8"
            data-aos="fade-down"
          >
            <div>
              <h1 className="words text-4xl md:text-5xl font-bold">
                ALL EXPERIENCE
              </h1>
            </div>
          </div>

          {/* Quote */}
          <div className="text-center mb-12" data-aos="fade-up">
            <p className="text-gray-300 text-lg md:text-xl italic leading-relaxed max-w-4xl mx-auto">
              A comprehensive overview of my professional journey, from learning
              experiences to leading others in the field of frontend development
            </p>
          </div>

          {/* Filter Buttons */}
          <div
            className="flex flex-wrap justify-center gap-4 mb-12"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="flex items-center gap-2 text-gray-400 text-sm font-medium mb-2 sm:mb-0">
              <FiFilter />
              <span>Filter by:</span>
            </div>
            <FilterButton
              type="all"
              label="All Experience"
              isActive={filter === "all"}
              onClick={() => setFilter("all")}
            />
            <FilterButton
              type="freelance"
              label="Freelance"
              isActive={filter === "freelance"}
              onClick={() => setFilter("freelance")}
            />
            <FilterButton
              type="volunteer"
              label="Volunteer"
              isActive={filter === "volunteer"}
              onClick={() => setFilter("volunteer")}
            />
            <FilterButton
              type="internship"
              label="Internship"
              isActive={filter === "internship"}
              onClick={() => setFilter("internship")}
            />
            <FilterButton
              type="training"
              label="Training"
              isActive={filter === "training"}
              onClick={() => setFilter("training")}
            />
          </div>

          {/* Results Count */}
          <div
            className="text-center mb-8"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <p className="text-gray-400">
              Showing {filteredExperiences.length}{" "}
              {filteredExperiences.length === 1 ? "experience" : "experiences"}
              {filter !== "all" && (
                <button
                  onClick={() => setFilter("all")}
                  className="ml-2 text-pink-400 hover:text-cyan-400 transition-colors duration-300 font-medium"
                >
                  <FiX className="inline w-4 h-4 ml-1" />
                  Clear filter
                </button>
              )}
            </p>
          </div>

          {/* Experience List */}
          <div className="space-y-8">
            {filteredExperiences.map((experience, index) => (
              <ExperienceCard
                key={experience.id}
                experience={experience}
                index={index}
              />
            ))}
          </div>

          {/* Empty State */}
          {filteredExperiences.length === 0 && (
            <div className="text-center py-16" data-aos="fade-up">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl text-white mb-2">No experiences found</h3>
              <p className="text-gray-400 mb-6">
                Try adjusting your filter or clearing it to see all experiences.
              </p>
              <button
                onClick={() => setFilter("all")}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-xl hover:from-pink-500 hover:to-rose-600 transition-all duration-300 font-medium shadow-lg hover:shadow-cyan-400/20"
              >
                Show All Experience
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default AllExperience;
