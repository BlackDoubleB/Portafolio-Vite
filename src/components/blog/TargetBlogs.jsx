import { Link } from "react-router-dom";
import "./TargetBlogs.css";
import propTypes from "prop-types";

export const TargetBlogs = ({ title, imgSrc, link, descripcion }) => {
  return (
    <Link to={link} className="group max-lg:w-full">
      <div
        className="w-full aspect-video                   
                      lg:w-[300px] lg:h-[190px]
                      xl:w-[350px] xl:h-[240px]
                      rounded-3xl  border-[0.1px] border-neutral-700 relative overflow-hidden"
      >
        <img
          src={imgSrc}
          alt={title}
          loading="lazy"
          className="object-cover group-hover:scale-110 duration-300 ease-in-out absolute -top-2"
        />
        <div className="absolute z-10 bottom-0  bg-neutral-950/95 w-full h-5/12 overflow-hidden flex items-center">
          <div className="  overflow-hidden h-8/12 mx-5">
            <h2 className="font-encode_sans_expanded text-[var(--color-letra-subtitulo)] text-[1rem] bold font-bold">
              {title}
            </h2>

            <p
              className="font-encode_sans_expanded font-[100] text-[var(--color-letra-parrafo)]
                                text-base
                                md:tex-lg line-clamp-1 sm:line-clamp-2"
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
