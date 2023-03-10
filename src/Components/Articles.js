import data from "./data";
import { Link } from "react-router-dom";
import { useState } from "react";

function Articles(props) {
  let [articleList, changeList] = useState(props.preList);

  let Data = [];
  if (props.preList) {
    Object.keys(props.preList).forEach((item) => {
      Data.push(props.preList[item]);
    });
  } else {
    Data = data;
  }
  return (
    <>
      {Data.map((item) => {
        return (
          <>
            <div className="single-article">
              <Link to={`/article/${item.slug}`}>
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
