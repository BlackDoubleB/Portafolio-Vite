import { Comptitle } from "../../../atoms/title";
import { Console } from '../../../atoms/Console';
export const TiposVariables = () => {

    

    return (
        <section className="w-full min-h-screen 
                            sm:flex sm:justify-center sm:items-center">
            <div className="min-h-screen w-full flex flex-col 
                            justify-center items-center px-5
                            sm:w-[483.953px] sm:px-0
                            md:w-[730px] md:px-0 md:gap-[5px] md:flex md:flex-row md:items-start
                            lg:w-[990px] lg:gap-[10px]
                            xl:w-[1200px] xl:gap-[20px] 
                            2xl:w-[1440px] 2xl:gap-[30px] 2xl:flex 2xl:justify-center 2xl:items-start 2xl:pt-24">

                <div className="w-full 2xl:px-10">

                    <h1 className="degradado 
                                   text-2xl text-center
                                   md:text-4xl p-5
                                   lg:text-5xl
                                   xl:pb-10">
                                   VAR-CONST-LET
                    </h1>

                    <Comptitle title={"Alcance(Scope)"} className="text-cyan-50" />

                    <dl>
                        <dt className="font-encode_sans_expanded text-[var(--color-letra-subtitulo)] text-[1rem] font-bold 2xl:pb-5">1- VAR :</dt>
                        <dd className="font-encode_sans_expanded font-[100] text-[var(--color-letra-parrafo)]
                                        text-base px-5 text-justify
                                        md:tex-lg md:px-5
                                        lg:px-0 lg:pb-10">
                            Tiene alcance de función. Esto significa que si declaras una variable con var dentro de una función, su alcance es dentro de esa función, pero si se declara fuera de cualquier función, tendrá alcance global.
                            No respetan el alcance de bloque, sino que tienen alcance de función o global, lo que significa que si declaras una variable con var dentro de un bloque como if o for, la variable será accesible fuera del bloque si está dentro de una función o en el contexto global.
                        </dd>

                        <dt className="font-encode_sans_expanded text-[var(--color-letra-subtitulo)] text-[1rem] font-bold 2xl:pb-5">2- LET Y CONST :</dt>
                        <dd className="font-encode_sans_expanded font-[100] text-[var(--color-letra-parrafo)]
                                        text-base px-5 text-justify
                                        md:tex-lg md:px-5
                                        lg:px-0 lg:pb-10">
                            Ambas tienen alcance de bloque. Esto significa que si declaras una variable dentro de un bloque (por ejemplo, dentro de un if o un for), la variable solo es accesible dentro de ese bloque.
                        </dd>
                    </dl>

                    <Comptitle title={"Reasignación"} className="text-cyan-50" />
                    <dl>
                        <dt className="font-encode_sans_expanded text-[var(--color-letra-subtitulo)] text-[1rem] font-bold 2xl:pb-5">1- VAR :</dt>
                        <dd className="font-encode_sans_expanded font-[100] text-[var(--color-letra-parrafo)]
                                        text-base px-5 text-justify
                                        md:tex-lg md:px-5
                                        lg:px-0 lg:pb-10">
                            Puedes reasignar el valor de una variable declarada con var.
                            <Console 
script={`var x = 10;
x = 20;  // Es válido
let:`}/>
                        </dd>

                        <dt className="font-encode_sans_expanded text-[var(--color-letra-subtitulo)] text-[1rem] font-bold 2xl:pb-5">2- LET :</dt>
                        <dd className="font-encode_sans_expanded font-[100] text-[var(--color-letra-parrafo)]
                                        text-base px-5 text-justify
                                        md:tex-lg md:px-5
                                        lg:px-0 lg:pb-10">
                            Puedes reasignar el valor de una variable declarada con let.
                            <Console 
script={`let x = 10;
x = 20;  // Es válido`}/>
                        </dd>

                        <dt className="font-encode_sans_expanded text-[var(--color-letra-subtitulo)] text-[1rem] font-bold 2xl:pb-5">3- CONST :</dt>
                        <dd className="font-encode_sans_expanded font-[100] text-[var(--color-letra-parrafo)]
                                        text-base px-5 text-justify
                                        md:tex-lg md:px-5
                                        lg:px-0 lg:pb-10">
                            No puedes reasignar una variable declarada con const una vez que se le ha asignado un valor. Esto significa que el valor de la variable es constante.
                            <Console 
script={`const x = 10;
x = 20;  // Error: Assignment to constant variable`}/>
                            Sin embargo, si el valor asignado a la variable const es un objeto o un arreglo, puedes modificar sus propiedades o elementos, pero no puedes reasignar el objeto o arreglo completo.
                            <Console 
script={`const obj = { name: "John" };
obj.name = "Doe";  // Esto es válido
obj = {}; // Error: Assignment to constant variable`}/>

                        </dd>
                    </dl>
                    <Comptitle title={`Redefinición(Redeclarar la misma variable) en el mismo contexto`} className="text-cyan-50" />
                    <dl>
                        <dt className="font-encode_sans_expanded text-[var(--color-letra-subtitulo)] text-[1rem] font-bold 2xl:pb-5">1- VAR :</dt>
                        <dd className="font-encode_sans_expanded font-[100] text-[var(--color-letra-parrafo)]
                                        text-base px-5 text-justify
                                        md:tex-lg md:px-5
                                        lg:px-0 lg:pb-10">
                            Puedes redefinir una variable declarada con var dentro del mismo contexto (función o global).
                            <Console 
script={`var x = 10;
var x = 20;  // Es válido
console.log(x);  // 20`}/>
                        </dd>

                        <dt className="font-encode_sans_expanded text-[var(--color-letra-subtitulo)] text-[1rem] font-bold 2xl:pb-5">2- LET :</dt>
                        <dd className="font-encode_sans_expanded font-[100] text-[var(--color-letra-parrafo)]
                                        text-base px-5 text-justify
                                        md:tex-lg md:px-5
                                        lg:px-0 lg:pb-10">
                           No puedes redefinir una variable declarada con let dentro del mismo bloque o función. Si lo haces, obtendrás un SyntaxError.
                           <Console 
script={`let x = 10;
let x = 20;  // Error: Identifier 'x' has already been declared`}/>
                        </dd>

                        <dt className="font-encode_sans_expanded text-[var(--color-letra-subtitulo)] text-[1rem] font-bold 2xl:pb-5">3- CONST :</dt>
                        <dd className="font-encode_sans_expanded font-[100] text-[var(--color-letra-parrafo)]
                                        text-base px-5 text-justify
                                        md:tex-lg md:px-5
                                        lg:px-0 lg:pb-10">
                           No puedes redefinir una variable declarada con const. Esto es similar a let, y te arrojará un SyntaxError si intentas redefinirla.
                           <Console 
script={`const x = 10;
const x = 20;  // Error: Identifier 'x' has already been declared`}/>
                        </dd>

                    </dl>

                </div>
            </div>
        </section>
    );
};
