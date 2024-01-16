import React from "react";
import productsData from "../data/ProductData";
import ProductsCard from "../components/ProductCart";
import Header from "../components/Header";

const Home = () => {
  return (
    <>
      <section id="home">
        <div className="container">
          <Header />
          <div className="home_content">
            {productsData.map((item) => (
              <ProductsCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
