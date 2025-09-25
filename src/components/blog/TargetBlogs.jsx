import { Link } from "react-router-dom";
import "./TargetBlogs.css";
import propTypes from "prop-types";

export const TargetBlogs = ({ title, imgSrc, link, descripcion }) => {
  return (
    <Link to={link}>
      <div className="w-full aspect-3/2                     
                      lg:w-[300px] lg:h-[190px]
                      xl:w-[350px] xl:h-[240px]
                      rounded-3xl overflow-hidden border-[0.1px] border-neutral-700 relative ">
        <img src={imgSrc} alt={title} loading="lazy" className="object-cover" />
        <div className="absolute z-10 bottom-0  bg-neutral-700/95 w-full h-30 overflow-hidden">
          <div className="absolute bottom-5 mx-5 h-20 overflow-hidden">
            <h4 className="font-encode_sans_expanded text-[var(--color-letra-subtitulo)] text-[1rem] bold font-bold">
            {title}
          </h4>

          <p
            className="font-encode_sans_expanded font-[100] text-[var(--color-letra-parrafo)]
                                text-base
                                md:tex-lg line-clamp-2"
          >
            {descripcion}
          </p>
          </div>
        </div>
      </div>
    </Link>
  );
};
TargetBlogs.propTypes = {
  title: propTypes.string.isRequired,
  imgSrc: propTypes.string.isRequired,
  descripcion: propTypes.string.isRequired,
  link: propTypes.string.isRequired,
};
