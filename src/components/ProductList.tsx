import api from 'src/api' 
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
      api.post('/products', newProduct).then((response: any) => {
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
    <div className="px-4 py-8">
      <h2 className="text-3xl font-bold my-8">Lista de Productos</h2>

      <div className="mb-4 flex-col gap-3 sm:flex sm:flex-row border p-4 rounded-md shadow-md">
        <label className="block w-full">
          <span className='block text-sm font-medium mb-2'>Nombre del producto</span>
          <input
            className='p-2 border rounded w-full mb-2 sm:mb-0'
            value={newProduct.name} 
            onChange={(e) => setNewProduct(prev => ({ ...prev, name: e.target.value }))} 
            placeholder="Nombre del producto"
          />
        </label>
        <label className="block w-full">
          <span className='block text-sm font-medium mb-2'>Descripción del producto</span>
          <input
            className='p-2 border rounded w-full mb-2 sm:mb-0'
            value={newProduct.description}
            onChange={(e) => setNewProduct(prev => ({ ...prev, description: e.target.value }))}
            placeholder="Descripción del producto"
          />
        </label>
        <label className="block w-full">
          <span className='block text-sm font-medium mb-2'>Precio ($)</span>
          <input
            className='p-2 border rounded w-full mb-2 sm:mb-0'
            type="number" 
            value={newProduct.price}
            onChange={(e) => setNewProduct(prev => ({ ...prev, price: parseInt(e.target.value) }))}
            placeholder="Precio"
          />
        </label>
        <button onClick={handleAdd} className='bg-blue-500 text-white font-bold px-4 py-2 rounded hover:bg-blue-600 w-full sm:w-auto self-end'>Crear</button>
      </div>
      <ul className="space-y-4">
        {productList.map((product: any) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </ul>
    </div>
  )
}
