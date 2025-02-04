import ProductCard from "@/components/products/ProductCard";
import Link from "next/link";
import { Fragment } from "react";

export default async function HomePage() {
  const response = await fetch("http://localhost:5000/products", {
    // cache: "force-cache",
    next: { revalidate: 30 }, // standard time 30s
  });
  const products = await response.json();
  console.log(products);
  return (
    <Fragment>
      <p>Home Page</p>

      <div className="grid grid-cols-4 gap-2 w-[90%] m-auto">
        {products.slice(0, 4).map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
      <div className="text-center my-4">
        <button className="px-4 py-2 rounded-sm bg-violet-500 hover:bg-violet-600 transition-all text-white">
          <Link href="/products">All Products</Link>
        </button>
      </div>
    </Fragment>
  );
}
