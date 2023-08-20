import { NextApiRequest, NextApiResponse } from 'next'
import jwt from 'jsonwebtoken'

const products = [
  { id: 1, name: 'Producto 1', description: 'Descripción del producto 1', price: '10.00' },
  { id: 2, name: 'Producto 2', description: 'Descripción del producto 2', price: '20.00' },
  { id: 3, name: 'Producto 3', description: 'Descripción del producto 3', price: '30.00' },
]

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await jwt.verify(req.headers.authorization ?? '', `${process.env.JWT_SECRET}`)
  } catch (error) {
    return res.status(401).json({ status: 'error', message: 'Invalid Token' })
  }

  if (req.method === 'GET') {
    res.status(200).json({ status: 'success', data: products })
  }

  if (req.method === 'POST') {
    res.status(200).json({ status: 'success', data: req.body })
  }

  if (req.method === 'PUT') {
    res.status(200).json({ status: 'success', data: req.body })
  }

  if (req.method === 'DELETE') {
    res.status(200).json({ status: 'success', message: 'Product deleted' })
  }

  return res.status(405).end('Method Not Allowed')
}
