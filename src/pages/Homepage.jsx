import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Homepage = () => {
  let navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const getAllProducts = async () => {
    let api_url = "http://localhost:7000/api/products/";
    let res = await axios.get(api_url);
    setProducts(res.data);
    setLoading(false);
    console.log(setProducts);
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  const handleSingleProduct = (productId) => {
    navigate(`/product/${productId}`);
  };
  return (
    <div className="w-full flex  ">
      <div className="flex flex-col w-full">
        <Navbar />
        {loading ? (
          <p className="flex h-[80vh] w-full items-center justify-center text-xl text-primary">
            LOADING...
          </p>
        ) : (
          <div className="flex gap-5 justify-center py-40 w-full">
            {products.map((item) => {
              return (
                <div
                  key={item._id}
                  className="flex flex-col w-[300px] gap-y-4 "
                  onClick={() => handleSingleProduct(item._id)}
                >
                  <div className=" w-full h-[300px]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-contain rounded-xl p-4 border border-yellow-400 shadow-md cursor-pointer"
                    />
                  </div>
                  <p className="tracking-widest font-normal text-base">
                    {item.title}
                  </p>
                  <p className="text-sm text-gray-400 tracking-widest hover:font-semibold cursor-pointer ">
                    view in detail
                  </p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Homepage;
