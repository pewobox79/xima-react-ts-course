
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import { RouterProvider } from 'react-router-dom'
import { mainRouter } from './router/mainRouter.jsx'

createRoot(document.getElementById('root')).render(
  <RouterProvider router={mainRouter} />

)
