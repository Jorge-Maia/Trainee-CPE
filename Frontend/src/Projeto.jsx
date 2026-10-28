import './App.css';
import { Link } from 'react-router-dom';
import { projetos } from './projetoData';


function Projeto() { 
    return (
        <div className="pagina-cadastro">
            <header className="cabecalho">     
                <div className="logo-container">
                    <img src= "Imagens/cpe_cadastro_2.png" alt="Logo da CPE Jr." className="logo" />
                </div>
            </header>
            <main className='conteudo-principal-usuario'>
                <h1>
                    GERENCIAR PROJETOS
                </h1>
                
                <div className="lista-projetos">
                    {projetos.map((projeto) => (
                    <div key={projeto._id} className="linha-projeto">
                        <span className="nome-projeto">{projeto.name}</span>
                        <div className="icones-acao">
                            <button title="Editar">✏️</button>
                            <button title="Apagar">🗑️</button>
                        </div>
                    </div>
                    ))}
                </div>
                
                
                <div className='botoes-acao'>
                    <button className='botao-usuario'><Link to="/Home">Cancelar</Link></button>
                    <button className='botao-usuario'><Link to="/Home">Salvar</Link></button>
                </div>
            </main>
        
        </div>
    ) 
} 

export default Projeto;