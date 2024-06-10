import { useEffect, useState } from "react";
import "./styles.css";
import LoadingSpinner from "../LoadingSpinner";
import { capitalizeSentence } from "../../helpers";
import { useFetchHook } from "../../hooks/useFetch";
import Header from "../Header";

export default function LoadMoreProducts() {
  const [products, setProducts] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [searchValue, setSearchValue] = useState("");
  const [searchVisible, setSearchVisible] = useState(false);

  let link = `https://dummyjson.com/products?limit=20&skip=${pageCount * 20}`;
  const [data, error, loading] = useFetchHook(link);

  useEffect(() => {
    if (data?.products?.length) {
      setProducts((products) => [...products, ...data.products]);
    }
  }, [data]);

  return (
    <div className="lm-container" id="header">
      <Header title={"Load more products"} />
      {pageCount === 4 && searchVisible && (
        <div className="search-product">
          <input
            autoFocus
            type="text"
            id="search"
            onChange={(e) => setSearchValue(e.target.value)}
            value={searchValue}
            placeholder="Search..."
          />
        </div>
      )}
      <div className="lm-content">
        {products.length > 0 &&
          products
            .filter(
              (product) =>
                product.title.toLowerCase().indexOf(searchValue.toLowerCase()) >
                -1
            )
            .map((product) => (
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
      {pageCount === 4 && !searchVisible && (
        <div className="search-product-link">
          <h4>
            You have reached 100 products.{" "}
            <a
              href="#header"
              onClick={(e) => {
                e.preventDefault();
                setSearchVisible(true);
              }}
            >
              Search
            </a>{" "}
            for a product.
          </h4>
        </div>
      )}
    </div>
  );
}
