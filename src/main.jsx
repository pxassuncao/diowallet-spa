import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Signin from './pages/Signin.jsx';
import Cadastro from './pages/Cadastro.jsx';

function ErrorPage() {
  return (
    <div>
      <h1>404 - Página não encontrada</h1>
      <p>Desculpe, a página que você procurou não existe.</p>
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/signin",
    element: <Signin/>,
    //errorElement:<div>Ops! Página não encontrada aqui</div>
  },
  {
    path: "/cadastro",
    element: <Cadastro/>,
    //errorElement:<div>Ops! Página não encontrada</div>
  },
  {
    path: "*",
    element: <ErrorPage />, // Exibe a página de erro para rotas inexistentes
  },
  
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);

