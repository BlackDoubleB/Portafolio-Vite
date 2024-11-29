import { useEffect, useRef, useState } from 'react';
import Prism from 'prismjs';
import 'prism-themes/themes/prism-dracula.css';
import { Icon } from '@iconify/react';
import PropTypes from 'prop-types';

export const Console = ({ script }) => {
    const codeRef = useRef(null);
    const [icon, setIcon] = useState("uil:copy");
    const [copied, setCopied] = useState("Copiar");

    useEffect(() => {
        Prism.highlightAll();
    }, []);

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
        <div className='container-console py-2'>
            <div className='flex justify-end bg-[var(--nav-terminal)] w-full rounded-t-xl px-4 py-2'>

                <div onClick={handleClick} className='flex items-center hover:cursor-pointer gap-2'>


                    <Icon icon={icon} className='w-6 h-6 ' />


                    <p className='font-bold' onClick={handleClickCambio}>{copied}</p>
                </div>

            </div>
            <pre>
                <code ref={codeRef} className="code language-javascript">
                    {script}
                </code>
            </pre>
        </div>
    );
}

Console.propTypes = {
    script: PropTypes.string.isRequired
}