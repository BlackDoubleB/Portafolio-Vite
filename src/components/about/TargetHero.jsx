import { TargetAbout } from './TargetAbout';
import { iconSkill } from './IconSkills';
import {CompButton} from '../atoms/button';
export const TargetHero = () => {
    const valores = [
        {accion: 'Descargar CV', icono: '/assets/symbols/download.svg'},
        {accion: 'Proyectos', icono: '/assets/symbols/work.svg'}
    ];

    return (
        <section className='w-full min-h-screen 
        sm:flex sm:justify-center sm:items-center'>
            <div className='w-full flex flex-col
                            justify-center items-center
                            sm:w-[483.953px]
                            md:w-[730px] md:px-0 md:gap-[5px] md:flex md:flex-row
                            lg:w-[990px] lg:gap-[10px]
                            xl:w-[1200px] xl:gap-[20px] xl:justify-start xl:items-start
                            2xl:w-[1440px] 2xl:gap-[30px]' >

                <TargetAbout/>

                <section className=' relative flex flex-col w-full
                md:w-[475px]
                lg:w-[700px] 
                xl:w-[800px] 
                2xl:w-[1000px] '>

                    <div className='flex flex-col rounded-[30px]'>

                        <h1 className='degradado 
                        text-2xl text-center
                        md:text-4xl p-5 md:text-start
                        lg:px-10 lg:text-5xl
                        xl:text-6xl xl:py-10
                        2xl:text-7xl'>
                            DESARROLLADORA FULL-STACK
                        </h1>
                        <p className='font-encode_sans_expanded font-[100] text-[var(--color-letra-parrafo)]
                        text-base px-5 text-justify
                        md:tex-lg md:px-5
                        lg:px-10 lg:pb-10' >Apasionada por crear interfaces elegantes y funcionales.
                            Me encanta aprender nuevas tecnologías y colaborar en proyectos desafiantes.</p>

                    </div>

                    <div className=' rounded-[40px]
                    p-5
                    2xl:p-[40px]'>

                        <h3 className='font-encode_sans_expanded font-[900] degradado 
                        text-xl
                        sm:text-2xl
                        md:text-3xl 
                        lg:px-5
                        xl:text-4xl xl:pb-1
                        2xl:px-0 2xl:pb-10'>Tecnologias</h3>

                        <div className='flex justify-center flex-wrap
                        py-5
                        lg:flex lg:justify-center
                        xl:flex-nowrap xl:px-5 xl:justify-between
                        2xl:p-0'>
                            {
                                iconSkill.map((icon, index) => {
                                    return (
                                        <div className='flex flex-col items-center p-1 xl:p-0'  key={`${icon.pdf}-${index}`} >
                                            <div>
                                                <div className='pb-1'>
                                                    <img 
                                                        src={icon.ruta}
                                                        className="w-9 h-9
                                                        lg:w-12 lg:h-12
                                                        xl:w-16 xl:h-16"
                                                    />
                                                </div>

                                                <a
                                                    className=""
                                                    href={icon.pdf}
                                                    download
                                                >

                                                </a>
                                            </div>
                                            <p className="bg-black rounded-lg font-encode_sans_expanded
                                            text-[var(--color-letra-parrafo)]
                                            text-center font-[100] px-2
                                            md:px-0
                                            lg:text-sm lg:px-3
                                            xl:text-base">
                                                {icon.nombre}
                                            </p>
                                        </div>
                                    );
                                })
                            }
                        </div>
                    </div>

                    <div className='flex justify-center items-center
                    md:relative md:p-10 md:flex md:justify-start md:items-start md:gap-[30px]'>
                        <CompButton valores={valores} />
                    </div>
                </section>
            </div>
        </section>
    );
};