import PropTypes from "prop-types";
export const Paragraph = ({paragraph}) =>{
    return(
        <p className='font-encode_sans_expanded font-[100] text-[var(--color-letra-parrafo)]
                      text-base text-justify
                      md:tex-lg'>
                      {paragraph}
        </p>
    );
}
Paragraph.propTypes = {
    paragraph: PropTypes.string.isRequired
}