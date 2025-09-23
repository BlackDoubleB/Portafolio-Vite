import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
export const Navbar = () => {
  const enlaces = [
    { titulo: "Inicio", link: "/#inicio" },
    { titulo: "Proyectos", link: "/#proyectos" },
    { titulo: "Blog", link: "/#blog" },
    { titulo: "Acerca de", link: "/#acerca_de" },
  ];

  return (
    <nav
      className="bg-[#A59BCD] w-full h-8 flex
                        md:h-16 sticky top-0  z-20 "
    >
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-8 md:h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <Icon
                icon="pixelarticons:code"
                className="w-10 h-10 text-white"
              />
            </div>

            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {enlaces.map((enlace, index) => {
                  return enlace.link.startsWith("/#") ? (
                    <HashLink
                      key={index}
                      to={enlace.link}
                      className="text-base rounded-2xl font-medium text-[--color-letra-parrafo] hover:bg-[#9287bf] px-6 py-2"
                    >
                      {enlace.titulo}
                    </HashLink>
                  ) : (
                    <Link
                      key={index}
                      to={enlace.link}
                      className="text-base rounded-2xl font-medium text-[--color-letra-parrafo] hover:bg-[#9287bf] px-6 py-2"
                    >
                      {enlace.titulo}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
