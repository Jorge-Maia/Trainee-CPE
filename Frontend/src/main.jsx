import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cadastro from './Cadastro.jsx'
import Login from './Login.jsx'
import Home from './Home.jsx'
import Usuario from './Usuario.jsx'
import Projeto from './Projeto.jsx'
import Perfil from './Perfil.jsx'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'

const queryClient = new QueryClient({defaultOptions: {queries: {retry: false}}});


ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          {/* Define a rota para a página de cadastro (raiz do site "/") */}
          <Route path="/" element={<Login />} />
          
          {/* Define a rota para a página de login ("/login") */}
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/home" element={<Home />} />
          <Route path="/usuario" element={<Usuario />} />
          <Route path="/projeto" element={<Projeto />} />
          <Route path="/perfil" element={<Perfil />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </QueryClientProvider>
)