import React from "react";
import Navbar from "../components/Navbar";
import products from "../data.json";
import ProductCard from "../components/ProductCard";
const Cart = () => {
  const handleCart = (item) => {
    alert(`${item.title} added for checkout..`);
  };
  return (
    <div className="flex flex-col w-full min-h-screen h-full bg-gray-50 gap-y-10">
      <Navbar />
      <div className="flex h-full mx-auto justify-center ">
        <div className="flex flex-col w-full  gap-y-6">
          {products.map((item) => {
            return <ProductCard item={item} click={handleCart} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Cart;
