export const Navbar = () => {
    return (

        <nav className="w-full h-8 mt-4 flex sticky top-0 bg-[#00000096]  
        md:fixed md:h-16">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">

                <div className="flex h-8 md:h-16 items-center justify-between">
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">

                        <div className="flex shrink-0  items-center">
                            <img className="h-8 w-8" src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" />
                        </div>

                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">

                                <a href="#" className="text-base rounded-2xl px-6 py-2 font-medium text-[--color-letra-parrafo] font-encode_sans_expanded hover:bg-[--fondo-card]">Inicio</a>
                                <a href="#" className="text-base rounded-2xl px-6 py-2 font-medium text-[--color-letra-parrafo] font-encode_sans_expanded hover:bg-[--fondo-card]">Acerca de</a>
                                <a href="#" className="text-base rounded-2xl px-6 py-2 font-medium text-[--color-letra-parrafo] font-encode_sans_expanded hover:bg-[--fondo-card]">Proyectos</a>
                                <a href="#" className="text-base rounded-2xl px-6 py-2 font-medium text-[--color-letra-parrafo] font-encode_sans_expanded hover:bg-[--fondo-card]">Blog</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>

    );
}