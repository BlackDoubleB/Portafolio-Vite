import { Route, Routes } from "react-router-dom";
import './index.css';
import { Navbar } from './components/navbar/Navbar';
import { Hero } from './components/about/Hero';
import { TiposVariables } from './components/blog/pages/articulos-js/TiposVariables.jsx';
import { FuncionesFlecha } from './components/blog/pages/articulos-js/FuncionesFlecha.jsx';
import { MetodoVSFuncion } from './components/blog/pages/articulos-js/MetodoVSFuncion.jsx'
function App() {
  return (
            <div className="min-h-screen">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Hero/>} />
                    <Route path="/blog/tipos-variables" element={<TiposVariables/>} />
                    <Route path="/blog/funciones-flecha" element={<FuncionesFlecha/>} />
                    <Route path="/blog/metodo-vs-funcion" element={<MetodoVSFuncion/>} />
                </Routes>
            </div>
  )
}

export default App
