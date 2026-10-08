import './App.css';

function Home() {
    return (
        <header className="logo-container-home">
            
                <img src="Imagens/cpe_jr_cover.jpg" alt="Logo da CPE Jr." className="logo" /> 
                <nav className="menu-opções">
                    <ul>

                        <li><a href="#usuario">Usuário</a></li>

                        <li><a href="#home">Home</a></li>

                        <li><a href="#perfil">Perfil</a></li>

                        <li><a href="#sair">Sair</a></li>

                    </ul>
                </nav>
        </header>
    );
}

export default Home;