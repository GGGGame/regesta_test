import { Card } from "./components/Card";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSupplierItems } from "./state/supplierItems";
import { addItem } from "./state/cart";
import { Navbar } from "./components/Navbar";

export const App = () => {
  const cartItems = useSelector((state) => state.cartArticles);
  const dispatch = useDispatch();
  const [bodyFilter, setFilter] = useState({});
  const [cartState, alterCart] = useState(false);

  // used everytime there is no filter and for page load
  useEffect(() => {
    dispatch(fetchSupplierItems("http://localhost:3050/supplieritems/details"));
  }, [dispatch]);

  // search item by filter using FindArticle.js
  const searchSupplier = (e) => {
    e.preventDefault();

    const { product, amount, shiptime, shipdate } = e.target.elements;

    setFilter({
      name: product.value,
      amount: amount.value,
      timeShip: shiptime.value,
      shipmentDate: shipdate.value,
    });

    dispatch(
      fetchSupplierItems(
        `http://localhost:3050/supplieritems/details/${amount.value || 0}/${
          shiptime.value || 0
        }/${shipdate.value || 0}`
      )
    );
  };

  // add item to cart
  const addToCart = (item) => dispatch(addItem(item));

  return (
    <div>
      <Navbar
        findSupplier={searchSupplier}
        cartAlter={alterCart}
        cartState={cartState}
        cartAmount={cartItems.length}
      />
      <Card filter={bodyFilter} cartAction={addToCart} />
    </div>
  );
};
