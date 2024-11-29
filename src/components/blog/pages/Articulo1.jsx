

export const Articulo1 = () => {
    return (
        <div className="article">
            <h1>Otro artículo interesante</h1>
            <img 
                src="/assets/blog/articulo2.png" 
                alt="Imagen del artículo 2" 
                className="article-image"
                loading="lazy"
            />
            <p>
                Este es el contenido detallado del artículo 2. Aquí puedes escribir todo lo que
                desees sobre el tema que estás tratando. Si tienes varias secciones o subsecciones
                en el artículo, puedes organizarlas de la manera que prefieras.
            </p>
            <p>
                Por ejemplo, puedes usar párrafos, imágenes, enlaces o incluso videos. React es 
                una biblioteca muy potente que permite crear aplicaciones interactivas de manera 
                eficiente.
            </p>
            <p>
                ¡Esperamos que encuentres útil este artículo sobre un tema interesante!
            </p>
        </div>
    );
};

