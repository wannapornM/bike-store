import { Link } from "react-router-dom";

export default function OrderSummaryPanel(props) {
  const { productName, price, quantity } = props;
  const imgUrl = new URL("../../assets/bike1.png", import.meta.url);

  const totalPriceWithOutVat = price * quantity;
  const vat = calVat(price, quantity);
  const totalPriceWithVat = calTotalPrice(vat, price, quantity);

  return (
    <div className="max-w-full grid grid-cols-[40%_1fr] bg-white">
      <div className="w-full bg-lime-200"></div>

      <div>
        <div className="w-full p-16">
          <h1>Order Summary</h1>

          <div className="flex mb-24">
            <img
              src={imgUrl}
              alt="Bike"
              loading="lazy"
              className="w-1/2 p-4 object-cover"
            />
            <div className="ml-12">
              <h2>{productName}</h2>
              <div className="mb-16">
                The raptor is the outcome of expensive rider input and
                represents what we believe a trail bike should really be.
                Wickedly fast, light-weight, equipped with bullet-proof
                components.
              </div>
              <div className="grid grid-cols-[1fr_1fr] gap-y-2">
                <div className="details">Quantity</div>
                <div className="justify-self-end">{quantity.toString()}</div>
                <div className="details">Price</div>
                <div className="justify-self-end">
                  {totalPriceWithOutVat.toLocaleString()}
                </div>
                <div className="details">Vat</div>
                <div className="justify-self-end">{vat.toLocaleString()}</div>
                <div className="details">Total Price</div>
                <div className="justify-self-end text-lg font-medium">
                  {totalPriceWithVat.toLocaleString()}
                </div>
              </div>
              <hr className="mt-0.5 border-t border-solid border-black" />
              <hr className="mt-0.5 border-t border-solid border-black" />
            </div>
          </div>

          <div className="mb-16">
            <h1>Select Your Bike Site</h1>
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
        </div>
        <button className="bg-[#f5f5f5] text-end">
          <Link to="/">Back</Link>
        </button>
        <button className="bg-[#47A000] text-start text-white text-lg font-medium">
          Confirm
        </button>
      </div>
    </div>
  );
}

function calVat(price, quantity) {
  return price * (7 / 100) * quantity;
}

function calTotalPrice(vat, price, quantity) {
  return price * quantity + vat;
}
