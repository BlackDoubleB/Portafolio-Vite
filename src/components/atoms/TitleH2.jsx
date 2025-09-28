import PropTypes from "prop-types";
export const TitleH2 = ({ titleH2, className = null }) => {
  return (
    <h2
      className={`font-encode_sans_expanded font-[900] degradado 
                                       text-xl
                                       sm:text-2xl 
                                       md:text-3xl
                                       ${className}
                                       xl:text-4xl pt-5 pb-1`}
    >
      {titleH2}
    </h2>
  );
};

TitleH2.propTypes = {
  titleH2: PropTypes.string.isRequired,
  className: PropTypes.string,
};
