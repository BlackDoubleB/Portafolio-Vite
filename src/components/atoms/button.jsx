import PropTypes from 'prop-types';

export const CompButton = ({valores}) => {
    return(
       <>
        {valores.map((valor, index) => {
            return(
                <button key={index} 
                className='bg-[var(--fondo-pagina)] 
                flex items-center gap-3 
                border border-[--borde] text-[--color-letra-parrafo] rounded-[40px] font-encode_sans_expanded font-[100] transition-all ease-in-out hover:bg-[--fondo-card] active:scale-[1.1]
                text-base px-3 py-1.5
                sm:text-sm sm:py-2.5
                2xl:tex-lg 2xl:px-[20px]'>
                    {valor.accion}
                    <img src={valor.icono} className='w-5 h-5'></img>
                </button>
            );
        })}
       </>    
    );
}

CompButton.propTypes = {
    valores: PropTypes.arrayOf(
        PropTypes.shape({
            accion: PropTypes.string.isRequired,
            icono: PropTypes.string.isRequired,  
        })
    ).isRequired, 
};