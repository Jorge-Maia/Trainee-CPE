import './App.css';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useLogin } from './Hooks/user';

function Login() {
  // hooks dentro do componente
  const navigate = useNavigate();
  const { handleSubmit, register, formState: { errors } } = useForm();
  const { mutate: login, isPending } = useLogin();

  // roda só se o formulário passar na validação
  function handleLogin(data) {
    login(data, {
      onSuccess: () => navigate('/home'),
    });
  }

  return (
    <div className='background-login'>
      <img src="Imagens/cpe_jr_cover.jpg" alt="Logo da CPE Jr." className="logo-login" />
      <main className='conteudo-principal'>

        <form className="formulario-cadastro-login" onSubmit={handleSubmit(handleLogin)}>
          <div className='grupo-input'>
            <label>E-mail: </label>
            <hr className='linha-divisor' />
            <input
              type="email"
              placeholder="Digite seu e-mail"
              {...register("email", { required: true })}
            /> <br />
          </div>

          <div className='grupo-input'>
            <label>Senha: </label>
            <hr className='linha-divisor' />
            <input
              type="password"
              placeholder="Digite sua senha"
              {...register("senha", { required: true })}
            /> <br />
          </div>

          <button type="submit" className='botao-entrar' disabled={isPending}>
            Entrar
          </button> <br />

          <button
            type="button"
            className='botao-cadastrar'
            onClick={() => navigate('/cadastro')}
          >
            Fazer Cadastro
          </button>
        </form>

      </main>
        </div>
    );
}

export default Login;