import './App.css';
import { Link } from 'react-router-dom';
import { useGetPerfil, useUpdateUser } from './Hooks/user';

function Perfil() {
    const { data: perfil, refetch } = useGetPerfil();
    const idUsuario = perfil?._id;

    // depois de salvar a foto, busca o perfil de novo para mostrar a foto nova
    const { mutate: atualizarUsuario } = useUpdateUser({ onSuccess: () => refetch() });

    // transforma a imagem escolhida em texto (base64) e manda para o backend
    function trocarFoto(evento) {
        const leitor = new FileReader();
        leitor.onload = () => atualizarUsuario({ id: idUsuario, body: { foto: leitor.result } });
        leitor.readAsDataURL(evento.target.files[0]);
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
                    PERFIL
                </h1>

                <img className='foto-perfil foto-perfil-grande' src={perfil?.foto || undefined} />
                <input type="file" accept="image/*" onChange={trocarFoto} />

                <form className="formulario-usuario">
                    <input type="text" value={perfil?.nome || ''} readOnly /> <br />
                    <input type="text" value={perfil?.email || ''} readOnly /> <br />
                    <input type="text" value={perfil?.cargo || ''} readOnly /> <br />
                    <input type="text" value={perfil?.status || ''} readOnly /> <br />
                </form>
                <div className='botoes-acao'>
                <button className='botao-usuario'><Link to="/Home">Voltar</Link></button>
                </div>
            </main>

        </div>
    )
}

export default Perfil;
