import { FindArticle } from "./components/FindArticle";
import { Card } from "./components/Card";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSupplierItems } from "./state/supplierItems";
import { addItem, removeItem } from "./state/cart";
import { Navbar } from "./components/Navbar";

export const App = () => {
  const dispatch = useDispatch();
  const [bodyFilter, setFilter] = useState({});
  const [cartState, alterCart] = useState(false);
  const cartAmount = useSelector((state) => state.cartAmounts);

  useEffect(() => {
    dispatch(fetchSupplierItems("http://localhost:3050/supplieritems/details"));
  }, [dispatch]);

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

  const addToCart = (item) => dispatch(addItem(item));

  const removeToCart = (item) => dispatch(removeItem(item));
  return (
    <div>
      <Navbar
        findSupplier={searchSupplier}
        cartAlter={alterCart}
        cartState={cartState}
        itemAmount={cartAmount}
      />
      <Card
        filter={bodyFilter}
        cartAction={addToCart}
        cartAmount={cartAmount}
      />
    </div>
  );
};
