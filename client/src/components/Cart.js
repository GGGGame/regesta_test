import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Articles } from "./Articles";
import { Quantity } from "./Quantity";
import { Suppliers } from "./Suppliers";

export const Cart = ({ cartAlter, itemAmount }) => {
  const cartItems = useSelector((state) => state.cartArticles);
  const [amount, setAmount] = useState();

  const incremnetItem = () => {
    setAmount((state) => state + 1);
  };

  const decrementItem = () => {
    setAmount((state) => state - 1);
  };

  return (
    <div className="fixed top-0 w-full h-screen bg-gray-400/50">
      <div className="flex justify-center h-full w-full">
        <div className="my-auto bg-white w-[30rem] rounded-xl">
          <div className="flex justify-between">
            <h1 className="p-6 text-xl font-semibold">Cart</h1>
            <button
              className="p-4 text-xl font-semibold"
              onClick={() => cartAlter(false)}
            >
              X
            </button>
          </div>
          {cartItems.length === 0 ? (
            <h1 className="w-32 mx-auto my-10 text-xl">Cart is empty!</h1>
          ) : (
            cartItems.map((items, index) => (
              <div key={index} className="flex p-1">
                <Articles
                  classStyle="flex p-1"
                  id={items.ArticleId}
                  amount={items.amount}
                />
                <Suppliers
                  id={items.SupplierId}
                  hide={true}
                  classStyle="flex p-1"
                />
                <div className="flex">
                  <Quantity
                    amount={items.amount}
                    incrementItem={incremnetItem}
                    decrementItem={decrementItem}
                  />
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
