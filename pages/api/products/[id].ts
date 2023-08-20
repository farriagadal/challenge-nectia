import { NextApiRequest, NextApiResponse } from 'next'
import jwt from 'jsonwebtoken'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await jwt.verify(req.headers.authorization ?? '', `${process.env.JWT_SECRET}`)
  } catch (error) {
    return res.status(401).json({ status: 'error', message: 'Invalid Token' })
  }

  if (req.method === 'PUT') {
    res.status(200).json({ status: 'success', data: req.body })
  }

  if (req.method === 'DELETE') {
    res.status(200).json({ status: 'success', message: 'Product deleted' })
  }

  return res.status(405).end('Method Not Allowed')
}
