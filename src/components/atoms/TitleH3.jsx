import PropTypes from "prop-types"
export const TitleH3 = ({titleH3, className=null}) =>{
    return(
        <h3 className={`font-encode_sans_expanded font-[900] degradado 
                                       text-xl pb-5 pt-5
                                       sm:text-2xl 
                                       md:text-3xl
                                       ${className}
                                       xl:text-4xl
                                       2xl:pt-10`}>
                                       {titleH3}
        </h3>
    );
}

TitleH3.propTypes = {
    titleH3:PropTypes.string.isRequired,
    className:PropTypes.string
}
