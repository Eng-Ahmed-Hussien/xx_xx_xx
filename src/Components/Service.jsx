import React, { useEffect } from 'react';
import { AiOutlineAntDesign } from 'react-icons/ai';
import { DiResponsive } from 'react-icons/di';
import { GrPersonalComputer } from 'react-icons/gr';
import { FiTrendingUp, FiMonitor, FiBookOpen, FiCheckCircle } from 'react-icons/fi';
// AOS
import Aos from 'aos';
import 'aos/dist/aos.css';

const services = [
  {
    icon: <GrPersonalComputer color='#4A90E2' size={40} />,
    title: 'Website Development',
    description: `I create websites based on your ready-made designs—landing pages or full business sites—that look great and work smoothly on any device.`,  
  },
  {
    icon: <AiOutlineAntDesign color='#4A90E2' size={40} />,
    title: 'UI/UX Design',
    description: `Designing modern, user-centric interfaces from scratch that align with your brand and drive engagement.`,  
  },
  {
    icon: <DiResponsive color='#4A90E2' size={40} />,
    title: 'Responsive Design',
    description: `Building mobile-first, responsive layouts that adapt flawlessly across all screen sizes and devices.`,  
  },
  {
    icon: <FiTrendingUp color='#4A90E2' size={40} />,
    title: 'Performance Optimization',
    description: `Improving load times, optimizing assets, and leveraging best practices to boost your site's Lighthouse scores.`,  
  },
  {
    icon: <FiMonitor color='#4A90E2' size={40} />,
    title: 'Accessibility Audit',
    description: `Ensuring your site meets WCAG standards with high-contrast styling, semantic markup, and keyboard navigation.`,  
  },
  {
    icon: <FiBookOpen color='#4A90E2' size={40} />,
    title: 'Workshops & Training',
    description: `Interactive sessions on HTML5, CSS3, JavaScript, React, and best coding practices for teams and individuals.`,  
  },
  {
    icon: <FiCheckCircle color='#4A90E2' size={40} />,
    title: 'Code Review & Consultation',
    description: `In-depth code analysis, feedback, and step-by-step guidance to maintain high-quality, scalable codebases.`,  
  },
];

const Service = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, once: false, mirror: true });
    Aos.refresh();
  }, []);

  return (
    <section id='service' className='bg-[#0A0F1F] scroll-mt-18'>
      <div className='bg-[#0A0F1F] pb-20'>
          <div className='h-[1px] bg-gray-600'></div>

        <div className='container mx-auto px-[5%] flex flex-col items-center'>
          <div className='w-full' data-aos='fade-down'>
            <h4 className='words text-3xl py-10' >My SERVICES</h4>
          </div>
          {services.map((item, idx) => {
            const isEven = idx % 2 === 0;
            const gridCols = isEven ? 'lg:grid-cols-[1.2fr_1fr]' : 'lg:grid-cols-[1fr_1.2fr]';
            return (
              <React.Fragment key={item.title}>
                <div className={`grid grid-cols-1 ${gridCols} text-white w-full mb-7 lg:mb-0`} data-aos='fade-down'>
                  {isEven ? (
                    <div className='border-1 border-gray-600 p-5 rounded-2xl'>
                      <div className='flex items-center gap-3 mb-3'>
                        {item.icon}
                        <span className='text-[20px] lg:text-2xl'>{item.title}</span>
                      </div>
                      <p className='text-gray-400 text-[13px] leading-relaxed'>
                        {item.description}
                      </p>
                    </div>
                  ) : (
                    <>
                      <div></div>
                      <div className='border-1 border-gray-600 p-5 rounded-2xl'>
                        <div className='flex items-center gap-3 mb-3'>
                          {item.icon}
                          <span className='text-[20px] lg:text-2xl'>{item.title}</span>
                        </div>
                        <p className='text-gray-400 text-[13px] leading-relaxed'>
                          {item.description}
                        </p>
                      </div>
                    </>
                  )}
                </div>
                {idx < services.length - 1 && (
                  <div className='w-[1.6px] h-15 bg-gray-600 hidden lg:flex' data-aos='fade-down'></div>
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

export default Service;
