import ProductCard from "@/components/products/ProductCard";
import { Fragment } from "react";

export default async function HomePage() {
  const response = await fetch("http://localhost:5000/products");
  const products = await response.json();
  console.log(products);
  return (
    <Fragment>
      <p>Home Page</p>

      <div className="grid grid-cols-4 gap-2 w-[90%] m-auto">
        {products.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </Fragment>
  );
}
