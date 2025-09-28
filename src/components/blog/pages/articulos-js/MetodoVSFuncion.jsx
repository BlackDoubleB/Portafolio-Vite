import { Console } from "../../../atoms/Console";
import { Paragraph } from "../../../atoms/Paragraph";
import {
  ComTitleBlog,
  CombDt,
  CombDd,
} from "../../../atoms/blog/ComponentsBlog";
import { ScrollTops } from "../../../scrollTops";
export const MetodoVSFuncion = () => {
  ScrollTops();
  return (
    <section className="mt-5">
        <div>
          <ComTitleBlog tituloBlog={"METODO VS FUNCIÓN"} />
          <Paragraph>
            En JavaScript, los métodos y funciones son conceptos fundamentales
            que comparten algunas similitudes, pero también tienen diferencias
            clave dependiendo del contexto en el que se usen. A continuación,
            exploraremos qué son, cómo se definen y cuándo utilizarlos.
          </Paragraph>

          <dl>
            <CombDt combDt={`Función :`} />
            <CombDd className="!px-0">
              Una función es un bloque de código independiente que realiza una
              tarea específica. Puedes llamarla desde cualquier parte del código
              y pasarle argumentos.
              <Console
                language="language-javascript"
                script={`function saludar() {
  console.log("Hola!");
}
`}
              />
            </CombDd>

            <CombDt combDt={`Método :`} />
            <CombDd className="!px-0">
              Un método es una función que es propiedad de un objeto. Se define
              dentro de un objeto y se invoca con la sintaxis objeto.metodo().
              Ejemplo:
              <Console
                language="language-javascript"
                script={`let persona = {
  nombre: "Blanca",
  saludar: function() {
    console.log("Hola, " + this.nombre + "!");
  }
};

persona.saludar(); // Llama al método, muestra "Hola, Blanca!"`}
              />
            </CombDd>
          </dl>
        </div>
    </section>
  );
};
