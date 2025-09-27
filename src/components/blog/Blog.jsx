import { TitleH2 } from "../atoms/TitleH2";
import { TargetBlogs } from "./TargetBlogs";
import { blogData } from "../data/blogData";
export const Blog = () => {
    return(
        <section id="blog" className="scroll-mt-40">
            <div className="flex flex-col gap-10 w-full">
                <TitleH2 titleH2="Blog" />
                <div className="flex items-center flex-wrap justify-center gap-5">
                    {blogData.map((prop, index) => <TargetBlogs key={index} {...prop} />)}
                </div>
            </div>
        </section> 
    );
}