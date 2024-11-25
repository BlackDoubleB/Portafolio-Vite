import './About.css'
export const TargetAbout = () => {
    return (
        <section className='bg-[var(--fondo-pagina)]
        md:w-[250px] py-5 md:rounded-[40px] md:border md:border-[--borde]
        lg:w-[280px]
        xl:w-[380px] 
        2xl:w-[410px] 2xl:h-[700px]'>

                    <div className='m-5
                                    gap-5
                                    md:gap-0
                                    xs:flex items-center
                                    md:block 
                                    xl:m-10'>
                        <h2 className='font-bonher_royale text-[var(--color-letra-subtitulo)] 
                        hidden text-center text-3xl
                        sm:text-3xl
                        md:text-4xl md:pb-5 md:block
                        2xl:text-[2.875rem] 2xl:pb-10'>Reyna Blacido Aparicio</h2>

                        <div>
                             <h2 className='font-bonher_royale text-[var(--color-letra-subtitulo)]
                                            text-center text-3xl pb-5
                                            md:hidden' >Reyna Blacido Aparicio</h2>
                            <img className='rounded-[40px]
                                            sm:w-[250px] sm:h-[250px]
                                            md:w-auto md:h-auto
                                            '  src='/assets/perfil.png'></img>
                        </div>
                      
                       
                        <div className='flex flex-col justify-center gap-[10px]
                        '>
                            <div className='pt-5'>
                                <h4 className='font-encode_sans_expanded font-[100] text-[var(--color-letra-subtitulo)] text-[1rem]'>Telefono:</h4>
                                <p className='font-encode_sans_expanded font-[100] text-[var(--color-letra-parrafo)]
                                text-base
                                md:tex-lg'>+51 910 045 824</p>
                            </div>

                            <div>
                                <h4 className='font-encode_sans_expanded font-[100] text-[var(--color-letra-subtitulo)] text-[1rem]'>Correo:</h4>
                                <p className='font-encode_sans_expanded font-[100] text-[var(--color-letra-parrafo)]
                                text-base
                                md:tex-lg'>blancablacido@gmail.com</p>
                            </div>

                            <div>
                                <h4 className='font-encode_sans_expanded font-[100] text-[var(--color-letra-subtitulo)] text-[1rem]'>Localidad:</h4>
                                <p className='font-encode_sans_expanded font-[100] text-[var(--color-letra-parrafo)]
                                text-base
                                md:tex-lg'>Lima - Perú</p>
                            </div>

                        </div>

                        <div></div>
                    </div>


        </section>
    );
}