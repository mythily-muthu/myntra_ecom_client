import React from "react";

const ProductsCard = ({ item, click }) => {
  return (
    <div
      key={item._id}
      className="flex flex-col w-[300px] gap-y-4 "
      onClick={() => click(item._id)}
    >
      <div className=" w-full h-[300px]">
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-contain rounded-xl p-4 border border-yellow-400 shadow-md cursor-pointer"
        />
      </div>
      <p className="tracking-widest font-normal text-base">{item.title}</p>
      <p className="text-sm text-gray-400 tracking-widest hover:font-semibold cursor-pointer ">
        view in detail
      </p>
    </div>
  );
};

export default ProductsCard;
