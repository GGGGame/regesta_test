import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editItem, removeItem } from "../state/cart";
import { Articles } from "./Articles";
import { Suppliers } from "./Suppliers";

export const Cart = ({ cartAlter, itemAmount }) => {
  const cartItems = useSelector((state) => state.cartArticles);
  const supplierItems = useSelector((state) => state.fetchSupplierItems[0]);
  const [dateShip, setDate] = useState();
  const dispatch = useDispatch();

  const changeAmount = (currentItem, amount, index) => {
    dispatch(editItem(currentItem, amount));

    // remove item in cart if the value is 0
    if (currentItem.amount <= 1) {
      dispatch(removeItem(index));
    }
  };

  const buyItem = (obj) => {
    const item = supplierItems.article.find(
      (items) => items.id === obj.ArticleId
    );
    obj.price = calculatePrice(item.price, obj.amount, obj);
    console.log(obj);
  };

  const applyDiscount = (items) => {
    let percentage = 0;
    if (items.amount >= items.DiscountItemsAmount) {
      percentage += items.DiscountPercentage;
    }
    if (dateShip >= items.DiscountDate.substring(0, 10)) {
      percentage += items.DiscountPercentage;
    }
    return percentage;
  };

  const calculatePrice = (price, amount, items) => {
    let totalPrice = price * amount;
    if (applyDiscount(items) > 0) {
      totalPrice -= (totalPrice * applyDiscount(items)) / 100;
    }

    return totalPrice;
  };

  const changeDate = (e) => setDate(e.target.value);

  return (
    <div className="fixed top-0 w-full h-screen bg-gray-400/50">
      <div className="flex justify-center h-full w-full">
        <div className="my-auto bg-white w-[70rem] rounded-xl">
          <div className="flex justify-between">
            <h1 className="p-6 text-xl font-semibold">Cart</h1>
            <button
              className="p-4 text-xl font-semibold"
              onClick={() => cartAlter(false)}
            >
              X
            </button>
          </div>
          {cartItems.length === 0 || cartItems === null ? (
            <h1 className="w-32 mx-auto my-10 text-xl">Cart is empty!</h1>
          ) : (
            cartItems.map((items, index) => (
              <div
                key={index}
                className="flex p-6 justify-between my-10 items-baseline"
              >
                <Articles
                  classStyle="flex p-1"
                  id={items.ArticleId}
                  amount={items.amount}
                  discount={applyDiscount(items)}
                />
                <Suppliers
                  id={items.SupplierId}
                  hide={true}
                  classStyle="flex p-1"
                />
                <div className="flex flex-row items-baseline">
                  <p>Amount:</p>
                  <button
                    className="border border-black p-1 bg-slate-200 w-10 mx-2 hover:bg-red-700"
                    onClick={() => changeAmount(items, -1, index)}
                  >
                    -
                  </button>
                  <p>{items.amount}</p>
                  <button
                    className="border border-black p-1 bg-slate-200 w-10 mx-2 hover:bg-green-500 disabled:bg-gray-400"
                    onClick={() => changeAmount(items, 1)}
                    disabled={items.amount >= items.Stocks}
                  >
                    +
                  </button>
                  <div>
                    <label className="p-2">Date to ship:</label>
                    <input type="date" onChange={changeDate} />
                  </div>
                </div>
                <button
                  className="border border-black bg-slate-200 p-2 w-20 rounded hover:bg-lime-500"
                  onClick={() =>
                    buyItem({ ...items, dateShip: dateShip, price: 0 })
                  }
                >
                  Buy
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
