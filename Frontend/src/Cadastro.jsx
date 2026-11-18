import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useCreateUser } from './Hooks/user';
import './App.css';


function Cadastro() {
  const navigate = useNavigate();
  const { handleSubmit, register } = useForm();
  const { mutate: criarUsuario } = useCreateUser({
    onSuccess: () => navigate('/login'),
  });

  function handleCadastro(data) {
    const { repetirSenha, ...usuario } = data;
    criarUsuario({ ...usuario, status: 'ativo' });
  }

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

        <form className="formulario-cadastro" onSubmit={handleSubmit(handleCadastro)}>
          <input type="text" placeholder="Nome" {...register("nome")} /> <br />
          <input type="email" placeholder="Email" {...register("email")} /> <br />
          <input type= "text" placeholder='Cargo' {...register("cargo")} /> <br />
          <input type="password" placeholder="Senha" {...register("senha")} /> <br />
          <input type= "password" placeholder='Repetir Senha' {...register("repetirSenha")} /> <br />
          <p className="login-link">
            Já tem uma conta? Faça login <Link to="/login">aqui</Link>
          </p>
          <button type="submit">
            CRIAR CONTA
          </button>
        </form>
      </main>
    </div>
  );
}

export default Cadastro;
