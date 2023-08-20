import axios from 'src/api' 
import React, { useState } from 'react'
import ProductItem from './ProductItem'
import { useSelector } from 'react-redux'
import { addProduct } from 'src/store/slices/productSlice'
import { useDispatch } from 'react-redux'


export default function ProductList() {
  const dispatch = useDispatch()
  const { products: productList } = useSelector((state: any) => state.productSlice)
  const [newProduct, setNewProduct] = useState({ name: '', description: '', price: 0 })

  const handleAdd = async () => {
    try {
      axios.post('/products', newProduct).then((response: any) => {
        dispatch(addProduct({ id: productList.length + 1, ...newProduct }))
        setNewProduct({ name: '', description: '', price: 0 })
      }).catch((error: any) => {
        alert(error.message)
      })
    } catch (error) {
      console.error('Error creating product:', error)
    }
  }

  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold mb-5">Lista de Productos</h2>

      <div className="mb-4 flex gap-3">
        <input
          className='p-2 border border-blue-500 border-opacity-75 rounded'
          value={newProduct.name} 
          onChange={(e) => setNewProduct(prev => ({ ...prev, name: e.target.value }))} 
          placeholder="Nombre del producto"
        />
        <input
          className='p-2 border border-blue-500 border-opacity-75 rounded'
          value={newProduct.description}
          onChange={(e) => setNewProduct(prev => ({ ...prev, description: e.target.value }))}
          placeholder="Descripción del producto"
        />
        <input
          className='p-2 border border-blue-500 border-opacity-75 rounded'
          type="number" 
          value={newProduct.price}
          onChange={(e) => setNewProduct(prev => ({ ...prev, price: parseInt(e.target.value) }))}
          placeholder="Precio"
        />
        <button onClick={handleAdd} className='bg-blue-500 text-white font-bold px-4 py-2 rounded hover:bg-blue-600'>Crear</button>
      </div>

      <ul className="space-y-4">
        {productList.map((product: any) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </ul>
    </div>
  )
}
