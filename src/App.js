import logo from './logo.svg';
import './App.css';
import Nav from './components/Navbar/Nav';
import MainSlider from './components/MainSlider/MainSlider';
import Products from './components/Products/Products';
import ProductsIntro from './components/ProductsIntro/ProductsIntro';
import About from './components/About/About'

function App() {
  return (
    <div className="App">
    <Nav/>
    <MainSlider/>
    <About/>
    <ProductsIntro/>
    <Products/>
    </div>
  );
}

export default App;
