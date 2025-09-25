import { getProjectsData} from "../data/projectsData.jsx"
import { TargetProjects } from "./TargetProjects.jsx"
import { TitleH3 } from '../atoms/TitleH3';

export const Projects = () => {
    return(
    <section id="proyectos" className="scroll-mt-40">
        <div className="flex flex-col gap-10 w-full">
            <TitleH3 titleH3="Proyectos" />
            <div className="flex  items-center flex-wrap justify-center gap-5 ">
                {getProjectsData.map((prop, index) => <TargetProjects key={index} {...prop} />)}
            </div>
        </div>
    </section> 
    );
};