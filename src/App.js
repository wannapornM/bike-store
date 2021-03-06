import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import SelectProductPanel from "./components/SelectProductPanel";
import OrderSummaryPanel from "./components/OrderSummaryPanel";

export default function App() {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <SelectProductPanel
              productName={productName}
              setProductName={setProductName}
              price={price}
              setPrice={setPrice}
              quantity={quantity}
              onChangeQuantity={setQuantity}
            />
          }
        />

        <Route
          path="/order-summary"
          element={
            <OrderSummaryPanel
              productName={productName}
              price={price}
              quantity={quantity}
              setProductName={setProductName}
              setPrice={setPrice}
              setQuantity={setQuantity}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
