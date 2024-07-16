import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './router/Router.jsx'
import "./styles/index.css"
import { PaginationProvider } from './context/PaginationContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <PaginationProvider>
      <RouterProvider router={router} />

    </PaginationProvider>
)
