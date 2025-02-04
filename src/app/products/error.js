"use client";

export default function ProductsError({ error, reset }) {
  return (
    <div>
      <p className="text-2xl text-center text-red-500">Something went wrong!</p>
      <p className="text-2xl text-center text-red-500">{error.message}</p>
      <div className="text-center">
        <button
          onClick={() => reset()}
          className="px-4 py-2 rounded-md text-white bg-red-500 hover:bg-red-600  transition-all"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
