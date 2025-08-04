import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.tsx'



import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";

// Create a router with a single route
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    
  }
]);


createRoot(document.getElementById('root')!).render(
  <StrictMode>
<div className="max-w-3xl	mx-auto	my-0 p-4">
    <RouterProvider router={router} />
</div>

  </StrictMode>,
)
