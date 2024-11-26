import { getProjectsData} from "../data/projectsData.jsx"
import { TargetProjects } from "./TargetProjects.jsx"
import { Comptitle } from '../atoms/title.jsx';

export const Projects = () => {
    return(
        <section
        id="portafolio"
        className="flex w-full justify-center items-center h-auto min-h-screen
                   2xl:w-[1000px]">
    
        
        <div className="flex flex-col w-auto p-5 
        2xl:p-10">
            <Comptitle title="Proyectos" />
            <div className="portfolio__elements flex flex-wrap 
                              justify-center
                              gap-y-5
                              lg:gap-x-5 lg:gap-y-5
                              xl:gap-x-5 xl:gap-y-5
                              2xl:gap-x-10 2xl:gap-y-10">
                {getProjectsData.map((prop, index) => <TargetProjects key={index} {...prop} />)}
            </div>
        </div>
    </section> 
    );
};