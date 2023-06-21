import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Button from "../components/Button";

const SingleProduct = () => {
  let params = useParams();
  let navigate = useNavigate();
  const [loading, setloading] = useState(true);
  const [productDetails, setProductDetails] = useState({});
  // console.log("prms:", params);
  const getProductsDetails = async () => {
    try {
      let api_url = "http://localhost:7000";
      const res = await axios.get(
        `${api_url}/api/products/${params.productid}`
      );

      setProductDetails(res.data);
      setloading(false);
      console.log(setProductDetails);
    } catch (error) {
      console.error("Error:", error.message);
    }
  };
  console.log("productdetails:", productDetails);

  useEffect(() => {
    getProductsDetails();
  }, []);

  const handleAddToCart = (productDetails) => {
    alert(`product ${productDetails.title} added to cart`);
  };
  return (
    <div className="w-full flex h-full flex-col ">
      <Navbar />
      <div className="flex justify-center w-full">
        {loading ? (
          <p className="flex h-[80vh] w-full items-center justify-center text-xl text-primary">
            LOADING...
          </p>
        ) : (
          <div className="w-full lg:w-[80%] grid grid-cols-12 gap-8  h-full justify-center p-10 items-center">
            <div className="col-span-12 h-[300px] md:col-span-6 md:h-[500px] flex  items-center  justify-center">
              <img
                src={productDetails.image}
                alt={productDetails.title}
                className="w-full border h-full object-contain p-5 border-yellow cursor-pointer"
              />
            </div>

            <div className="col-span-12 h-full  flex md:col-span-6 flex-col gap-y-5 p-3 ">
              <p className="font-semibold text-xl md:text-3xl tracking-[0.1em] items-baseline border-b-2 border-yellow ">
                {productDetails.title}
              </p>
              <div className="flex tracking-[0.1em] ">
                <p className="pt-5 text-md md:text-lg  tracking-[0.1em]">
                  {productDetails.description}
                </p>
              </div>
              <p className="font-bold text-2xl tracking-[0.2em] py-4">
                ${productDetails.price}
              </p>

              <div className=" flex gap-x-5 w-full">
                <Button
                  name={"ADD TO CART"}
                  textColor="text-black"
                  radius="rounded-xl"
                  bgColor="bg-white"
                  border=" border border-black"
                  width="w-max"
                  click={() => handleAddToCart(productDetails)}
                />
                <Button
                  name={"GO TO CART"}
                  bgColor="bg-primary"
                  textColor="text-white"
                  radius="rounded-xl"
                  width="w-max"
                  click={() => navigate("/cart")}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SingleProduct;
