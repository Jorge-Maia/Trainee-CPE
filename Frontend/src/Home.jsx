import './App.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Link, useNavigate } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';
import { useState, useEffect } from 'react';
import Modal from './Modal.jsx';
import { useGetPerfil } from './Hooks/user';
import { useGetSessoes, useCreateSessao, useDeleteSessao } from './Hooks/sessoes';

function Home() {
    const [modalLoginAberto, setModalLoginAberto] = useState(false);

    const { data: perfil } = useGetPerfil();
    const { data: sessoes, refetch } = useGetSessoes();
    const idUsuario = perfil?._id; // fica undefined até o /perfil responder

    // depois de logar ou deslogar: fecha o modal e busca a tabela de novo
    function aoTerminar() {
        setModalLoginAberto(false);
        refetch();
    }
    const { mutate: criarSessao } = useCreateSessao({ onSuccess: aoTerminar });
    const { mutate: deletarSessao } = useDeleteSessao({ onSuccess: aoTerminar });

    // procura, entre as sessões, a do usuário logado
    const minhaSessao = sessoes?.find((sessao) => sessao.id_usuario?._id === idUsuario);

    function logar(modelo) {
        criarSessao({ id_usuario: idUsuario, modelo });
    }

    function deslogar() {
        deletarSessao(idUsuario);
    }

    const navigate = useNavigate();

    // apaga o token e volta para o login (o usuário continua no banco)
    function encerrarLogin() {
        localStorage.removeItem('token');
        navigate('/login');
    }

    function sair(evento) {
        evento.preventDefault(); // impede o link "#sair" de mudar a URL
        if (minhaSessao) {
            // só tira o token DEPOIS que o backend apagar a sessão
            deletarSessao(idUsuario, { onSettled: encerrarLogin });
        } else {
            encerrarLogin();
        }
    }

    // "agora" muda a cada 1 segundo, fazendo a tela redesenhar o relógio
    const [agora, setAgora] = useState(Date.now());
    useEffect(() => {
        const intervalo = setInterval(() => setAgora(Date.now()), 1000);
        return () => clearInterval(intervalo);
    }, []);

    // sem sessão: mostra 3:00h; com sessão: 3h menos o tempo desde a chegada
    let relogio = '3:00h';
    if (minhaSessao) {
        const restante = Math.max(0, 3 * 60 * 60 * 1000 - (agora - new Date(minhaSessao.createdAt)));
        const horas = Math.floor(restante / 3600000);
        const minutos = String(Math.floor(restante / 60000) % 60).padStart(2, '0');
        relogio = `${horas}:${minutos}h`;
    }
        return (
            <div className="pagina-home">
                <header className="logo-container-home">
                    
                        <img src="Imagens/cpe_jr_cover.jpg" alt="Logo da CPE Jr." className="logo" /> 
                    <nav className="menu-opções">
                        <ul>

                            <li><Link to="/usuario">Usuário</Link></li>
                            <li><a href="#home">Home</a></li>
                            <li><Link to="/perfil">Perfil</Link></li>
                            <li><Link to="/projeto">Projetos</Link></li>
                            <li><a href="#sair" onClick={sair}>Sair</a></li>

                        </ul>
                    </nav>
                </header>
            
            <div className="carrossel-wrapper">
                <button className="custom-prev"> ❮ </button> 
                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={20}
                        slidesPerView={3}
                        navigation={{nextEl: '.custom-next',
                                    prevEl: '.custom-prev'}}
                        loop={true}
                        >
                        <SwiperSlide>
                            <div className="card-carrossel">
                                <h2>Seja bem-vindo!</h2>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card-carrossel">
                                <h2>Contamos com seu trabalho!</h2>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card-carrossel">
                                <h2> A câmera é obrigatória!</h2>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card-carrossel">
                                <h2>Não esqueça de fazer login!</h2>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card-carrossel">
                                <h2>Sua presença é importante</h2>
                            </div>
                        </SwiperSlide>

                        </Swiper>
                <button className="custom-next">❯</button>
            </div>
            <div className='relogio'>
                <h2> {relogio} </h2>
            </div>
            <div className='margem-tabela'>
                <button className='botao-home' onClick={() => setModalLoginAberto(true)}>
                    {minhaSessao ? 'Deslogar' : 'Fazer Login'}
                </button>
                <table className='tabela-membros'>
                    <thead>
                        <tr>
                            <th>Membro</th>
                            <th>Modelo</th>
                            <th>Horário</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sessoes?.map((sessao) => (
                            <tr key={sessao._id}>

                                <td className='info-membro'>
                                        <img className='foto-perfil' src={sessao.id_usuario?.foto || undefined} ></img>
                                        <span>{sessao.id_usuario?.nome}</span>
                                </td>
                                <td> {sessao.modelo}</td>
                                <td> {new Date(sessao.createdAt).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}</td>
                            </tr>
                        ))}

                    </tbody>
                </table>
                
                
            </div>
            {modalLoginAberto && !minhaSessao && (
                <Modal
                    titulo="Você deseja mesmo fazer login?"
                    texto="Escolha como você vai trabalhar hoje:"
                    textoBotao="PRESENCIAL"
                    textoBotao2="ONLINE"
                    aoFechar={() => setModalLoginAberto(false)}
                    aoConfirmar={() => logar('Presencial')}
                    aoSegundoBotao={() => logar('Online')}
                />
            )}
            {modalLoginAberto && minhaSessao && (
                <Modal
                    titulo="Você deseja mesmo deslogar?"
                    texto="Tem certeza que você deseja encerrar sua sessão?"
                    textoBotao="CANCELAR"
                    textoBotao2="DESLOGAR"
                    aoFechar={() => setModalLoginAberto(false)}
                    aoConfirmar={() => setModalLoginAberto(false)}
                    aoSegundoBotao={deslogar}
                />
            )}              
        </div>
            
    );
}

export default Home;