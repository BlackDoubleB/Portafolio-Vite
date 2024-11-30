import PropTypes from "prop-types";
export const Paragraph = ({children}) =>{
    return(
        <p className='font-encode_sans_expanded font-[100] text-[var(--color-letra-parrafo)]
                      text-base text-justify
                      md:tex-lg'>
                      {children}
        </p>
    );
}
Paragraph.propTypes = {
    children: PropTypes.string.isRequired
}