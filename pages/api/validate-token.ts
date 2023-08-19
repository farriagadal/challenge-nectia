import { NextApiRequest, NextApiResponse } from 'next'
import jwt from 'jsonwebtoken'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    try {
      const decodedToken = await jwt.verify(req.body.token, `${process.env.JWT_SECRET}`)
      console.log('decodedToken', decodedToken)

      // Si llega aquí, el token es válido
      return res.status(200).json({ status: 'success' })
    } catch (error) {
      // Si llega aquí, la verificación falló
      console.error('Token verification failed:', error)
      return res.status(401).json({ status: 'error', message: 'Invalid Token' })
    }
  } else {
    res.setHeader('Allow', 'POST')
    res.status(405).end('Method Not Allowed')
  }
}
