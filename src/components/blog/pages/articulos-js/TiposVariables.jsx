import { TitleH3} from "../../../atoms/TitleH3";
import { Console } from '../../../atoms/Console';
import { ComTitleBlog,CombDt,CombDd } from '../../../atoms/blog/ComponentsBlog'
export const TiposVariables = () => {

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
                <ComTitleBlog tituloBlog={"VAR-CONST-LET"}/>

                    <TitleH3 titleH3={"Alcance (Scope)"} className="text-cyan-50" />
                    <dl>
                        <CombDt combDt={"1- VAR :"}/>
                        <CombDd combDd={`Tiene alcance de función. Esto significa que si declaras una variable con var dentro de una función, su alcance es dentro de esa función, pero si se declara fuera de cualquier función, tendrá alcance global. No respetan el alcance de bloque, sino que tienen alcance de función o global, lo que significa que si declaras una variable con var dentro de un bloque como if o for, la variable será accesible fuera del bloque si está dentro de una función o en el contexto global.`} />
                    </dl>

                    <dl>
                        <CombDt combDt={"2- LET Y CONST :"}/>
                        <CombDd combDd={`Ambas tienen alcance de bloque. Esto significa que si declaras una variable dentro de un bloque (por ejemplo, dentro de un if o un for), la variable solo es accesible dentro de ese bloque.`} />
                    </dl>

                    <TitleH3 titleH3={"Reasignación"} className="text-cyan-50" />
                    <dl>
                        <CombDt combDt={"1- VAR :"}/>
                        <CombDd combDd={`Puedes reasignar el valor de una variable declarada con var.`} combConsole={<Console 
script={`var x = 10;
x = 20;  // Es válido
let:`}/>}/>

                        <CombDt combDt={"2- LET :"}/>
                        <CombDd combDd={`Puedes reasignar el valor de una variable declarada con let.`} combConsole={<Console 
script={`let x = 10;
x = 20;  // Es válido`}/>}/>

                        <CombDt combDt={"3- CONST :"}/>
                        <CombDd combDd={` No puedes reasignar una variable declarada con const una vez que se le ha asignado un valor. Esto significa que el valor de la variable es constante.`} combConsole={<Console 
script={`const x = 10;
x = 20;  // Error: Assignment to constant variable`}/>}/>

                        <CombDd combDd={`Sin embargo, si el valor asignado a la variable const es un objeto o un arreglo, puedes modificar sus propiedades o elementos, pero no puedes reasignar el objeto o arreglo completo.`} combConsole={<Console 
script={`const obj = { name: "John" };
obj.name = "Doe";  // Esto es válido
obj = {}; // Error: Assignment to constant variable`}/>}/>
                    </dl>
                    
                    <TitleH3 titleH3={`Redefinición(Redeclarar la misma variable) en el mismo contexto`} className="text-cyan-50" />
                    <dl>
                    <CombDt combDt={"1- VAR :"}/>
                        <CombDd combDd={`Puedes redefinir una variable declarada con var dentro del mismo contexto (función o global).`} combConsole={<Console 
script={`var x = 10;
var x = 20;  // Es válido
console.log(x);  // 20`}/>}/>

                    <CombDt combDt={"2- LET :"}/>
                    <CombDd combDd={`No puedes redefinir una variable declarada con let dentro del mismo bloque o función. Si lo haces, obtendrás un SyntaxError.`} combConsole={ <Console 
script={`let x = 10;
let x = 20;  // Error: Identifier 'x' has already been declared`}/>}/>


                    <CombDt combDt={"3- CONST :"}/>
                    <CombDd combDd={`No puedes redefinir una variable declarada con const. Esto es similar a let, y te arrojará un SyntaxError si intentas redefinirla.`} combConsole={<Console 
script={`const x = 10;
const x = 20;  // Error: Identifier 'x' has already been declared`}/>}/>      
                    </dl>
                </div>
            </div>
        </section>
    );
};
