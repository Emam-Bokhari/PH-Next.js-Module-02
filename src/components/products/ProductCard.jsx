import Image from "next/image";

export default function ProductCard({ product }) {
  const { image, productName, price, category, brand } = product;
  console.log(image, "image");
  console.log(productName, "product name");
  return (
    <div className="w-full border-2 border-gray-500 rounded-sm">
      {/* image */}
      <div>
        <Image src={image} alt={productName} width={500} height={500} />
      </div>
      {/* content */}
      <div>
        <h2>{productName}</h2>
        <div className="flex items-center justify-between">
          <p>{category}</p>
          <p>{brand}</p>
        </div>
        <p>{price}</p>
      </div>
    </div>
  );
}
