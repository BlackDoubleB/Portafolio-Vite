import { TitleH3} from "../../../atoms/TitleH3";
import { Console } from '../../../atoms/Console';
import { Paragraph } from "../../../atoms/Paragraph";
import { ComTitleBlog,CombDt,CombDd } from '../../../atoms/blog/ComponentsBlog'
export const FuncionesFlecha = () => {

    return (
        <section className="w-full min-h-screen 
                            sm:flex sm:justify-center sm:items-center
                            py-5 
                            md:my-10">
            <div className="min-h-screen w-full flex flex-col 
                            justify-center items-center px-5
                            sm:w-[483.953px] sm:px-0
                            md:w-[730px] md:px-0 md:gap-[5px] md:flex md:flex-row md:items-start
                            lg:w-[990px] lg:gap-[10px]
                            xl:w-[1200px] xl:gap-[20px] 
                            2xl:w-[1440px] 2xl:gap-[30px] 2xl:flex 2xl:justify-center 2xl:items-start">

                <div className="w-full 2xl:px-10">

                <ComTitleBlog tituloBlog={"FUNCIONES FLECHA"}/>

                    <Paragraph paragraph={`Son una forma compacta de escribir funciones, introducida en ES6. Su sintaxis es más corta y tienen diferencias importantes respecto a las funciones tradicionales, especialmente en el manejo de this.`}/>
                    <TitleH3 titleH3={`Tipos principales de funciones flecha`} className="text-cyan-50" />
                    <dl>
                        <CombDt combDt={`1. Función Flecha con un Solo Parámetro y una Sola Línea de Código`}/>
                        <CombDd combDd={`Si la función tiene un solo parámetro y realiza una operación de una sola línea, puedes omitir tanto los paréntesis alrededor del parámetro como las llaves {}. El valor de esta operación será retornado automáticamente.`} combConsole={<Console script={`const doble = x => x * 2; // Retorna x * 2
console.log(doble(4));    // Imprime: 8`}/>}/>


                        <CombDt combDt={`2. Función Flecha con Múltiples Parámetros`}/>
                        <CombDd combDd={`Si la función tiene más de un parámetro, debes usar paréntesis alrededor de los parámetros. También puedes omitir las llaves si la función tiene una sola línea, y el resultado se retornará automáticamente.`} combConsole={<Console script={`const sumar = (a, b) => a + b;
console.log(sumar(3, 5)); // Imprime: 8`}/>}/>

                        <CombDt combDt={`3. Función Flecha con Cuerpo en Bloque`}/>
                        <CombDd combDd={`Cuando necesitas ejecutar varias líneas de código, debes usar llaves {} para definir un cuerpo en bloque y añadir return explícito si quieres retornar un valor. Las funciones flecha con cuerpo en bloque no retornan automáticamente el último valor por lo que si quieres que retorne debes escribirlo explicitamente con return. Si omites return en una función flecha con cuerpo en bloque, la función devolverá undefined, ya que no se está devolviendo ningún valor explícito.`} combConsole={<Console script={`const calcularAreaRectangulo = (base, altura) => {
  const area = base * altura;
  return area; // Retorno explícito
};

console.log(calcularAreaRectangulo(4, 5)); // Imprime: 2`}/>}/>  


                        <CombDt combDt={`4. Función Flecha sin Parámetros`}/>
                        <CombDd combDd={`Si no se necesitan parámetros, se dejan los paréntesis vacíos () antes de =>.`} combConsole={<Console script={`const saludo = () => "¡Hola, mundo!";
console.log(saludo()); // Imprime: ¡Hola, mundo!`}/>}/>

                        <CombDt combDt={`5. Función Flecha como Retorno de Otra Función`}/>
                        <CombDd combDd={`Las funciones flecha son especialmente útiles para funciones que retornan otras funciones. Aquí se usa una función flecha dentro de otra:`} combConsole={<Console script={`const crearMultiplicador = factor => numero => numero * factor;

const doble = crearMultiplicador(2);
console.log(doble(5)); // Imprime: 10`}/>}/>

                        <CombDd combDd={`En este caso, crearMultiplicador retorna una función que multiplica el número por el factor dado.`}/>


                        <CombDt combDt={`6. Función Flecha Inmediata (IIFE - Immediately Invoked Function Expression)`}/>
                        <CombDd combDd={`También puedes usar funciones flecha como IIFE. Estas funciones se ejecutan inmediatamente al definirse.`} combConsole={<Console script={`(
 () => console.log("Ejecutando función inmediatamente")
)();`}/>}/>
                    </dl>

                    <TitleH3 titleH3={`Ventajas de las Funciones Flecha`} />
                    <Paragraph paragraph={<>
                                        - Sintaxis más corta y fácil de leer. <br />
                                        - No tienen su propio this: Capturan el valor de this del contexto en el que fueron creadas, lo cual es útil en ciertos casos de programación orientada a objetos. <br />
                                        - Son versátiles y se adaptan bien a situaciones donde necesitas escribir funciones concisas, especialmente en casos como map, filter, reduce, y otras funciones de orden superior en JavaScript.
                                        </>}/>
                

                </div>




            </div>
        </section>
    );
};
