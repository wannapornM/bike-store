export default function Product(props) {
  const { selectedProduct, title, price, border } = props;

  const imageUrl = new URL("../../assets/cat4.png", import.meta.url);

  return (
    <div
      className={`p-3 xl:grid-cols-[200px_1fr] ${border[0]} border-solid ${border[1]} mb-16 rounded-md md:grid md:grid-cols-[250px_1fr] md:items-center`}
      onClick={selectedProduct}
    >
      <img
        src={imageUrl}
        alt="Rider Bike"
        className="mb-4 w-full h-[140px] object-cover self-center md:mb-0"
      />
      <div className="md:pl-8">
        <div className="flex justify-between items-end mb-4">
          <div className="text-xl font-semibold">{title}</div>
          <div>From {price} Baht</div>
        </div>
        <div>
          The raptor is the outcome of expensive rider input and represents what
          we believe a trail bike should really be. Wickedly fast, light-weight,
          equipped with bullet-proof components.
        </div>
      </div>
    </div>
  );
}
