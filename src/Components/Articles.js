import Data from "./data";
import { Link } from "react-router-dom";
import { useState } from "react";

function Articles() {
  let [article, setArticle] = useState("");

  return (
    <>
      {Data.map((item) => {
        return (
          <>
            <div className="single-article">
              <Link to={`/article/${item.slug}`} state={{ slug: item.slug }}>
                <h2>{item.title}</h2>
              </Link>
              <span>,by</span>
              <p>{item.author}</p>
            </div>
          </>
        );
      })}
    </>
  );
}

export default Articles;
