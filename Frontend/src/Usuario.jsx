import './App.css';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useGetPerfil, useUpdateUser } from './Hooks/user';

function Usuario() {
    const navigate = useNavigate();
    const { data: perfil } = useGetPerfil();

    const { handleSubmit, register } = useForm({
        values: perfil ? { nome: perfil.nome, cargo: perfil.cargo } : undefined,
    });

    const { mutate: atualizarUsuario } = useUpdateUser({
        onSuccess: () => navigate('/home'),
    });

    function handleSalvar(data) {
        atualizarUsuario({ id: perfil._id, body: data });
    }

    return (
        <div className="pagina-cadastro">
            <header className="cabecalho">
                <div className="logo-container">
                    <img src= "Imagens/cpe_cadastro_2.png" alt="Logo da CPE Jr." className="logo" />
                </div>
            </header>
            <main className='conteudo-principal-usuario'>
                <h1>
                    EDITAR USUÁRIO
                </h1>

                <form className="formulario-usuario">
                    <input type="text" placeholder="Nome" {...register("nome")} /> <br />
                    <input type= "text" placeholder='Cargo' {...register("cargo")} /> <br />
                </form>
                <div className='botoes-acao'>
                <button className='botao-usuario'><Link to="/Home">Cancelar</Link></button>
                <button className='botao-usuario' onClick={handleSubmit(handleSalvar)}>Salvar</button>
                </div>
            </main>

        </div>
    )
}

export default Usuario;
