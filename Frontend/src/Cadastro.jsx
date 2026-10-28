import { Link } from 'react-router-dom';
import './App.css';


function Cadastro() {
  return (
    <div className="pagina-cadastro">
      <header className="cabecalho">
        
        <div className="logo-container">
          <img src= "Imagens/cpe_cadastro_2.png" alt="Logo da CPE Jr." className="logo" />
        </div>
      </header>

      <main className="conteudo-principal">
        <h1 >
          CADASTRO
          </h1>
      
        <form className="formulario-cadastro">
          <input type="text" placeholder="Nome" /> <br />
          <input type="email" placeholder="Email" /> <br />
          <input type= "text" placeholder='Cargo' /> <br />
          <input type="password" placeholder="Senha" /> <br />
          <input type= "password" placeholder='Repetir Senha'/> <br /> 
          <p className="login-link">
            Já tem uma conta? Faça login <Link to="/login">aqui</Link>
          </p>
          <button type="submit"> 
            <Link to = "/login">CRIAR CONTA</Link>
          </button>
        </form>
      </main>
    </div>
  );
}

export default Cadastro;