import { useProducts } from "../hooks/products";
import { Product } from "../components/product";
import { Loader } from "../components/loader";
import { ErrorMessage } from "../components/errorMessage";
import { Modal } from "../components/modal";
import { CreateProduct } from "../components/createProduct";
import { useContext } from "react";
import { IProduct } from "../models";
import { ModalContext } from "../context/ModalContext";

export const ProductPage = () => {
  const { isLoading, isError, products, addProduct } = useProducts();
  const { modal, open, close } = useContext(ModalContext);

  const createHandler = (product: IProduct) => {
    close();
    addProduct(product);
  };

  return (
    <div className="container mx-auto max-w-2xl pt-5">
      {isLoading && <Loader />}
      {isError && <ErrorMessage error={isError} />}
      {products.map((product) => (
        <Product product={product} key={product.id} />
      ))}
      {modal && (
        <Modal title={"Create new product"} onClose={() => close()}>
          <CreateProduct onCreate={createHandler} />
        </Modal>
      )}
      <button
        className="fixed bottom-5 right-5 rounded-full bg-red-700 text-white text-2xl px-4 py-2"
        onClick={() => open()}
      >
        +
      </button>
    </div>
  );
};
