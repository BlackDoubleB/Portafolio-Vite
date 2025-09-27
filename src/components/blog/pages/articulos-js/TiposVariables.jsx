import { TitleH3 } from "../../../atoms/TitleH3";
import { Console } from "../../../atoms/Console";
import {
  ComTitleBlog,
  CombDt,
  CombDd,
} from "../../../atoms/blog/ComponentsBlog";
import { ScrollTops } from "../../../scrollTops";
export const TiposVariables = () => {
  ScrollTops();
  return (
    <section>
        <div>
          <ComTitleBlog tituloBlog={"VAR-CONST-LET"} />

          <TitleH3 titleH3={"Alcance (Scope)"} className="text-cyan-50" />
          <dl>
            <CombDt combDt={"1- VAR :"} />
            <CombDd>
              Tiene alcance de función. Esto significa que si declaras una
              variable con var dentro de una función, su alcance es dentro de
              esa función, pero si se declara fuera de cualquier función, tendrá
              alcance global. No respetan el alcance de bloque, sino que tienen
              alcance de función o global, lo que significa que si declaras una
              variable con var dentro de un bloque como if o for, la variable
              será accesible fuera del bloque si está dentro de una función o en
              el contexto global.
            </CombDd>
          </dl>

          <dl>
            <CombDt combDt={"2- LET Y CONST :"} />
            <CombDd>
              Ambas tienen alcance de bloque. Esto significa que si declaras una
              variable dentro de un bloque (por ejemplo, dentro de un if o un
              for), la variable solo es accesible dentro de ese bloque.
            </CombDd>
          </dl>

          <TitleH3 titleH3={"Reasignación"} className="text-cyan-50" />
          <dl>
            <CombDt combDt={"1- VAR :"} />
            <CombDd>
              Puedes reasignar el valor de una variable declarada con var.
              <Console
                language="language-javascript"
                script={`var x = 10;
x = 20;  // Es válido
let:`}
              />
            </CombDd>

            <CombDt combDt={"2- LET :"} />
            <CombDd>
              Puedes reasignar el valor de una variable declarada con let.
              <Console
                language="language-javascript"
                script={`let x = 10;
x = 20;  // Es válido`}
              />
            </CombDd>

            <CombDt combDt={"3- CONST :"} />
            <CombDd>
              No puedes reasignar una variable declarada con const una vez que
              se le ha asignado un valor. Esto significa que el valor de la
              variable es constante.
              <Console
                language="language-javascript"
                script={`const x = 10;
x = 20;  // Error: Assignment to constant variable`}
              />
              Sin embargo, si el valor asignado a la variable const es un objeto
              o un arreglo, puedes modificar sus propiedades o elementos, pero
              no puedes reasignar el objeto o arreglo completo.
              <Console
                language="language-javascript"
                script={`const obj = { name: "John" };
obj.name = "Doe";  // Esto es válido
obj = {}; // Error: Assignment to constant variable`}
              />
            </CombDd>
          </dl>

          <TitleH3
            titleH3={`Redefinición(Redeclarar la misma variable) en el mismo contexto`}
            className="text-cyan-50"
          />
          <dl>
            <CombDt combDt={"1- VAR :"} />
            <CombDd>
              Puedes redefinir una variable declarada con var dentro del mismo
              contexto (función o global).
              <Console
                language="language-javascript"
                script={`var x = 10;
var x = 20;  // Es válido
console.log(x);  // 20`}
              />
            </CombDd>

            <CombDt combDt={"2- LET :"} />
            <CombDd>
              No puedes redefinir una variable declarada con let dentro del
              mismo bloque o función. Si lo haces, obtendrás un SyntaxError.
              <Console
                language="language-javascript"
                script={`let x = 10;
let x = 20;  // Error: Identifier 'x' has already been declared`}
              />
            </CombDd>

            <CombDt combDt={"3- CONST :"} />
            <CombDd>
              No puedes redefinir una variable declarada con const. Esto es
              similar a let, y te arrojará un SyntaxError si intentas
              redefinirla.
              <Console
                language="language-javascript"
                script={`const x = 10;
const x = 20;  // Error: Identifier 'x' has already been declared`}
              />
            </CombDd>
          </dl>
        </div>
    </section>
  );
};
