import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiHome, FiArrowLeft } from "react-icons/fi";
import Aos from "aos";
import "aos/dist/aos.css";

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    Aos.init({ duration: 1000, once: false, mirror: true });
    Aos.refresh();
  }, []);

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <section className="bg-[#0A0F1F] min-h-screen flex items-center justify-center scroll-mt-18 pt-20">
      <div className="container mx-auto px-4 sm:px-[5%] ">
        <div className="text-center max-w-3xl mx-auto">
          {/* 404 Animation */}
          <div className="mb-8" data-aos="fade-down">
            <div className="relative inline-block">
              <h1 className="text-8xl sm:text-9xl lg:text-[12rem] font-bold words mb-4 relative">
                404
              </h1>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#FF6F91] rounded-full opacity-70 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-[#4A90E2] rounded-full opacity-70 animate-pulse delay-300"></div>
              <div className="absolute top-1/2 -right-8 w-4 h-4 bg-[#FF6F91] rounded-full opacity-50 animate-pulse delay-700"></div>
            </div>
          </div>

          {/* Error Message */}
          <div className="mb-8" data-aos="fade-up" data-aos-delay="200">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
              Oops! Page Not Found
            </h2>
            <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-[#4A90E2] to-[#FF6F91] mx-auto rounded-full mb-6"></div>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-8">
              The page you're looking for seems to have wandered off into the
              digital void. Don't worry though, even the best developers get
              lost sometimes!
            </p>
          </div>

          {/* Action Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <button
              onClick={handleGoBack}
              className="group flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-gray-600 text-white rounded-2xl backdrop-blur-sm hover:border-[#4A90E2]/50 transition-all duration-300 hover:scale-105"
            >
              <FiArrowLeft className="group-hover:-translate-x-1 transition-transform duration-300" />
              Go Back
            </button>

            <Link
              to="/"
              className="group flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-gray-600 text-white rounded-2xl backdrop-blur-sm hover:border-[#FF6F91]/50 transition-all duration-300 hover:scale-105"
            >
              <FiHome className="group-hover:scale-110 transition-transform duration-300" />
              Go Home
            </Link>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 left-10 w-2 h-2 bg-[#FF6F91] rounded-full opacity-60 animate-pulse delay-1000"></div>
          <div className="absolute top-40 right-20 w-3 h-3 bg-[#4A90E2] rounded-full opacity-40 animate-pulse delay-2000"></div>
          <div className="absolute bottom-32 left-1/4 w-1 h-1 bg-[#FF6F91] rounded-full opacity-80 animate-pulse delay-3000"></div>
          <div className="absolute bottom-20 right-1/3 w-2 h-2 bg-[#4A90E2] rounded-full opacity-50 animate-pulse delay-4000"></div>
          <div className="absolute top-1/2 left-8 w-1 h-1 bg-[#FF6F91] rounded-full opacity-70 animate-pulse delay-5000"></div>
          <div className="absolute top-1/3 right-12 w-2 h-2 bg-[#4A90E2] rounded-full opacity-30 animate-pulse delay-6000"></div>
        </div>
      </div>

      <div className="h-[1px] bg-gray-600" data-aos="fade-down"></div>

      <style jsx="true">{`
        .words {
          background: linear-gradient(45deg, #4a90e2, #ff6f91, #4a90e2);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradient-shift 3s ease-in-out infinite;
        }

        @keyframes gradient-shift {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 6px;
        }

        ::-webkit-scrollbar-track {
          background: #0a0f1f;
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #4a90e2, #ff6f91);
          border-radius: 3px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #ff6f91, #4a90e2);
        }
      `}</style>
    </section>
  );
};

export default NotFound;
