import { skillsGroups } from "./IconSkills";
import { TitleH2 } from "../atoms/TitleH2";
import { TargetAbout } from "./TargetAbout";
import { Projects } from "../proyects/Projects";
// import { Blog } from "../blog/Blog";
export const TargetSkills = () => {
 
  return (
    <section className="relative flex flex-col gap-5 sm:gap-10 xl:gap-12 w-full pt-12 lg:pt-20">
        <div className=" flex flex-col gap-5 lg:gap-10 2xl:gap-14">
          <h1 className="degradado text-center sm:text-start max-[400px]:text-xl text-3xl  lg:text-5xl 2xl:text-6xl animate-slide-up">
            DESARROLLADORA <br className=""/> FULL-STACK
          </h1>
          <div className="sm:hidden animate-slide-up delay-100">
            <TargetAbout />
          </div>
          <p className=" font-encode_sans_expanded font-thin text-[var(--color-letra-parrafo)] text-base lg:text-lg animate-slide-up delay-200">
            Especializada en desarrollar soluciones full-stack escalables con arquitecturas modernas. 
            Enfocada en escribir código limpio, mantenible y optimizado siguiendo principios SOLID. 
            Apasionada por la ingeniería de software, testing  y metodologías ágiles.
          </p>
        </div>

        <div className="flex flex-col gap-6 animate-slide-up delay-300">
          <TitleH2 titleH2={"Habilidades"} />
          <div className="flex flex-col gap-8">
            {skillsGroups.map((grupo, groupIndex) => {
              const delayClass = [
                'delay-100',
                'delay-200', 
                'delay-300',
                'delay-400',
                'delay-500'
              ][groupIndex] || 'delay-500';
              
              return (
              <div key={`group-${groupIndex}`} className={`flex flex-col gap-4 animate-scale-in ${delayClass}`}>
                <div className="flex items-center">
                  <div 
                    className="h-9 px-6 flex items-center relative"
                    style={{
                      background: "linear-gradient(to right, #f7e6ec, #c1b7e2, #9a8fc4)",
                      clipPath: "polygon(0% 0%, calc(100% - 15px) 0%, 100% 50%, calc(100% - 15px) 100%, 0% 100%, 15px 50%)"
                    }}
                  >
                    <h3 className="text-base sm:text-lg md:text-lg font-encode_sans_expanded font-bold text-slate-900">
                      {grupo.titulo}
                    </h3>
                  </div>
                </div>
                <div className="grid grid-cols-6 sm:grid-cols-7 md:grid-cols-8 lg:grid-cols-9 xl:grid-cols-10 gap-1">
                  {grupo.iconos.map((icon, index) => {
                    return (
                      <div
                        className="flex flex-col items-center gap-1 hover:scale-125 transition-transform duration-300 cursor-pointer group"
                        key={`${icon.nombre}-${index}`}
                      >
                        <img
                          src={icon.ruta}
                          alt={icon.nombre}
                          className="w-6 h-6
                                     sm:w-7 sm:h-7
                                     md:w-8 md:h-8
                                     lg:w-9 lg:h-9"
                        />
                        <p className="text-xs text-center font-encode_sans_expanded leading-tight text-[var(--color-letra-parrafo)] group-hover:text-[var(--color-letra-subtitulo)] transition-colors">
                          {icon.nombre}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
            })}
          </div>
        </div>
        
       <Projects />
      {/* <Blog />  */}
    </section>
  );
};
