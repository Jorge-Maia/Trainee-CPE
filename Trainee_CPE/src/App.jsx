import './App.css';


function App() {
  return (
    <div className="pagina-cadastro">
      {/* 1. Cabeçalho */}
      <header className="cabecalho">
        
        <div className="logo-container">
          <img src= "Imagens/cpe_cadastro_2.png" alt="Logo da CPE Jr." className="logo" />
        </div>
      </header>

      {/* 2. Corpo / Container Principal */}
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
            Já tem uma conta? Faça login <a href="/login">aqui</a>
          </p>
          <button type="submit">CRIAR CONTA</button>
        </form>
      </main>
    </div>
  );
}

export default App;