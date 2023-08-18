import { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'
import jwt from 'jsonwebtoken'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  console.log(req.body)
  if (req.method === 'POST') {
    try {
      const token = jwt.sign({}, `${process.env.JWT_SECRET}`, { expiresIn: '10m' })
      const response = await axios.post(`${process.env.API_URL}`, req.body, {
        headers: {
          'Authorization': token
        }
      })
      return res.status(200).json({ status: 'success', data: response.data })

    } catch (error: any) {
      return res.status(500).json({ status: 'error', message: error.message })
    }

  } else {
    res.setHeader('Allow', 'POST')
    res.status(405).end('Method Not Allowed')
  }
}
