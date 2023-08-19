import ProductList from 'src/components/ProductList'
import authMiddleware from 'src/middlewares/authMiddleware'

export default function ProductsPage() {
  const products = [
    { id: 1, name: 'Producto 1', description: 'Descripción del producto 1', price: '10.00' },
    { id: 2, name: 'Producto 2', description: 'Descripción del producto 2', price: '20.00' },
    { id: 3, name: 'Producto 3', description: 'Descripción del producto 3', price: '30.00' },
  ]

  return (
    <div className="min-h-screen bg-gray-100">
      <ProductList products={products} />
    </div>
  )
}


export const getServerSideProps = async (ctx: any) => {
  await authMiddleware(ctx)
  return { props: {} }
}
