import { useParams } from "react-router-dom";

export const Article = () => {
    const { articleId } = useParams();

    // Datos de ejemplo
    const articles = {
        "tipos-de-variables": {
            title: "VAR-CONST-LET",
            subtitle: "Alcance (Scope)",
            content:`1- var:
Tiene alcance de función. Esto significa que si declaras una variable con var dentro de una función, su alcance es dentro de esa función, pero si se declara fuera de cualquier función, tendrá alcance global.
No respetan el alcance de bloque, sino que tienen alcance de función o global, lo que significa que si declaras una variable con var dentro de un bloque como if o for, la variable será accesible fuera del bloque si está dentro de una función o en el contexto global.

2- let y const:
Ambas tienen alcance de bloque. Esto significa que si declaras una variable dentro de un bloque (por ejemplo, dentro de un if o un for), la variable solo es accesible dentro de ese bloque.

----------------------
Reasignación
----------------------
1- var:
Puedes reasignar el valor de una variable declarada con var.

var x = 10;
x = 20;  // Es válido
let:

2-Let
Puedes reasignar el valor de una variable declarada con let.

let x = 10;
x = 20;  // Es válido

3- const:
No puedes reasignar una variable declarada con const una vez que se le ha asignado un valor. Esto significa que el valor de la variable es constante.

const x = 10;
x = 20;  // Error: Assignment to constant variable

Sin embargo, si el valor asignado a la variable const es un objeto o un arreglo, puedes modificar sus propiedades o elementos, pero no puedes reasignar el objeto o arreglo completo.

const obj = { name: "John" };
obj.name = "Doe";  // Esto es válido
obj = {}; // Error: Assignment to constant variable

----------------------
Redefinición(Redeclarar la misma variable) en el mismo contexto
----------------------
var:
Puedes redefinir una variable declarada con var dentro del mismo contexto (función o global).

var x = 10;
var x = 20;  // Es válido
console.log(x);  // 20

let:
No puedes redefinir una variable declarada con let dentro del mismo bloque o función. Si lo haces, obtendrás un SyntaxError.

let x = 10;
let x = 20;  // Error: Identifier 'x' has already been declared
const:

Const: 
No puedes redefinir una variable declarada con const. Esto es similar a let, y te arrojará un SyntaxError si intentas redefinirla.

const x = 10;
const x = 20;  // Error: Identifier 'x' has already been declared

`,
        },
        "otro-articulo": {
            title: "Otro artículo",
            content: "Contenido de otro artículo interesante...",
        },
    };

    const article = articles[articleId];

    if (!article) {
        return <h2>Artículo no encontrado</h2>;
    }

    return (
        <div className="article">
            <h1 className="degradado 
                                        text-2xl text-center
                                        md:text-4xl p-5 md:text-start
                                        lg:px-10
                                        xl:pb-10" >{article.title}</h1>
            <h2 className="text-cyan-50">{article.subtitle}</h2>
            <p>{article.content}</p>
        </div>
    );
};
