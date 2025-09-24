import { Icon } from "@iconify/react/dist/iconify.js";
import "./About.css";
export const TargetAbout = () => {
  return (
    <section className=" max-[400px]:p-5 max-[400px]:border max-[400px]:border-neutral-700 break-all  sm:sticky top-30 sm:p-10 rounded-2xl sm:border-red-50 border h-fit section-about bg-[var(--fondo-pagina)] ">
      <div className="max-[400px]:flex max-[400px]:items-center max-[400px]:flex-col grid grid-cols-[auto_1fr] sm:flex sm:flex-col gap-5 items-center sm:items-start">
        <h2
          className=" col-span-2 col-start-1 font-bonher_royale text-[var(--color-letra-subtitulo)] 
                     text-3xl 2xl:text-5xl"
        >
          Reyna Blacido Aparicio
        </h2>

        <div className="min-[400px]:self-start">
          <img
            className="rounded-3xl object-cover aspect-3/3 max-w-40 w-full sm:h-52 sm:w-52"
            src="/assets/perfil.png"
          ></img>
        </div>

        <div className=" flex flex-col justify-center gap-[10px] text-xs sm:text-base">
          <div className="">
            <h4 className="font-encode_sans_expanded text-[var(--color-letra-subtitulo)] ">
              Telefono:
            </h4>
            <p
              className="font-encode_sans_expanded text-[var(--color-letra-parrafo)]
                                "
            >
              +51 910 045 824
            </p>
          </div>

          <div>
            <h4 className="font-encode_sans_expanded text-[var(--color-letra-subtitulo)] ">
              Correo:
            </h4>
            <p
              className="font-encode_sans_expanded text-[var(--color-letra-parrafo)]
                                "
            >
              blancablacido@gmail.com
            </p>
          </div>

          <div>
            <h4 className="font-encode_sans_expanded text-[var(--color-letra-subtitulo)]">
              Localidad:
            </h4>
            <p
              className="font-encode_sans_expanded text-[var(--color-letra-parrafo)]
                                "
            >
              Lima - Perú
            </p>
          </div>
          <div className="flex flex-col">
            <h4 className="font-encode_sans_expanded text-[var(--color-letra-subtitulo)]">
              Contacto:
            </h4>
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
                  className="w-6 h-6 text-blue-700 cursor-pointer bg-white rounded-sm"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
