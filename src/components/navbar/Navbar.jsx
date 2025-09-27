import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
export const Navbar = () => {
  const enlaces = [
    { titulo: "Inicio", link: "/#inicio" },
    { titulo: "Proyectos", link: "/#proyectos" },
    { titulo: "Blog", link: "/#blog" }
  ];

  return (
    <nav className="bg-[#A59BCD] w-full
                      sticky top-0 z-20 flex justify-center font-medium text-amber-50 ">
      <div className="flex justify-center sm:justify-between max-w-[1200px] w-full items-center max-[400px]:py-1 py-2 mx-5 sm:mx-10">
        <div className="">
          <Icon icon="pixelarticons:code" className="w-10 h-10 text-white" />
        </div>

        <div className=" gap-10 hidden sm:flex">
         
            {enlaces.map((enlace, index) => {
              return enlace.link.startsWith("/#") ? (
                <HashLink
                  key={index}
                  to={enlace.link}
                  className="text-[--color-letra-parrafo] hover:bg-[#9287bf54] px-4 py-2 rounded-2xl duration-300 ease-in-out"
                >
                  {enlace.titulo}
                </HashLink>
              ) : (
                <Link
                  key={index}
                  to={enlace.link}
                  className="text-[--color-letra-parrafo] hover:bg-[#9287bf54] px-4 py-2 rounded-2xl duration-300 ease-in-out"
                >
                  {enlace.titulo}
                </Link>
              );
            })}
      
        </div>
      </div>
    </nav>
  );
};
