import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchArticles } from "../state/articles";

export const Articles = ({ id, amount = 1, classStyle }) => {
  const dispatch = useDispatch();
  const article = useSelector((state) => state.fetchArticles[0]);

  useEffect(() => {
    dispatch(fetchArticles(`http://localhost:3050/article`));
  }, [id, dispatch]);

  return (
    <div>
      {article &&
        article
          .filter((articles) => articles.id === id)
          .map((articles, index) => (
            <div key={articles.id} className={classStyle}>
              <p>Article: {articles.name}</p>
              <p>Price: {articles.price * amount}€</p>
            </div>
          ))}
    </div>
  );
};
