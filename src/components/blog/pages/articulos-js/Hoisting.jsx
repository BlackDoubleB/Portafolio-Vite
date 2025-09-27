import {Paragraph} from '../../../atoms/Paragraph';
import { Console } from '../../../atoms/Console';
import { TitleH3 } from '../../../atoms/TitleH3';
import { ComTitleBlog,CombDt,CombDd } from '../../../atoms/blog/ComponentsBlog'
import { ScrollTops } from '../../../scrollTops';
export const Hoisting = () => {
  ScrollTops();
    return (
        <section>         
                <div>

                <ComTitleBlog tituloBlog={"HOISTING"}/>
                    <TitleH3 titleH3={"VAR"}/>
                    <dl>
                        <CombDt combDt={`Hoisting con VAR en Condicionales y Bloques:`}/>
                        <CombDd className="!px-0">
                        Las variables declaradas con var se elevan al inicio de la función o del contexto global en el que están declaradas, sin importar si están dentro de un bloque condicional (if, for, etc.). Esto significa que, aunque declares una variable con var dentro de un if o for, la variable se elevará y se declarará al inicio de la función o del contexto global, no al inicio del bloque. 
                        <br/>
                        <br/>
                        Cuando declaras variables con var dentro de una función, el hoisting las eleva al inicio de la función, pero solo dentro del contexto de esa función. Es decir, las declaraciones de las variables se mueven a la parte superior de la función, pero el valor de la variable no se asigna hasta que se alcanza la línea de código correspondiente.
                        <Console language='language-javascript' script={`--Si pones:
function ejemplo() {
console.log(mensaje); // undefined, debido al hoisting
var mensaje = "Hola desde la función";
console.log(mensaje); // "Hola desde la función"
}

ejemplo();

--JS lo interpretara:
function ejemplo() {
var mensaje; // Declaración elevada al principio, valor inicial "undefined"

console.log(mensaje); // undefined, porque "mensaje" está declarada pero no asignada
mensaje = "Hola desde la función"; // Asignación en la línea original
console.log(mensaje); // "Hola desde la función"
}
ejemplo();
`}/>
                    Cuando declaras variables con <code>var</code> dentro de una función, el hoisting las eleva al inicio de la función, pero solo dentro del contexto de esa función.
                       </CombDd >
                    </dl>

                    <TitleH3 titleH3={"LET Y CONST"}/>
                    <dl>
                        <CombDd className="!px-0">
                        En ECMAScript 2015 (ES6), las variables declaradas con let y const también son elevadas (hoisted), pero a diferencia de var, no se inicializan automáticamente con undefined. En su lugar, se encuentran en un estado especial conocido como `zona muerta temporal` (TDZ, por sus siglas en inglés: Temporal Dead Zone).
                        <br/><br/>
                        Esto significa que, aunque las declaraciones de las variables let y const se muevan al principio de su contexto (como ocurre con var), no se puede acceder a ellas hasta que el flujo de ejecución llegue a la línea donde están declaradas. Si intentas acceder a una de estas variables antes de su declaración, el motor de JavaScript lanzará un error de tipo ReferenceError.
                        <br/><br/>
                        Tener en cuenta que el comportamiento de hoisting con let y const no ha cambiado desde su introducción en ES6 (2015), y sigue siendo el mismo en las versiones actuales de JavaScript, incluyendo 2024. 
                        <br/><br/>
                        <strong>Ejemplo:</strong>
                        <Console language='language-javascript' script={`console.log(myVar); // ReferenceError: Cannot access 'myVar' before initialization
let myVar = "Hola";
`}/>
                        </CombDd>

                        <CombDt combDt={`CURIOSIDAD :`}/>
                        <CombDd className="!px-0">
                        Si intentas usar typeof en una variable let o const antes de que se haya inicializado (cuando esté en la TDZ), JavaScript devuelve &quot;undefined&quot;, sin lanzar un ReferenceError.
                        Una vez que la variable ha sido inicializada, puedes usar typeof normalmente, y obtendrás el tipo de la variable, como &quot;string&quot;, &quot;number&quot;, etc., dependiendo del tipo de valor que haya sido asignado.
                        </CombDd>
                    </dl>

                    <TitleH3 titleH3={"HOISTING CON FUNCIONES"}/>
                    <Paragraph>
                     En el caso de las funciones, solo se da el hoisting en declaraciones de función, pero no las expresiones de la función(variables que contienen funcion).
                     <br/><br/>
                     <strong>Ejemplo:</strong>
                     <Console language='language-javascript' script={`/* Declaración de función */

foo(); // "bar"

function foo() {
  console.log("bar");
}

/* Expresión de función */

baz(); // TypeError: baz no es una función

var baz = function () {
  console.log("bar2");
};`}/>
                    </Paragraph>

                </div>        
        </section>
    );
};
