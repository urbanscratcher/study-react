import { Link } from "react-router-dom";

const PRODUCTS = [
  { id: "p1", title: "Products1" },
  { id: "p2", title: "Products2" },
  { id: "p3", title: "Products3" },
];

function ProductsPage() {
  return (
    <>
      <h1>The Products Page</h1>
      <ul>
        {PRODUCTS.map((prod) => (
          <li key={prod.id}>
            <Link to={`${prod.id}`}>Product {prod.id}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ProductsPage;
