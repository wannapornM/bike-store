import Product from "./Product";

export default function SelectProduct() {
  return (
    <div className="max-w-full flex bg-white">
      <div className="w-full bg-lime-200"></div>

      <div>
        <div className="mx-16 mt-8">
          <h1>Select Your Bike Model</h1>
          <Product title={"Raptor Carbon 4"} price={"43,000"} />
          <Product title={"Raptor Metal"} price={"51,500"} />

          <div className="mb-16">
            <h1>Select Your Bike Size</h1>
            <div className="mb-4">
              Road bite sizing is argaubly more important than any other type of
              bicycle. The sizing will be also vary between different
              manufacturer. <span>Compare Raptor to other brand.</span>
            </div>
            <ul className="list-none">
              <li className="inline-flex justify-center items-center w-[35px] h-[35px] bg-white rounded-full mx-[10px] border-[1px] border-solid border-[#d9d9d9]">
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

          <div className="mb-16">
            <h1>Quantity</h1>
            <label className="block">Quantity</label>
            <input
              type="text"
              placeholder="1"
              className="w-[260px] h-[36px] rounded-[5px] border-[1px] border-solid border-[#e2e1e5] px-2"
            />
          </div>
        </div>
        <button className="bg-[#f5f5f5] text-end">{} Baht</button>
        <button className="bg-[#e2e2de] text-start text-[#b9b39d]">Next</button>
      </div>
    </div>
  );
}
