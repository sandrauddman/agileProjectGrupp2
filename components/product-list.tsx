import type { Product } from "@/app/types";

type Props = {
  products: Product[];
};
export default function ProductList({ products }: Props) {
  console.log("Products", products);
  return <h1>Produkt List</h1>;
}
