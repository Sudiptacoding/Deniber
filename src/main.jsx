import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import AuthContext from './context/AuthContext.jsx';
import router from './routers/Routes.jsx';
import {RouterProvider,} from "react-router-dom";


import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from 'react-hot-toast';
const queryClient = new QueryClient()



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContext>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
      <Toaster/>
    </AuthContext>
  </StrictMode>,
)
