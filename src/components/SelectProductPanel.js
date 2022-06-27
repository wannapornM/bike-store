import { useState } from "react";
import { Link } from "react-router-dom";

import Product from "./Product";

export default function SelectProductPanel(props) {
  const { setProductName, price, setPrice, quantity, onChangeQuantity } = props;

  const [borderProduct1, setBorderProduct1] = useState([
    "border-[1px]",
    "border-[#dedede]",
  ]);
  const [borderProduct2, setBorderProduct2] = useState([
    "border-[1px]",
    "border-[#dedede]",
  ]);

  function handleClickProduct1() {
    setProductName("Raptor Carbon 4");
    setPrice(parseInt("43,000".replaceAll(",", "")));
    setBorderProduct1(["border-[2px]", "border-[#747474]"]);
    setBorderProduct2(["border-[1px]", "border-[#dedede]"]);
  }

  function handleClickProduct2() {
    setProductName("Raptor Metal");
    setPrice(parseInt("51,500".replaceAll(",", "")));
    setBorderProduct2(["border-[2px]", "border-[#747474]"]);
    setBorderProduct1(["border-[1px]", "border-[#dedede]"]);
  }

  return (
    <div className="max-w-full grid grid-cols-[40%_1fr] bg-white">
      <div className="w-full bg-lime-200"></div>

      <div>
        <div className="mx-24 my-16">
          <h1>Select Your Bike Model</h1>
          <Product
            selectedProduct={handleClickProduct1}
            title={"Raptor Carbon 4"}
            price={"43,000"}
            border={borderProduct1}
          />
          <Product
            selectedProduct={handleClickProduct2}
            title={"Raptor Metal"}
            price={"51,500"}
            border={borderProduct2}
          />

          <div className="mb-16">
            <h1>Select Your Bike Size</h1>
            <div className="mb-4">
              Road bite sizing is argaubly more important than any other type of
              bicycle. The sizing will be also vary between different
              manufacturer. <span>Compare Raptor to other brand.</span>
            </div>
            <ul className="list-none">
              <li className="inline-flex justify-center items-center w-[35px] h-[35px] bg-white rounded-full mr-[10px] border-[1px] border-solid border-[#d9d9d9]">
                XL
              </li>
              <li className="inline-flex justify-center items-center w-[35px] h-[35px] bg-white rounded-full mx-[10px] border-[1px] border-solid border-[#d9d9d9]">
                S
              </li>
              <li className="inline-flex justify-center items-center w-[35px] h-[35px] bg-white rounded-full mx-[10px] border-[1px] border-solid border-[#d9d9d9]">
                M
              </li>
              <li className="inline-flex justify-center items-center w-[35px] h-[35px] bg-white rounded-full mx-[10px] border-[1px] border-solid border-[#d9d9d9]">
                L
              </li>
              <li className="inline-flex justify-center items-center w-[35px] h-[35px] bg-white rounded-full mx-[10px] border-[1px] border-solid border-[#d9d9d9]">
                XL
              </li>
            </ul>
          </div>

          <div className="">
            <h1>Quantity</h1>
            <label className="block">Quantity</label>
            <input
              type="number"
              value={quantity}
              onChange={(e) => onChangeQuantity(e.target.value)}
              placeholder="1"
              className="w-[260px] h-[36px] rounded-[5px] border-[1px] border-solid border-[#e2e1e5] px-2"
            />
          </div>
        </div>
        <button className="bg-[#f5f5f5] text-end">
          <span className="font-medium">{price.toLocaleString()}</span> Baht
        </button>
        <button className="bg-[#e2e2de] text-start text-[#b9b39d]">
          <Link to="/order-summary">NEXT</Link>
        </button>
      </div>
    </div>
  );
}
