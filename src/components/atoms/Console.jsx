import {  useRef, useState } from 'react';
import { Icon } from '@iconify/react';
import PropTypes from 'prop-types';


export const Console = ({ script, language }) => {
    const codeRef = useRef(null);
    const [icon, setIcon] = useState("uil:copy");
    const [copied, setCopied] = useState("Copiar");

   

    function handleClickCambio() {
        (setCopied("¡Copiado!"));
        (setIcon("simple-line-icons:check"));
    }
    function handleClick() {
        const textToCopy = codeRef.current.textContent.trim();
        navigator.clipboard.writeText(textToCopy);
        handleClickCambio()
    }

    setTimeout(() => {
        setCopied("Copiar");
        setIcon("uil:copy");
    }, 2500);

    return (
        <div className='w-full my-1'>
            <div className='flex justify-end bg-[var(--nav-terminal)] w-full rounded-t-xl px-4 py-2'>

                <div onClick={handleClick} className='flex items-center hover:cursor-pointer gap-2'>


                    <Icon icon={icon} className='w-6 h-6 ' />


                    <p className='font-bold' onClick={handleClickCambio}>{copied}</p>
                </div>

            </div>
            <div className='grid rounded-b-2xl overflow-hidden'>
                <pre className='p-5 bg-neutral-700 overflow-x-auto'>
                    <code ref={codeRef} className={`${language} block whitespace-pre`}>
                        {script}
                    </code>
                </pre>
            </div>
           

        </div>
    );
}

Console.propTypes = {
    script: PropTypes.string.isRequired,
    language:PropTypes.string.isRequired
}

