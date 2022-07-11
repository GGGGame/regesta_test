import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchArticles } from "../state/articles";

export const Articles = ({ id, amount = 1, classStyle, discount }) => {
  const dispatch = useDispatch();
  const article = useSelector((state) => state.fetchArticles[0]);

  useEffect(() => {
    dispatch(fetchArticles(`http://localhost:3050/article`));
  }, [id, dispatch]);

  const calculatePrice = (price, amount) => {
    let totalPrice = price * amount;
    if (discount > 0) {
      totalPrice -= (totalPrice * discount) / 100;
    }

    return totalPrice;
  };

  return (
    <div>
      {article &&
        article
          .filter((articles) => articles.id === id)
          .map((articles, index) => (
            <div key={articles.id} className={classStyle}>
              <p className="mx-2">Article: {articles.name}</p>
              <div className="flex flex-col">
                {discount > 1 && (
                  <p className="absolute text-green-800 mx-2 mt-[-1.25rem]">
                    Discount applied: {discount}%
                  </p>
                )}
                <p className="mx-2">
                  Price: {calculatePrice(articles.price, amount)}€
                </p>
              </div>
            </div>
          ))}
    </div>
  );
};
