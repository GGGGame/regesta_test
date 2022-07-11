import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSuppliers } from "../state/suppliers";

export const Suppliers = ({ id, hide, classStyle }) => {
  const dispatch = useDispatch();

  const supplier = useSelector((state) => state.fetchSuppliers[0]);

  useEffect(() => {
    dispatch(fetchSuppliers("http://localhost:3050/suppliers"));
  });

  return (
    <div>
      {supplier &&
        supplier
          .filter((suppliers) => suppliers.id === id)
          .map((suppliers, index) => (
            <div key={suppliers.id} className={classStyle}>
              <p className="mx-2">Seller: {suppliers.name}</p>
              {!hide && (
                <p className="mx-2">Description: {suppliers.description}</p>
              )}
            </div>
          ))}
    </div>
  );
};
