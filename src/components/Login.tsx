import React, { useState } from 'react'
import axios from 'src/api'
import Cookies from 'js-cookie'
import Router from 'next/router'

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: any) => {
    e.preventDefault()
    if (!username || !password) {
      alert('Please enter your username and password')
      return
    }
    axios.post('/login', { username, password }).then((response: any) => {
      const token = response.accessToken
      // Se guarda el token en las cookies
      if (token) {
        Cookies.set('token', token, { expires: 7 })  // El token expirará en 7 días.
        Router.push('/products')
      } else {
        alert('No se recibió un token válido.')
      }

    }).catch(error => {
      // Gestionar errores aquí
      console.error('Error during login:', error)
      alert('Error during login. Please try again.')
    })
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="p-8 bg-white w-96 shadow-lg rounded-lg">
        <h2 className="text-2xl mb-4">Iniciar sesión</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="username">
              Nombre de usuario
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Introduce tu nombre de usuario"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="password">
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Introduce tu contraseña"
            />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white font-bold px-4 py-2 rounded hover:bg-blue-600">
            Entrar
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
