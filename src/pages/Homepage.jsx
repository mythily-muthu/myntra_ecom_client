import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/productsSlice";
import ProductsCard from "../components/ProductsCard";

const Homepage = () => {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  const userState = useSelector((state) => state.user.user);
  const productsState = useSelector((state) => state.products.products);
  const [loading, setLoading] = useState(true);
  // const [products, setProducts] = useState([]);
  // console.log("productsState:", productsState);

  useEffect(() => {
    if (!userState) {
      navigate("/login");
    }
  }, [userState]);

  // const getAllProducts = async () => {
  //   let api_url = "http://localhost:7000/api/products/";
  //   let res = await axios.get(api_url);
  //   setProducts(res.data);
  //   setLoading(false);
  //   console.log(setProducts);
  // };

  const getAllProducts = async () => {
    try {
      let api_url = "http://localhost:7000/api/products/";
      let res = await axios.get(api_url);
      if (res.status === 200) {
        dispatch(getProducts(res.data));

        setLoading(false);
      }
    } catch (error) {
      console.log("error", error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  const handleSingleProduct = (productId) => {
    navigate(`/product/${productId}`);
  };
  return (
    <div className="w-full flex ">
      <div className="flex flex-col w-full">
        <Navbar />
        {loading ? (
          <p className="flex h-[80vh] w-full items-center justify-center text-xl text-primary">
            LOADING...
          </p>
        ) : (
          <div className="flex gap-5 justify-center py-40 w-full">
            {productsState.map((item) => {
              return <ProductsCard item={item} click={handleSingleProduct} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Homepage;
