import './App.css';
import { Link } from 'react-router-dom';

function Usuario() { 
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
                    <input type="text" placeholder="Nome" /> <br />
                    <input type= "text" placeholder='Cargo' /> <br />
                </form>
                <div className='botoes-acao'>
                <button className='botao-usuario'><Link to="/Home">Cancelar</Link></button>
                <button className='botao-usuario'><Link to="/Home">Salvar</Link></button>
                </div>
            </main>
        
        </div>
    ) 
} 

export default Usuario;