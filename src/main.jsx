

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
/* Instalando o pacote de dependencias para criar as rotas */
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import App from './App.jsx'
import Error from './routes/Error.jsx'
import Home from './routes/Home.jsx'
import Aluno from './routes/Aluno.jsx'

/* Criando a função createBrowserRouter */
const router = createBrowserRouter([
  {
    /* CRIANDO OS ELEMENTOS PAI */
    path:'/', element: <App/>,
    errorElement: <Error/>,

    /* CRIANDO OS ELEMENTOS FILHO */
    children:[
      {path:'/', element: <Home/>},
      {path:'/Aluno', element: <Aluno/>}
    ]
  }

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Criando a desestruturação para que seja renderizada */}
    <RouterProvider router={router}/>
  </StrictMode>,
)
