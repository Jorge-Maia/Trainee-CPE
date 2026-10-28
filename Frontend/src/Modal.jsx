function Modal({ titulo, texto, textoBotao, textoBotao2, aoFechar, aoConfirmar, aoSegundoBotao }) {
    return (
        <div className="modal-fundo" onClick={aoFechar}>
            <div className="modal-caixa" onClick={(e) => e.stopPropagation()}>
                <button className="modal-fechar" onClick={aoFechar}>✕</button>
                <h2>{titulo}</h2>
                <p>{texto}</p>

                <div className="modal-botoes">
                    <button className="modal-botao" onClick={aoConfirmar}>
                        {textoBotao}
                    </button>

                    {textoBotao2 && (
                        <button className="modal-botao-secundario" onClick={aoSegundoBotao}>
                            {textoBotao2}
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Modal;