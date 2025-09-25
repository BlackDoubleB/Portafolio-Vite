import { iconSkill } from "./IconSkills";
import { TitleH3 } from "../atoms/TitleH3";
import { TargetAbout } from "./TargetAbout";
import { Projects } from "../proyects/Projects";
import { Blog } from "../blog/Blog";
export const TargetSkills = () => {
 
  return (
    <section className="max-[400px]:break-all relative flex flex-col gap-10 sm:gap-28 w-full pt-12 lg:pt-20">
      
     
        <div className=" flex flex-col gap-5 lg:gap-10 2xl:gap-14">
          <h1 className="degradado text-center sm:text-start max-[400px]:text-xl text-3xl  lg:text-5xl 2xl:text-6xl">
            DESARROLLADORA <br className=""/> FULL-STACK
          </h1>
          <div className="sm:hidden ">
            <TargetAbout />
          </div>
          <p className=" font-encode_sans_expanded font-thin text-[var(--color-letra-parrafo)] text-xs sm:text-xs md:text-base lg:text-lg">
            Apasionada por crear interfaces elegantes y funcionales. Me encanta
            aprender nuevas tecnologías y colaborar en proyectos desafiantes.
          </p>
        </div>

        <div className="flex flex-col gap-10">
          <TitleH3 titleH3={"Habilidades"} />
          <div className="flex gap-5 flex-wrap 2xl:justify-between justify-center">
            {iconSkill.map((icon, index) => {
              return (
                <div
                  className="flex flex-col items-center"
                  key={`${icon.descripcion}-${index}`}
                >
                  <div>
                    <div className="">
                      <img
                        src={icon.ruta}
                        className="w-9 h-9
                                     lg:w-12 lg:h-12
                                     xl:w-16 xl:h-16"
                      />
                    </div>
                  </div>
                  <p
                    className="text-xs sm:text-xs md:text-base lg:text-lg"
                  >
                    {icon.nombre}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        
       <Projects />
      <Blog /> 
    </section>
  );
};
