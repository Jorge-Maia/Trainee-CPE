function App() {

  function retornaButton() {
    alert('Botão clicado!')
  }
  return (
    <div>
      oiii
      <input type="text" placeholder="Digite seu nome" />
      <button 
      onClick={retornaButton}>
      Enviar
      </button> 
    </div>
        
  )
}

export default App
