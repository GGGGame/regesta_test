import { configureStore } from "@reduxjs/toolkit";
import { articles } from "./articles";
import { cart } from "./cart";
import { supplierItems } from "./supplierItems";
import { suppliers } from "./suppliers";

export default configureStore({
  reducer: {
    fetchSupplierItems: supplierItems.reducer,
    fetchSuppliers: suppliers.reducer,
    fetchArticles: articles.reducer,
    cartArticles: cart.reducer,
  },
});
