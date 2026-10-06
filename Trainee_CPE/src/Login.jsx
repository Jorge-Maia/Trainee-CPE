import './App.css';


function App() {
    return (
        <div className='background-login'>
            <img src= "Imagens/cpe_jr_cover.jpg" alt="Logo da CPE Jr." className="logo-login" />
            <main className='conteudo-principal'>
                
                    <form className="formulario-cadastro-login">
                        <div className='grupo-input'>
                           <label>E-mail: </label>
                           <hr className='linha-divisor' />
                           <input type="email" placeholder="Digite seu e-mail" /> <br />
                        </div>
                        
                        <div className='grupo-input'>
                           <label>Senha: </label>
                           <hr className='linha-divisor' />
                           <input type="password" placeholder="Digite sua senha" /> <br />
                        </div>
                        <button type="submit" className='botao-entrar'>Entrar</button> <br />
                        <button type="submit" className='botao-cadastrar'>Fazer Cadastro</button>
                    </form>
                            
            </main>
        </div>
    );
}

export default App;