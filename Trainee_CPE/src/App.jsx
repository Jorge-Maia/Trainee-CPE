import './App.css'
import { Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
function App() {

  function retornaButton() {
    alert('Botão clicado!')
  }
  return (
    <div>
      <div className="div-teste">
      oiii
      </div>
      <div className= 'div-botao'>
      <input type="text" placeholder="Digite seu nome" />
      <button 
      className='botao-teste'
      onClick={retornaButton}>
      Enviar
      </button>
      </div> 
      <div>
        <Button type= 'primary' size = 'large' shape ='square' icon ={<DownloadOutlined/>} >Botão do Ant Design</Button>
      </div>
    </div>
        
  )
}

export default App
