import { Route, Routes } from "react-router-dom";
import './index.css';
import { Navbar } from './components/navbar/Navbar';
import { Hero } from './components/about/Hero';
import { TiposVariables } from './components/blog/pages/articulos-js/TiposVariables.jsx';
import { FuncionesFlecha } from './components/blog/pages/articulos-js/FuncionesFlecha.jsx';
import { MetodoVSFuncion } from './components/blog/pages/articulos-js/MetodoVSFuncion.jsx'
import {Hoisting} from './components/blog/pages/articulos-js/Hoisting.jsx';
import { AfterBefore } from "./components/blog/pages/articulos-css/AfterBefore.jsx";


function App() {

  return (  
            <div className="min-h-screen ">
             
                <Navbar />
               <main className="w-full flex justify-center">
                 <Routes >
                    <Route path="/" element={<Hero/>} />
                    <Route path="/blog/tipos-variables" element={<TiposVariables/>} />
                    <Route path="/blog/funciones-flecha" element={<FuncionesFlecha/>} />
                    <Route path="/blog/metodo-vs-funcion" element={<MetodoVSFuncion/>} />
                    <Route path="/blog/hoisting" element={<Hoisting/>} />
                    <Route path="/blog/after-before" element={<AfterBefore/>} />
                </Routes>
               </main>
            </div>
  )
}

export default App
