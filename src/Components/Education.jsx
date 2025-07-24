import React, { useEffect } from 'react';
import { FaGraduationCap, FaUniversity, FaCalendarAlt, FaAward } from 'react-icons/fa';
// AOS
import Aos from 'aos';
import 'aos/dist/aos.css';

const education = [
  {
    icon: <FaGraduationCap color='#4A90E2' size={40} />,
    degree: 'Bachelor Of Engineering | Computer Science & Engineering Department',
    institution: 'Faculty Of Electronic Engineering, Menouf | Menofia University',
    period: '2021-2025 | Graduated With GPA 3.3',
    status: 'Completed with Honors',
    image: '/assets/educat/college2.jpg',
    description: 'Comprehensive study in computer science fundamentals, software engineering, algorithms, and modern development practices.',
  },
  {
    icon: <FaAward color='#4A90E2' size={40} />,
    degree: 'Diploma Of Industrial Technical Education | Electronics Department',
    institution: 'Technical Industrial Institute Of Benha',
    period: '2019-2021 | Graduated With 99.5%',
    status: 'Completed with Distinction',
    image: '/assets/educat/institute2.jpg',
    description: 'Specialized technical education in electronics with exceptional academic performance, building strong foundation in electrical systems and circuit design.',
  },
];

const Education = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, once: false, mirror: true });
    Aos.refresh();
  }, []);

  return (
    <section id='education' className='scroll-mt-18 bg-[#0A0F1F]'>
      <div className=' pb-16 md:pb-20'>
        <div className='container mx-auto px-4 sm:px-[5%] flex flex-col items-center'>
          <div className='w-full' data-aos='fade-down'>
            <h4 className="words text-3xl py-10">My EDUCATION</h4>
          </div>
          
          {/* Education Quote */}
          <div className='w-full mb-8 md:mb-10' data-aos='fade-up'>
            <div className='text-center px-4'>
              <FaGraduationCap className='mx-auto mb-3 md:mb-4 text-[#4A90E2]' size={40} />
              <p className='text-gray-300 text-base md:text-lg italic leading-relaxed max-w-3xl mx-auto'>
                "Education Is Not The Learning Of Facts, But The Training Of The Mind To Think."
              </p>
            </div>
          </div>

          {education.map((item, idx) => {
            const isEven = idx % 2 === 0;
            const gridCols = isEven ? 'lg:grid-cols-[1.2fr_1fr]' : 'lg:grid-cols-[1fr_1.2fr]';
            
            return (
              <React.Fragment key={item.degree}>
                {/* Mobile Layout - Stack vertically */}
                <div className='block lg:hidden w-full mb-8' data-aos='fade-up'>
                  {/* Image Card - Mobile */}
                  <div className='border border-gray-600 p-3 rounded-xl mb-4 shadow-lg'>
                    <div className='w-full h-40 sm:h-48 bg-gray-800 rounded-lg overflow-hidden'>
                      <img 
                        src={item.image} 
                        alt={item.institution}
                        className='w-full h-full object-cover hover:scale-105 transition-transform duration-300'
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      <div className='w-full h-full hidden items-center justify-center'>
                        <div className='text-center'>
                          <FaUniversity color='#4A90E2' size={50} />
                          <p className='text-gray-500 mt-2 text-sm'>Institution Image</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Content Card - Mobile */}
                  <div className='border border-gray-600 p-4 sm:p-5 rounded-xl shadow-lg bg-gradient-to-br from-gray-900/50 to-gray-800/30'>
                    <div className='flex items-start gap-3 sm:gap-4 mb-4'>
                      <div className='mt-1 flex-shrink-0'>
                        {item.icon}
                      </div>
                      <div className='flex-1 min-w-0'>
                        <h3 className='text-base sm:text-lg font-semibold text-[#4A90E2] mb-3 leading-tight'>
                          {item.degree}
                        </h3>
                        <div className='space-y-2'>
                          <div className='flex items-start gap-2'>
                            <FaUniversity color='#4A90E2' size={14} className='mt-1 flex-shrink-0' />
                            <span className='text-gray-300 text-sm leading-relaxed'>
                              {item.institution}
                            </span>
                          </div>
                          <div className='flex items-center gap-2'>
                            <FaCalendarAlt color='#4A90E2' size={14} className='flex-shrink-0' />
                            <span className='text-green-400 font-medium text-sm'>
                              {item.period}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className='text-gray-400 text-sm leading-relaxed mb-4'>
                      {item.description}
                    </p>
                    <div className='bg-gray-800/70 px-3 py-2 rounded-lg inline-block border border-gray-700'>
                      <span className='text-[#4A90E2] text-xs font-medium'>
                        {item.status}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Desktop Layout - Side by side */}
                <div className={`hidden lg:grid ${gridCols} text-white w-full mb-7 lg:mb-0 gap-8`} data-aos='fade-down'>
                  {isEven ? (
                    <>
                      {/* Content Card - Desktop */}
                      <div className='border border-gray-600 p-6 xl:p-8 rounded-2xl shadow-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm'>
                        <div className='flex items-start gap-5 mb-5'>
                          <div className='mt-1'>
                            {item.icon}
                          </div>
                          <div className='flex-1'>
                            <h3 className='text-xl xl:text-2xl font-semibold text-[#4A90E2] mb-3 leading-tight'>
                              {item.degree}
                            </h3>
                            <div className='space-y-3'>
                              <div className='flex items-start gap-3'>
                                <FaUniversity color='#4A90E2' size={16} className='mt-1' />
                                <span className='text-gray-300 text-base leading-relaxed'>
                                  {item.institution}
                                </span>
                              </div>
                              <div className='flex items-center gap-3'>
                                <FaCalendarAlt color='#4A90E2' size={16} />
                                <span className='text-green-400 font-medium text-base'>
                                  {item.period}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <p className='text-gray-400 text-sm leading-relaxed mb-4'>
                          {item.description}
                        </p>
                        <div className='bg-gray-800/70 px-4 py-2 rounded-lg inline-block border border-gray-700'>
                          <span className='text-[#4A90E2] text-sm font-medium'>
                            {item.status}
                          </span>
                        </div>
                      </div>
                      
                      {/* Image Card - Desktop */}
                      <div className='border border-gray-600 p-4 rounded-2xl shadow-2xl bg-gradient-to-br from-gray-900/30 to-gray-800/20'>
                        <div className='w-full h-64 xl:h-72 bg-gray-800 rounded-xl overflow-hidden'>
                          <img 
                            src={item.image} 
                            alt={item.institution}
                            className='w-full h-full object-cover hover:scale-105 transition-transform duration-500 ease-out'
                            onError={(e) => {
                              e.target.style.display = 'none';
                              e.target.nextSibling.style.display = 'flex';
                            }}
                          />
                          <div className='w-full h-full hidden items-center justify-center'>
                            <div className='text-center'>
                              <FaUniversity color='#4A90E2' size={60} />
                              <p className='text-gray-500 mt-2 text-sm'>Institution Image</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Image Card - Desktop */}
                      <div className='border border-gray-600 p-4 rounded-2xl shadow-2xl bg-gradient-to-br from-gray-900/30 to-gray-800/20'>
                        <div className='w-full h-64 xl:h-72 bg-gray-800 rounded-xl overflow-hidden'>
                          <img 
                            src={item.image} 
                            alt={item.institution}
                            className='w-full h-full object-cover hover:scale-105 transition-transform duration-500 ease-out'
                            onError={(e) => {
                              e.target.style.display = 'none';
                              e.target.nextSibling.style.display = 'flex';
                            }}
                          />
                          <div className='w-full h-full hidden items-center justify-center'>
                            <div className='text-center'>
                              <FaUniversity color='#4A90E2' size={60} />
                              <p className='text-gray-500 mt-2 text-sm'>Institution Image</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Content Card - Desktop */}
                      <div className='border border-gray-600 p-6 xl:p-8 rounded-2xl shadow-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm'>
                        <div className='flex items-start gap-5 mb-5'>
                          <div className='mt-1'>
                            {item.icon}
                          </div>
                          <div className='flex-1'>
                            <h3 className='text-xl xl:text-2xl font-semibold text-[#4A90E2] mb-3 leading-tight'>
                              {item.degree}
                            </h3>
                            <div className='space-y-3'>
                              <div className='flex items-start gap-3'>
                                <FaUniversity color='#4A90E2' size={16} className='mt-1' />
                                <span className='text-gray-300 text-base leading-relaxed'>
                                  {item.institution}
                                </span>
                              </div>
                              <div className='flex items-center gap-3'>
                                <FaCalendarAlt color='#4A90E2' size={16} />
                                <span className='text-green-400 font-medium text-base'>
                                  {item.period}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <p className='text-gray-400 text-sm leading-relaxed mb-4'>
                          {item.description}
                        </p>
                        <div className='bg-gray-800/70 px-4 py-2 rounded-lg inline-block border border-gray-700'>
                          <span className='text-[#4A90E2] text-sm font-medium'>
                            {item.status}
                          </span>
                        </div>
                      </div>
                    </>
                  )}
                </div>
                
                {/* Connector line between items - Desktop only */}
                {idx < education.length - 1 && (
                  <div className='w-[2px] h-16 bg-gradient-to-b from-gray-600 to-gray-700 hidden lg:flex shadow-lg' data-aos='fade-down'></div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
      <div className="h-[1px] bg-gray-600" data-aos="fade-down"></div>
    </section>
  );
};

export default Education;