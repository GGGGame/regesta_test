import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Articles } from "./Articles";
import { Suppliers } from "./Suppliers";

export const Card = ({ filter, cartAction }) => {
  const supplierItems = useSelector((state) => state.fetchSupplierItems[0]);
  const [filteredItems, filterItems] = useState([]);

  // supplierItems receive state from this API: http://localhost:3050/supplieritems/details
  // that return articles and supplierItems, at this point
  // everytime current component is rendered, find ArticleId inside supplierItems by current id in articles table
  useEffect(() => {
    let items = [];
    if (supplierItems !== null && supplierItems !== undefined) {
      if (!Object.values(filter).every((s) => s === "" || s === null)) {
        const applyFilter = (itemsId) => {
          if (itemsId !== undefined) {
            return {
              supplierItems: supplierItems.supplierItems.filter(
                (suppitems) => suppitems.ArticleId === (itemsId && itemsId.id)
              ),
            };
          } else {
            return supplierItems;
          }
        };

        const itemsId = supplierItems.article
          .filter((articles) => articles.name === filter.name)
          .shift();
        items = applyFilter(itemsId);
      } else {
        items = supplierItems;
      }
    }

    filterItems(items);
  }, [filter, supplierItems]);

  return (
    <div className="w-full h-auto">
      <div className="flex mw-[120px] flex-wrap p-12">
        {filteredItems.length !== 0 &&
          filteredItems.supplierItems
            .slice()
            .sort((a, b) => a.TimeShip - b.TimeShip)
            .map((suppItems, index) => (
              <div
                key={index}
                className="w-56 m-4 bg-slate-200 border border-black"
              >
                <div className="w-full p-2 flex justify-center">
                  <h1 className="p-12 bg-white">Logo</h1>
                </div>
                <div className="supplier-info">
                  <Suppliers id={suppItems.SupplierId} />
                  <Articles id={suppItems.ArticleId} />
                  <p className="mx-2">stocks: {suppItems.Stocks}</p>
                  <p className="mx-2">Shipment time: {suppItems.TimeShip}</p>
                  <p className="mx-2">
                    Discount date:
                    {new Date(suppItems.DiscountDate).toLocaleDateString()}
                  </p>
                </div>
                <div className="w-full flex justify-center">
                  <button
                    className="bg-slate-400 px-6 py-2 m-2 rounded hover:bg-yellow-400"
                    onClick={() => cartAction({ ...suppItems, amount: 1 })}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};
