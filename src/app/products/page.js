import ProductCard from "@/components/products/ProductCard";
import { Fragment } from "react";

export default async function Products() {
  const response = await fetch("http://localhost:5000/products", {
    cache: "no-store",
  });
  throw new Error("Hi!");
  const products = await response.json();
  return (
    <Fragment>
      <h2>Products</h2>
      <div className="grid grid-cols-4 gap-2 w-[90%] m-auto">
        {products.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </Fragment>
  );
}
