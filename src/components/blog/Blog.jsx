import { TitleH3 } from "../atoms/TitleH3";
import { TargetBlogs } from "./TargetBlogs";
import { blogData } from "../data/blogData";
export const Blog = () => {
    return(
        <section id="portafolio" className="flex w-full justify-center items-center h-auto min-h-screen
                                            md:flex md:justify-start md:items-start
                                            2xl:w-[1000px]">
            <div className="flex flex-col w-auto p-5 
                            2xl:p-10">
                <TitleH3 titleH3="Blog" />
                <div className="flex flex-wrap 
                                justify-center
                                gap-y-5
                                lg:gap-x-5 lg:gap-y-5
                                xl:gap-x-5 xl:gap-y-5
                                2xl:gap-x-10 2xl:gap-y-10">
                    {blogData.map((prop, index) => <TargetBlogs key={index} {...prop} />)}
                </div>
            </div>
        </section> 
    );
}