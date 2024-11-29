import { Route, Routes } from "react-router-dom";
import './index.css';
import { Navbar } from './components/navbar/Navbar';
import { Hero } from './components/about/Hero';
import { TiposVariables } from './components/blog/pages/articulos-js/TiposVariables.jsx';
function App() {
  return (
            <div className="min-h-screen">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Hero/>} />
                    {/* <Route path="/blog/:articleId" element={<Article/>} /> */}
                    <Route path="/blog/tipos-variables" element={<TiposVariables/>} />
                </Routes>
            </div>
  )
}

export default App
