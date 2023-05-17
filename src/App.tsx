import { useProducts } from "./hooks/products";
import { Product } from "./components/product";
import { Loader } from "./components/loader";
import { ErrorMessage } from "./components/errorMessage";
import { Modal } from "./components/modal";
import { CreateProduct } from "./components/createProduct";

function App() {
  const { isLoading, isError, products } = useProducts()

  return (
    <div className="container mx-auto max-w-2xl pt-5">
      {isLoading && <Loader/>}
      {isError && <ErrorMessage error={isError}/>}
      {products.map((product) => (
        <Product product={product} key={product.id} />
      ))}
      <Modal title={'Create new product'}> 
        <CreateProduct/>
   </Modal>
    </div>
  );
}

export default App;
