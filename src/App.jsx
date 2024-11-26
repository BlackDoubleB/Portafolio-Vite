import './index.css'
import { Navbar } from './components/navbar/Navbar'
import { Hero } from './components/about/Hero'
function App() {


  return (
    <div className='min-h-screen' >
      <Navbar />
      <Hero/>
    </div>
  )
}

export default App
