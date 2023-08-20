import { NextPageContext } from 'next'
import Router from 'next/router'
import axios from 'src/api'
import cookie from 'cookie'

const authMiddleware = async (ctx: NextPageContext) => {
  let token

  if (ctx.req) {
    const cookies = cookie.parse(ctx.req.headers.cookie || '')
    token = cookies.token
    console.log('token', token)
  } else {
    token = localStorage.getItem('token')
  }

  if (!token) {
    if (ctx.res) {
      ctx.res.writeHead(302, { Location: '/login' }).end()
    } else {
      Router.push('/login')
    }
    return
  }

  try {
    await axios.post('/validate-token', { token })
  } catch (err) {
    if (ctx.res) {
      ctx.res.writeHead(302, { Location: '/login' }).end()
    } else {
      Router.push('/login')
    }
  }
}

export default authMiddleware
