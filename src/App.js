import logo from './logo.svg';
import './App.css';
import Nav from './components/Navbar/Nav';
import MainSlider from './components/MainSlider/MainSlider';
import Products from './components/Products/Products';

function App() {
  return (
    <div className="App">
    <Nav/>
    <MainSlider/>
    <Products/>
    </div>
  );
}

export default App;
