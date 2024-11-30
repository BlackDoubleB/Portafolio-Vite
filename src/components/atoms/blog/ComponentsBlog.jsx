import PropTypes from "prop-types"

export const ComTitleBlog = ({tituloBlog}) =>
    {
        return(
            <h1 className="degradado 
                           text-2xl text-center
                           md:text-4xl p-5
                           lg:text-5xl
                           xl:pb-10">
                           {tituloBlog}
            </h1>
        );
    }

export const CombDt = ({combDt}) =>{
    return(
        <dt className="font-encode_sans_expanded text-[var(--color-letra-subtitulo)] text-[1rem] font-bold
                       px-0 py-5 ">
            {combDt}
        </dt>
    );
}

export const CombDd = ({children, className=null}) =>{
    return(
        <dd
            className={`font-encode_sans_expanded font-[100] text-[var(--color-letra-parrafo)]
                       pb-0 text-base px-1 text-justify
                       md:tex-lg md:px-5 ${className}`}
        >
            {children}
        </dd>
    );
}

ComTitleBlog.propTypes = {
    tituloBlog:PropTypes.string.isRequired
}

CombDt.propTypes = {
    combDt:PropTypes.string.isRequired
}

CombDd.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string
}


