import { TargetAbout } from './TargetAbout';
import { TargetSkills } from './TargetSkills';
export const Hero = () => {


    return (
        <section id='inicio' className='w-full min-h-screen 
                            sm:flex sm:justify-center sm:items-center scroll-mt-16'>
            <div className='min-h-screen w-full flex flex-col
                            justify-center items-center
                            sm:w-[483.953px] 
                            md:w-[730px] md:px-0 md:gap-[5px] md:flex md:flex-row md:items-start
                            lg:w-[990px] lg:gap-[10px]
                            xl:w-[1200px] xl:gap-[20px] 
                            2xl:w-[1440px] 2xl:gap-[30px] 2xl:flex 2xl:justify-center 2xl:items-start' >

                <TargetAbout/>
                <TargetSkills/>
               
            </div>
        </section>
    );
};