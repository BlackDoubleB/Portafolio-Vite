import { Route, Routes } from "react-router-dom";
import './index.css';
import { Navbar } from './components/navbar/Navbar';
import { Hero } from './components/about/Hero';
import { TiposVariables } from './components/blog/pages/articulos-js/TiposVariables.jsx';
import {FuncionesFlecha} from './components/blog/pages/articulos-js/FuncionesFlecha.jsx';
function App() {
  return (
            <div className="min-h-screen">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Hero/>} />
                    <Route path="/blog/tipos-variables" element={<TiposVariables/>} />
                    <Route path="/blog/funciones-flecha" element={<FuncionesFlecha/>} />
                </Routes>
            </div>
  )
}

export default App
