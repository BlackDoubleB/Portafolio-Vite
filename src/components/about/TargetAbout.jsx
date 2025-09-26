import { Icon } from "@iconify/react/dist/iconify.js";
import "./About.css";
import { CompButton } from "../atoms/button";
export const TargetAbout = () => {
  const valores = [
    { accion: "Descargar CV", icono: "/assets/symbols/download.svg" },
  ];
  return (
    <section
      className=" max-[400px]:p-5 border-[0.1px] border-neutral-700 max-[400px]:break-all 
                        p-2.5  rounded-2xl  top-10 sm:top-20 lg:top-30 
                       sm:sticky sm:p-10 shadow-lg shadow-neutral-600/50"
    >
      <div
        className=" 
                      max-[400px]:flex max-[400px]:items-center max-[400px]:flex-col 
                      grid grid-cols-[auto_1fr] max-[400px]:p-0 p-5 sm:p-0 sm:flex sm:flex-col gap-5 items-center sm:items-start md:items-center"
      >
        <h2
          className="max-[400px]:text-2xl col-span-2 col-start-1 font-bonher_royale text-[var(--color-letra-subtitulo)] 
                     text-4xl 2xl:text-5xl  text-center 2xl:text-nowrap"
        >
          Reyna Blacido
        </h2>

        <div className="min-[400px]:self-start mx-auto ">
          <img
            className="rounded-md object-cover aspect-2/2 max-w-40 w-full sm:h-52 sm:max-w-52"
            src="/assets/perfil.png"
          ></img>
        </div>

        <div className=" flex flex-col justify-center text-center items-center gap-[10px] text-base lg:text-lg">
         
          <div>
            <h4 className=" text-[var(--color-letra-subtitulo)] ">Telefono:</h4>
            <p
              className=" text-[var(--color-letra-parrafo)]
                                "
            >
              +51 910 045 824
            </p>
          </div>

          <div>
            <h4 className="text-[var(--color-letra-subtitulo)] ">Correo:</h4>
            <p
              className="text-[var(--color-letra-parrafo)]"
            >
              blancablacido@gmail.com
            </p>
          </div>

          <div>
            <h4 className=" text-[var(--color-letra-subtitulo)]">Localidad:</h4>
            <p
              className=" text-[var(--color-letra-parrafo)]"
            >
              Lima - Perú
            </p>
          </div>

          <div className="flex flex-col items-center">
            <h4 className=" text-[var(--color-letra-subtitulo)]">Contacto:</h4>
            <div className="flex gap-5 pt-1">
              <a
                href="https://github.com/BlackDoubleB"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon
                  icon="devicon:github"
                  className="w-6 h-6 text-black cursor-pointer bg-white rounded-full"
                />
              </a>

              <a
                href="https://www.linkedin.com/in/reyna-blacido-aparicio-a03558290"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon
                  icon="devicon:linkedin"
                  className="w-6 h-6 cursor-pointer bg-white rounded-sm"
                />
              </a>
            </div>
          </div>

          <div className="pt-5 mx-auto">
            <a href="/public/assets/cv_reynablacidoaparicio.pdf" download>
              <CompButton valores={valores} />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
