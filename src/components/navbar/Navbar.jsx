export const Navbar = () => {
    const enlaces = [
        { titulo: "Inicio", link: "#" },
        { titulo: "Acerca de", link: "#acerca_de" },
        { titulo: "Proyectos", link: "#proyectos" },
        { titulo: "Blog", link: "#blog" }
    ];

    return (
        <nav className=" w-full h-8 flex
                        md:h-16 sticky top-0  z-20">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">

                    <div className="flex h-8 md:h-16 items-center justify-between">
                        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">

                            <div className="flex shrink-0 items-center">
                                <img className="h-8 w-8" src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500" alt="Logo de mi portafolio" />
                            </div>

                            <div className="hidden sm:ml-6 sm:block">
                                <div className="flex space-x-4">
                                    {
                                        enlaces.map((enlace, index) => {
                                            return (
                                                <a key={index} href={enlace.link}
                                                    className="text-base rounded-2xl font-medium text-[--color-letra-parrafo] font-encode_sans_expanded hover:bg-[--fondo-card] 
                                          px-6 
                                          py-2">
                                                    {enlace.titulo}
                                                </a>
                                            );
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </nav>
    );
}