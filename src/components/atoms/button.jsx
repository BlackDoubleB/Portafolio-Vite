import PropTypes from 'prop-types';

export const CompButton = ({valores}) => {
    return(
       <>
        {valores.map((valor, index) => {
            return(
                <button key={index} 
                  className='cursor-pointer text-[var(--color-letra-parrafo)] rounded-3xl flex items-center justify-center py-2 px-4 border-[0.1px] border-neutral-700 hover:bg-neutral-900 hover:scale-105   duration-300 ease-in-out '>
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
                icono: PropTypes.string.isRequired
            })
    ).isRequired, 
};