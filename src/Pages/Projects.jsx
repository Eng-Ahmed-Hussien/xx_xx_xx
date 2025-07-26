import { lazy, Suspense } from "react";
import { Helmet } from "react-helmet";
import { FadeLoader } from "react-spinners";
import { logo } from "../../public/assets";
const AllProjects = lazy(() => import("../Components/AllProjects"));
const Projects = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="title" content="A7med Hussien - بورتفيليو شخصي" />
        <meta property="og:title" content="A7med Hussien - بورتفيليو شخصي" />
        <meta
          name="description"
          content="View my personal work and technical projects on my personal portfolio"
        />
        <meta
          property="og:description"
          content="View my personal work and technical projects on my personal portfolio"
        />
        <meta
          name="keywords"
          content="A7med Hussien , Portfolio , Frontend Developer , Web Developer , Software Engineering , مهندس برمجيات , بورتفيليو , مطور واجهه اماميه ,  A7med Hussien"
        />
        <meta
          property="og:url"
          content="https://ahmedhussienportfolio-gamma.vercel.app/"
        />
        <meta property="og:image" content={logo} />
        <meta name="author" content="A7med Hussien" />
      </Helmet>
      <Suspense
        fallback={
          <div className="bg-[#0A0F1F] h-[100vh] flex items-center justify-center">
            <FadeLoader color="#FF6F91" />
          </div>
        }
      >
        <AllProjects />
      </Suspense>
    </>
  );
};

export default Projects;
