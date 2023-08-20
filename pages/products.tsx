import ProductList from 'src/components/ProductList'
import authMiddleware from 'src/middlewares/authMiddleware'
import api from 'src/api'
import { useEffect } from 'react'
import { setProducts } from 'src/store/slices/productSlice'
import { useDispatch } from 'react-redux'

export default function ProductsPage() {
  const dispatch = useDispatch()

  useEffect(() => {
    api.get('/products').then((response: any) => {
      dispatch(setProducts(response))
    })
  }, [])

  return (
    <div className="min-h-screen max-w-[800px] mx-auto">
      <ProductList />
    </div>
  )
}

export const getServerSideProps = async (ctx: any) => {
  await authMiddleware(ctx)
  return { props: {} }
}
