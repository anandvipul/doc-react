import Data from "./data";
import { useParams } from "react-router-dom";

function Article() {
  let { slug } = useParams();
  return (
    <>
      <h1>Article</h1>
      {slug}
    </>
  );
}

export default Article;
