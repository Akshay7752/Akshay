import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./page/Home";
import Product from "./page/product";
import About from "./page/About";
import Counter2 from "./Hook/counter2";

function App() {
  return (
    <>
      {/* <BrowserRouter>
          <Link to="/">Home</Link>
          <Link to="/About">About</Link>
          <Link to="/Product">Product</Link>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/About" element={<About/>}></Route>
          <Route path="/Product" element={<Product/>}></Route>
        </Routes>
      </BrowserRouter> */}
      {/* <Home/> */}
      {/* <Product/>
      <About/> */}
      <Counter2/>
    </>
  );
}

export default App;
