import './App.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';
import { useState } from 'react';
import Modal from './Modal.jsx';

function Home() {
    const [modalLoginAberto, setModalLoginAberto] = useState(false);
        return (
            <div className="pagina-home">
                <header className="logo-container-home">
                    
                        <img src="Imagens/cpe_jr_cover.jpg" alt="Logo da CPE Jr." className="logo" /> 
                    <nav className="menu-opções">
                        <ul>

                            <li><Link to="/usuario">Usuário</Link></li>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#perfil">Perfil</a></li>
                            <li><a href="#sair">Sair</a></li>

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
                                <h2>Sua presença é importante!</h2>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card-carrossel">
                                <h2>tudo bem!</h2>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card-carrossel">
                                <h2>Sua presença é importante!</h2>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card-carrossel">
                                <h2>Sua presença é importante para nós!</h2>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card-carrossel">
                                <h2>Ola!</h2>
                            </div>
                        </SwiperSlide>

                        </Swiper>
                <button className="custom-next">❯</button>
            </div>
            <div className='relogio'>
                <h2> 3:00h</h2>
            </div>
            <div className='margem-tabela'>
                <button className='botao-home' onClick={() => setModalLoginAberto(true)}>Fazer Login</button>
                <table className='tabela-membros'>
                    <thead>
                        <tr>
                            <th>Membro</th>
                            <th>Modelo</th>
                            <th>Horário</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            
                            <td className='info-membro'>
                                    <img className='foto-perfil' src='Imagens/Foto-perfil.jpeg' ></img>
                                    <span>Nome Completo do Membro</span>
                            </td>
                            <td> Presencial</td>
                            <td> Chegada</td>
                        </tr>
                       
                    </tbody>
                </table>
                
                
            </div>
            {modalLoginAberto && (
                <Modal
                    titulo="Você deseja mesmo fazer login?"
                    texto="Tem certeza que você deseja fazer esse login?"
                    textoBotao="CANCELAR"
                    textoBotao2="LOGIN"
                    aoFechar={() => setModalLoginAberto(false)}
                    aoConfirmar={() => setModalLoginAberto(false)}
                    aoSegundoBotao={() => setModalLoginAberto(false)}
                />
            )}              
        </div>
            
    );
}

export default Home;