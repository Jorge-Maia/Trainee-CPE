import './App.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

function Home() {
        return (
            <div className="pagina-home">
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

        </div>
            
    );
}

export default Home;