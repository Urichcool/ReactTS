import { useProducts } from "./hooks/products";
import { Product } from "./components/product";
import { Loader } from "./components/loader";
import { ErrorMessage } from "./components/errorMessage";
import { Modal } from "./components/modal";
import { CreateProduct } from "./components/createProduct";
import { useState } from "react";
import { IProduct } from "./models";

function App() {
  const { isLoading, isError, products, addProduct } = useProducts();
  const [modalOpen, setModalOpen] = useState(false);

  const createHandler = (product: IProduct) => {
    setModalOpen(false);
    addProduct(product);
  };

  return (
    <div className="container mx-auto max-w-2xl pt-5">
      {isLoading && <Loader />}
      {isError && <ErrorMessage error={isError} />}
      {products.map((product) => (
        <Product product={product} key={product.id} />
      ))}
      {modalOpen && (
        <Modal title={"Create new product"} onClose={() => setModalOpen(false)}>
          <CreateProduct onCreate={createHandler} />
        </Modal>

        
      )}
    </div>
  );
}

export default App;
