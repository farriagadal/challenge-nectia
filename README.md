# CHALLENGE NECTIA 🚀

## 📌 Descripción

Este proyecto consiste en una aplicación React que simula un backend y un frontend con autenticación y operaciones CRUD.

## 🌟 Características Principales

### Simulación de Backend con Next.js

- **API de Usuarios (Login)**: Retorna un token JWT al recibir por POST un `user` y `password`.
- **API de Validación (validate-token)**: Se utiliza para validar el token del frontend.
- **API de Productos (products)**: Permite realizar operaciones CRUD sobre productos.
- **API de Producto Individual (products_id)**: Permite realizar operaciones sobre un producto específico mediante su ID.

### Frontend

- **Vista de Login**: Consume el servicio dummy que retorna el token JWT. Recibe `user` y `password`.
- **Vista Principal**: Tras autenticarse, se redirige a esta vista donde se encuentra un listado de productos y en donde se consumen los servicios CRUD.
- **Cabecera de Autorización**: Cada petición realizada a los servicios incluye en la cabecera el parámetro “Authorization“ con el valor del token retornado por el servicio de usuario.

## 🛠 Requisitos de Instalación

- Node.js v14 o superior.
- Gestor de paquetes: npm o yarn.

## 🚀 Instrucciones de Instalación y Ejecución

1. **Clonación**: Clona este repositorio en tu máquina local usando:
```bash
git clone https://github.com/farriagadal/challenge-nectia.git
```

2. **Navegación**: Abre una terminal y navega hasta la carpeta raíz del proyecto.
```bash
cd challenge-nectia
```

3. **Instalación de Dependencias**: Ejecuta el siguiente comando:
```bash
npm install
```
   Si prefieres Yarn, usa:
```bash
yarn install
```

4. **Ejecución Local**: Inicia el servidor de desarrollo:
```bash
npm run dev
```
   O con Yarn:
```bash
yarn dev
```

5. **Visualización**: Abre tu navegador y visita `http://localhost:3000` para disfrutar de la aplicación en funcionamiento.


6. **Demo**: https://challenge-nectia.vercel.app/

---
