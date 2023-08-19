
export default function ProductList({ products }: any) {
  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">Lista de Productos</h2>
      <ul className="space-y-4">
        {products.map((product: any) => (
          <li key={product.id} className="border p-4 rounded-md">
            <h3 className="text-xl mb-2">{product.name}</h3>
            <p className="text-gray-600 mb-2">{product.description}</p>
            <span className="text-blue-500">${product.price}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
