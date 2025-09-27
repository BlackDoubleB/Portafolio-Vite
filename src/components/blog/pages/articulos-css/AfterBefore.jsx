import { Console } from "../../../atoms/Console";
import { Paragraph } from "../../../atoms/Paragraph";
import { ComTitleBlog } from "../../../atoms/blog/ComponentsBlog";

import { ScrollTops } from "../../../scrollTops";
export const AfterBefore = () => {
  ScrollTops();
  return (
    <section>
        <div>
          <ComTitleBlog tituloBlog={"AFTER Y BEFORE"} />
          <Paragraph>
            Estos son los pseudo elementos más usados en CSS, nos permiten
            generar dos elementos extra que serán hijos del elemento al que se
            lo apliquemos.
            <br />
            <br />
            <strong>::after:</strong> Se colocará después del elemento
            <br />
            <strong>::before:</strong> Se colocará antes del elemento.
            <br />
            <br />
            Usar estos pseudo elementos sería el equivalente a colocar un
            &lt;span&gt; antes y/o después del elemento. Uso &lt;span&gt; en
            lugar de &lt;div&gt; porque es muy importante que recordeis que los
            pseudo elementos ::after y :: before son elementos de línea por
            defecto.
            <br />
            <br />
            La norma principal es que estos pseudo elementos se utilizan para
            adornar el elemento al que se lo aplicamos. Estos &quot;hijos&quot;
            no se ven reflejados en el HTML, por lo que no podemos
            seleccionarlos ni están accesibles desde JavaScript, por lo que a
            efectos técnicos, estos elementos no existen.
            <br />
            <br />
            Respecto a las propiedades que les podemos aplicar la respuesta es
            TODAS.
            <br />
            <br />
            Lo podéis tratar como si se tratara de un &lt;span&gt; en todos los
            sentidos, la única peculiaridad que tienen es que debemos usar la
            propiedad content de manera OBLIGATORIA, si no la usamos los
            elementos no se pintarán en pantalla.
            <br />
            <br />
            <strong>Revisa el ejemplo que hice:</strong>
           <div className="flex justify-center w-full h-full">
             <Console
              language="language-html"
              script={`<body>
    <h1>
        hello world
    </h1>
    <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem quod repudiandae iusto, dolorem
        asperiores dicta illum libero hic quasi eos neque facilis reiciendis saepe illo itaque quisquam officia quaerat
        dolor!
    </p>
</body>`}
            />
           </div> 
            <Console
              language="language-css"
              script={`:root{
            --nada: polygon(0 0, 0 0, 0 100%, 0% 100%);
            --todo: polygon(0 0, 100% 0, 100% 100%, 0 100%);
        }

        h1 {
            color: red;
        }

        p{
            position: relative;
        }
        p::before {
            position: absolute;
            content: "";
            height: 100%;
            width: 120%;
            background-color: aqua;
            z-index: -1;
            transition: 0.5s ease;
            clip-path: var(--nada);
        }

        p:hover::before {
            background-color: red;
            clip-path: var(--todo);
        }`}
            />
          </Paragraph>
        </div>
    </section>
  );
};
