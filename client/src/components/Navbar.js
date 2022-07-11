import { Cart } from "./Cart";
import { FindArticle } from "./FindArticle";

export const Navbar = ({ findSupplier, cartAlter, cartState, cartAmount }) => {
  return (
    <div className="w-full h-24 bg-slate-500">
      <div className="flex flex-row justify-between items-center">
        <div className="w-24 p-4">
          <h1 className="p-4">Logo</h1>
        </div>
        <FindArticle findSupplier={findSupplier} />
        <div className="relative w-10 mx-6">
          <button
            className={cartAmount > 0 ? "cart" : "cart-zero"}
            alt="cart img"
            data-cart-amount={cartAmount}
            onClick={() => cartAlter(true)}
          ></button>
        </div>
        {cartState && <Cart cartAlter={cartAlter} />}
      </div>
    </div>
  );
};
