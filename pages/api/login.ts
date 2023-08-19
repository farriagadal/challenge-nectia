import { NextApiRequest, NextApiResponse } from 'next'
import jwt from 'jsonwebtoken'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    try {
      const token = jwt.sign({}, `${process.env.JWT_SECRET}`, { expiresIn: '30m' })
      return res.status(200).json({ status: 'success', data: {
        accessToken: token,
        email: 'jhon@email.com',
        name: 'Jhon Doe'
      }})

    } catch (error: any) {
      return res.status(500).json({ status: 'error', message: error.message })
    }

  } else {
    res.setHeader('Allow', 'POST')
    res.status(405).end('Method Not Allowed')
  }
}
