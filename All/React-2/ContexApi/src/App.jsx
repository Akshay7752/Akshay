import React from "react";
import Home from "./Pages/Home";
import Cart from "./components/Cart";
import { Provider } from "react-redux";
import store from "./store/Store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";

const App = () => {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Cart />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
};

export default App;
