import React from "react";
import Button from "./Button";

const ProductCard = ({ item, click }) => {
  return (
    <div key={item.title} className="flex gap-x-5 border-2 border-gray-400 p-2">
      <div className="bg-white h-20 md:h-48 p-4 w-30 md:w-30">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-contain "
        />
      </div>
      <div className="flex flex-col w-full gap-y-3 p-5">
        <p className="text-lg font-medium tracking-wider uppercase">
          {item.title}
        </p>
        <p className="text-lg tracking-wider ">$ {item.price}</p>
        <Button
          name={"BUY NOW"}
          bgColor="bg-gray-300"
          textColor="text-black"
          radius="rounded-md"
          width="w-max"
          click={() => click(item)}
        />
      </div>
    </div>
  );
};

export default ProductCard;
