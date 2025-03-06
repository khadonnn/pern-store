import React from "react";

import { EditIcon, Trash2Icon } from "lucide-react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  console.log(product);
  return (
    <figure className="w-full max-w-md backdrop-blur-sm bg-white/10 rounded-2xl border border-white/20 overflow-hidden shadow-xl transform  transition-all duration-300">
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-2xl font-bold text-base-content">
            {product.name}
          </h2>
          <span className="text-xs font-light bg-white/20 text-base-content px-2 py-1 rounded-full">
            Limited Edition
          </span>
        </div>

        <p className="text-base-content/70 mb-6">
          Futuristic design with enhanced comfort for everyday wear
        </p>

        <div className="relative h-64 w-full mb-6 rounded-xl overflow-hidden group">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        <div className="flex items-center justify-between gap-2">
          <div>
            <span className="text-base-content/60 text-sm">Price</span>
            <p className="text-base-content text-xl font-bold">
              ${Number(product.price).toFixed(2)}
            </p>
          </div>
          <div className="card-actions justify-end">
            <Link
              to={`/product/${product.id}`}
              variant="outline"
              className="bg-white/10 text-base-content border-white/20 hover:bg-white/20 hover:text-white flex items-center  rounded-xl px-4  py-2 transition-colors duration-300"
            >
              <EditIcon size={16} />
            </Link>
            <button
              variant="outline"
              className="bg-white/10 text-base-content btn-error border-white/20 hover:bg-white/20 hover:text-white flex items-center rounded-xl px-4  py-2 transition-colors duration-300"
            >
              <Trash2Icon size={16} className="text-error" />
            </button>
          </div>
        </div>
      </div>
    </figure>
  );
};

export default ProductCard;
