import { IProduct } from "../models";
import { useState } from "react";

interface ProductProps {
  product: IProduct;
}

export const Product = ({ product }: ProductProps) => {
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const btnBgClassName = isButtonClicked ? 'bg-yellow-400' : 'bg-blue-400'
  const btnClasses = ['py-2 px-4 border', btnBgClassName]

const handleButtonToggle = () => {
  setIsButtonClicked(!isButtonClicked)
}

  return (
    <div className="border py-2 px-4 rounded flex flex-col items-center mb-2">
      <img src={product.image} className="w-1/6" alt={product.title}></img>
      <p>{product.title}</p>
      <p className="font-bold">{product.price} $</p>
      <button className={btnClasses.join(" ")} onClick={handleButtonToggle}>
        {!isButtonClicked ? "Show details" : "Hide details"}
      </button>
      <div>
        {isButtonClicked && (
          <>
            <p>{product.description}</p>
            <p>
              Rate: <span style={{fontWeight: 'bold'}}>{product.rating.rate}</span>
            </p>
          </>
        )}
      </div>
    </div>
  );
};
