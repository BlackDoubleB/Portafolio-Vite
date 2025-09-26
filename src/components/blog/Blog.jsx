import { TitleH3 } from "../atoms/TitleH3";
import { TargetBlogs } from "./TargetBlogs";
import { blogData } from "../data/blogData";
export const Blog = () => {
    return(
        <section id="blog" className="scroll-mt-40">
            <div className="flex flex-col gap-10 w-full">
                <TitleH3 titleH3="Blog" />
                <div className="flex items-center flex-wrap justify-center gap-5">
                    {blogData.map((prop, index) => <TargetBlogs key={index} {...prop} />)}
                </div>
            </div>
        </section> 
    );
}