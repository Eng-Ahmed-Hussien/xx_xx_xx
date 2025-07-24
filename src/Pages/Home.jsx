import { lazy, Suspense } from 'react';
import { FadeLoader } from 'react-spinners';
const Header = lazy (() => import ('../Components/Header'));
const Service = lazy (() => import ('../Components/Service'));
const Education = lazy (() => import ('../Components/Education'));
const Skill = lazy (() => import ('../Components/Skill'));
const ProfessionalStats = lazy (() => import ('../Components/ProfessionalStats'));
const Portfolio = lazy (() => import ('../Components/Portfolio'));
const Contact = lazy (() => import ('../Components/Contact'));

import {Helmet} from "react-helmet";
import { logo } from '../../public/assets';

const Home = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="title" content="A7med Hussien - بورتفيليو شخصي" />
                <meta property="og:title" content="A7med Hussien - بورتفيليو شخصي" />
                <meta name="description" content="View my personal work and technical projects on my personal portfolio" />
                <meta property="og:description" content="View my personal work and technical projects on my personal portfolio" />
                <meta name="keywords" content="A7med Hussien , Portfolio , Frontend Developer , Web Developer , Software Engineering , مهندس برمجيات , بورتفيليو , مطور واجهه اماميه ,  A7med Hussien" />
                <meta property="og:url" content="https://portfoliio-a7med-hussien.vercel.app/" />
                <meta property="og:image" content={logo} />
                <meta name='author' content='A7med Hussien'/>
            </Helmet>
            <Suspense fallback={<div className='bg-[#0A0F1F] h-[100vh] flex items-center justify-center'><FadeLoader color='#FF6F91' /></div>}>
                <Header/>
            </Suspense>
            <Suspense fallback={<div className='bg-[#0A0F1F] h-[100vh] flex items-center justify-center'><FadeLoader color='#FF6F91' /></div>}>
                <Service/>
            </Suspense>
            <Suspense fallback={<div className='bg-[#0A0F1F] h-[100vh] flex items-center justify-center'><FadeLoader color='#FF6F91' /></div>}>
                <Education/>
            </Suspense>
            <Suspense fallback={<div className='bg-[#0A0F1F] h-[100vh] flex items-center justify-center'><FadeLoader color='#FF6F91' /></div>}>
                <Skill/>
            </Suspense>
            <Suspense fallback={<div className='bg-[#0A0F1F] h-[100vh] flex items-center justify-center'><FadeLoader color='#FF6F91' /></div>}>
                <ProfessionalStats/>
            </Suspense>
            <Suspense fallback={<div className='bg-[#0A0F1F] h-[100vh] flex items-center justify-center'><FadeLoader color='#FF6F91' /></div>}>
                <Portfolio/>
            </Suspense>
            <Suspense fallback={<div className='bg-[#0A0F1F] h-[100vh] flex items-center justify-center'><FadeLoader color='#FF6F91' /></div>}>
                <Contact/>
            </Suspense>
        </>
    )
}

export default Home