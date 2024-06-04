import { useEffect, useState } from "react";
import "./styles.css";
import LoadingSpinner from "../LoadingSpinner";
import { capitalizeSentence } from "../../helpers";
import { useFetchHook } from "../../hooks/useFetch";
import Header from "../Header";

export default function LoadMoreProducts() {
  const [products, setProducts] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  let link = `https://dummyjson.com/products?limit=20&skip=${pageCount * 20}`;
  const [data, error, loading] = useFetchHook(link);

  useEffect(() => {
    if (data?.products?.length)
      setProducts((products) => [...products, ...data.products]);
  }, [data]);

  return (
    <div className="lm-container">
      <Header title={"Load more products"} />
      <div className="lm-content">
        {products.length > 0 &&
          products.map((product) => (
            <div className="lm-product-card" key={product.id}>
              <img
                src={product.thumbnail}
                alt={capitalizeSentence(product.title)}
              />
              <h4 className="lm-card-title">
                {capitalizeSentence(product.title)}
              </h4>
            </div>
          ))}
      </div>
      {error && <div className="error">Error occured {error}</div>}
      {loading && <LoadingSpinner />}
      {pageCount < 4 && (
        <div className="lm-button-section">
          <button
            className="lm-button"
            onClick={() => {
              setPageCount(pageCount + 1);
            }}
            disabled={loading}
          >
            Load More Products
          </button>
        </div>
      )}
      {pageCount === 4 && (
        <div className="lm-button-section">
          <h4>You have reached 100 products.</h4>
        </div>
      )}
    </div>
  );
}
