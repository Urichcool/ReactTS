import React, { useEffect, useState } from "react";
import { Product } from "./components/product";
import { IProduct } from "./models";
import axios, { AxiosError } from "axios";

function App() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState("");

  const fetchProducts = async () => {
    try {
      setIsError("");
      setIsLoading(true);
      const response = await axios.get<IProduct[]>(
        "https://fakestoreapi.com/products?limit=5"
      );
      setProducts(response.data);
      setIsLoading(false);
    } catch (e: unknown) {
      setIsLoading(false);
      const error = e as AxiosError;
      setIsError(error.message);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto max-w-2xl pt-5">
      {isLoading && <p className="text-center">Loading...</p>}
      {isError && <p className="text-center text-red-600">{isError}</p>}
      {products.map((product) => (
        <Product product={product} key={product.id} />
      ))}
      {/* <Product product={products[0]} />
      <Product product={products[1]} /> */}
    </div>
  );
}

export default App;
