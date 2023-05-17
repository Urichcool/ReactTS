import { IProduct } from "../models";
import axios, { AxiosError } from "axios";
import React, { useEffect, useState } from "react";

export const useProducts = () => {
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

  return { products, isError, isLoading };
};
