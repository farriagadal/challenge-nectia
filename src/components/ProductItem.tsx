import axios from 'src/api'
import React, { useState } from 'react'
import { updateProduct, deleteProduct } from 'src/store/slices/productSlice'
import { useDispatch } from 'react-redux'


interface ProductProps {
  product: {
    id: number;
    name: string;
    description: string;
    price: number;
  }
}

export default function ProductItem({ product }: ProductProps) {
  const dispatch = useDispatch()
  const [isEditing, setIsEditing] = useState(false)
  const [editedProduct, setEditedProduct] = useState(product)

  const handleUpdate = async () => {
    axios.put(`/products/${product.id}`, editedProduct).then((response: any) => {
      dispatch(updateProduct(editedProduct))
      setIsEditing(false)
    }).catch((error: any) => {
      alert('Ha ocurrido un error al editar el Producto')
    })
  }

  const handleDelete = async () => {
    axios.put(`/products/${product.id}`, editedProduct).then((response: any) => {
      dispatch(deleteProduct(product.id))
      setIsEditing(false)
    }).catch((error: any) => {
      alert('Ha ocurrido un error al eliminar el Producto')
    })
  }

  return (
    <li className="border p-4 rounded-md shadow-md">
      {isEditing ? (
        <div className='flex gap-3'>
          <input
            className='p-2 border rounded w-full mb-2 sm:mb-0'
            value={editedProduct.name} 
            onChange={(e) => setEditedProduct(prev => ({ ...prev, name: e.target.value }))} 
          />
          <input
            className='p-2 border rounded w-full mb-2 sm:mb-0'
            value={editedProduct.description}
            onChange={(e) => setEditedProduct(prev => ({ ...prev, description: e.target.value }))}
          />
          <button className='bg-blue-500 text-white font-bold px-4 py-2 rounded hover:bg-blue-600' onClick={handleUpdate}>Guardar</button>
          <button className='bg-[#ddd] px-4 py-2 rounded' onClick={() => setIsEditing(false)}>Cancelar</button>
        </div>
      ) : (
        <div className='flex'>
          <div>
            <h3 className="text-xl mb-2 font-medium">{product.name}</h3>
            <p className="text-gray-600 mb-2">{product.description}</p>
            <span className="text-blue-500">${product.price}</span>
          </div>
          <div className='ml-auto grid gap-2'>
            <button className='bg-[#ddd] px-4 py-2 rounded' onClick={() => setIsEditing(true)}>Editar</button>
            <button className='bg-[#e52727] text-white px-4 py-2 rounded' onClick={handleDelete}>Borrar</button>    
          </div>
        </div>
      )}
    </li>
  )
}
