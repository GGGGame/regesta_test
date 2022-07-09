import { Cart } from "./Cart";
import { FindArticle } from "./FindArticle";
import CartImage from "../assets/shopping-cart.png";

export const Navbar = ({ findArticle, cartAlter, cartState, itemAmount }) => {
  return (
    <div className="w-full h-24 bg-slate-500">
      <div className="flex flex-row justify-between items-center">
        <div className="w-24 p-4">
          <h1 className="p-4">Logo</h1>
        </div>
        <FindArticle />
        <img
          src={CartImage}
          className="w-10 mx-6"
          alt="cart img"
          onClick={() => cartAlter(true)}
        />
        {cartState && <Cart cartAlter={cartAlter} itemAmount={itemAmount} />}
      </div>
    </div>
  );
};
