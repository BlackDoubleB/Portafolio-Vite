import { iconSkill } from "./IconSkills";
import { CompButton } from "../atoms/button";
import { TitleH3 } from "../atoms/TitleH3";
import { Projects } from "../proyects/Projects";
import { Blog } from "../blog/Blog";
import { TargetAbout } from "./TargetAbout";
export const TargetSkills = () => {
  const valores = [
    { accion: "Descargar CV", icono: "/assets/symbols/download.svg" },
  ];
  return (
    <section className="max-[400px]:break-all relative flex flex-col w-full pt-10 sm:pt-20">
      
      <div className="px-5">
        <div className=" flex flex-col gap-5 sm:gap-10 2xl:gap-20">
          <h1 className="degradado text-center max-[400px]:text-2xl text-3xl  md:text-5xl 2xl:text-7xl">
            DESARROLLADORA <br className=""/> FULL-STACK
          </h1>
          <div className="sm:hidden">
            <TargetAbout />
          </div>
          <p className="font-encode_sans_expanded font-thin text-[var(--color-letra-parrafo)] text-sm sm:text-lg 2xl:text-2xl">
            Apasionada por crear interfaces elegantes y funcionales. Me encanta
            aprender nuevas tecnologías y colaborar en proyectos desafiantes.
          </p>
        </div>

        <div className="">
          <TitleH3 titleH3={"Habilidades"} />
          <div className="flex gap-5 flex-wrap">
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
                    className="bg-black rounded-lg font-encode_sans_expanded
                                                                    text-[var(--color-letra-parrafo)]
                                                                    text-center font-[100] px-2
                                                                    md:px-3
                                                                    lg:text-sm
                                                                         xl:text-base"
                  >
                    {icon.nombre}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div
          className="flex justify-center items-center
                                            md:relative md:p-10 md:flex md:justify-start md:items-start md:gap-[30px]
                                            2xl:px-10"
        >
          <CompButton valores={valores} />
        </div>
      </div>

      <Projects />
      <Blog />
    </section>
  );
};
