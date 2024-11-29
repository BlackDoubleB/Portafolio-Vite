import { Link } from "react-router-dom";
import './TargetBlogs.css';
import propTypes from 'prop-types';

export const TargetBlogs = ({ title, imgSrc, link,descripcion }) => {
    return (
        <div className=" card__blog
                        lg:w-[300px] lg:h-[190px]
                        xl:w-[350px] xl:h-[240px]
                        2xl:w-[440px] 2xl:h-72
                        relative
                        ">
            <img
                src={imgSrc}
                alt={title}
                loading="lazy"
                className="absolute"
                
            />

            <div className="absolute z-20 bg-[#00000086] w-full bottom-4 h-[37%] container-text overflow-y-scroll px-4 pt-4">
                    
                        <Link to={link}>
                            <h4 className="font-encode_sans_expanded text-[var(--color-letra-subtitulo)] text-[1rem] bold font-bold">{title}</h4>
                            <p className=" font-encode_sans_expanded font-[100] text-[var(--color-letra-parrafo)]
                                text-base
                                md:tex-lg">
                                {descripcion}
                            </p>
                        </Link>
                   
                  
            </div>
           <div className="absolute bottom-0 bg-[#00000086] h-4 w-full"></div>
           
        </div>
    );
}
TargetBlogs.propTypes = {
    title: propTypes.string.isRequired,
    imgSrc: propTypes.string.isRequired,
    descripcion: propTypes.string.isRequired,
    link: propTypes.string.isRequired
};

