import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

import Product from "./Product";
import changeSiteClass from "../utils/changeSiteClass";

export default function SelectProductPanel(props) {
  const {
    productName,
    setProductName,
    price,
    setPrice,
    quantity,
    onChangeQuantity,
  } = props;

  const totalPrice = price * quantity;

  const [btndisabled, setDisabled] = useState("pointer-events-none");
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

  useEffect(() => {
    productName === "" || quantity === 0
      ? setDisabled("pointer-events-none")
      : setDisabled("pointer-events-auto");
  }, [productName, quantity]);

  return (
    <div className="max-w-[375px] mx-auto bg-white md:max-w-3xl xl:max-w-7xl xl:grid grid-cols-[40%_1fr]">
      <div className="w-full h-full flex justify-center items-center mb-8 bg-gradient-to-b from-[#EDEDEC] to-[#CECAB4]">
        {pictureSlider()}
      </div>

      <div className="max-w-full">
        <div className="mb-16 px-4 py-8 md:max-w-[85%] md:mx-auto xl:mx-24 xl:my-16 xl:p-0">
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
              <li
                className="notClicked"
                id="bikeSiteItemXS"
                onClick={() => changeSiteClass("bikeSiteItemXS")}
              >
                XS
              </li>
              <li
                className="notClicked"
                id="bikeSiteItemS"
                onClick={() => changeSiteClass("bikeSiteItemS")}
              >
                S
              </li>
              <li
                className="notClicked"
                id="bikeSiteItemM"
                onClick={() => changeSiteClass("bikeSiteItemM")}
              >
                M
              </li>
              <li
                className="notClicked"
                id="bikeSiteItemL"
                onClick={() => changeSiteClass("bikeSiteItemL")}
              >
                L
              </li>
              <li
                className="notClicked"
                id="bikeSiteItemXL"
                onClick={() => changeSiteClass("bikeSiteItemXL")}
              >
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
          <span className="font-medium">{totalPrice.toLocaleString()}</span>{" "}
          Baht
        </button>
        <button className="bg-[#e2e2de] text-start text-[#b9b39d]">
          <Link to="/order-summary" className={btndisabled}>
            NEXT
          </Link>
        </button>
      </div>
    </div>
  );
}

function pictureSlider() {
  const imgUrl1 = new URL("../../assets/bike1.png", import.meta.url);
  const imgUrl2 = new URL("../../assets/bike2.png", import.meta.url);
  const imgUrl3 = new URL("../../assets/bike3.png", import.meta.url);
  const imgUrl4 = new URL("../../assets/bike4.png", import.meta.url);

  var settingStyle = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScoll: 1,
  };

  return (
    <div className="w-4/5">
      <Slider {...settingStyle}>
        <img src={imgUrl1} alt="Rider Bike" loading="lazy" />
        <img src={imgUrl2} alt="Rider Bike" loading="lazy" />
        <img src={imgUrl3} alt="Rider Bike" loading="lazy" />
        <img src={imgUrl4} alt="Rider Bike" loading="lazy" />
      </Slider>
    </div>
  );
}
