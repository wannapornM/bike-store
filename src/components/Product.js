export default function Product({ title, price }) {
  const imageUrl = new URL("../../assets/cat4.png", import.meta.url);

  return (
    <div className="grid grid-cols-[200px_1fr] border-[1px] border-solid border-[#dedede] p-6 mb-16 rounded-md ">
      <img
        src={imageUrl}
        alt="Rider Bike"
        className="w-full h-[140px] object-cover self-center"
      />
      <div className="px-8">
        <div className="flex justify-between mb-4">
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
