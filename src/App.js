
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Products from './components/Products';
import Cart from './components/Cart';
import NAV from './components/navbarr';
import Product_Detail from './Pages/product_Detail';
import SaveProduct from './Pages/Save_Product';


function App() {
  return (
    <div className="App">
      <NAV />
      <div className='container'>

        <Routes>
          <Route path='/' element={<Products />}></Route>
          <Route path='cart' element={<Cart />}></Route>
          <Route path='details' element={<Product_Detail />}></Route>
          <Route path='saved' element={<SaveProduct />}></Route>


        </Routes>
      </div>
    </div>
  );
}

export default App;
