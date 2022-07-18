
import './App.css';
// import font from './fonts/Dancing_Script/DancingScript-VariableFont_wght.ttf'
// import pages
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home'
import SingleCocktail from './pages/SingleCocktail';
import About from './pages/About';
import Error from './pages/Error';

// import component
import Navbar from './components/Navbar';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <section className='mainHeader'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <BrowserRouter>
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />}/>
                    <Route path="/cocktail/:id" element={<SingleCocktail />} />
                    <Route path='*' element={<Error />} />
              </Routes>
            </BrowserRouter>
          </div>


        </div>
      </div>



    </section>
  );
}

export default App;
