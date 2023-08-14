import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import CarrouselImg01 from '../../imgs/Carrousel_01.png'
import CarrouselImg02 from '../../imgs/Carrousel_02.png'
import CarrouselImg03 from '../../imgs/Carrousel_03.png'

//Carrosel de imagem + legenda da tela de login

function CarouselImg() {
  return (
    <span className='backgroundDecoration'>
      <Carousel data-bs-theme="dark">
        <Carousel.Item >
          <br /><br />
          <h2>Realize e acompanhe os agendamentos de usuários</h2>
          <h6>Receba os pacientes e agende seus atendimentos de forma facilitada , visualizando informações e modificando, quando necessário</h6>
          <br /><br /><br /><br />
          <img
            className="d-block w-100"
            src={CarrouselImg01}
            alt="..."
          />
        </Carousel.Item>
        <Carousel.Item >
          <br /><br />
          <h2>Realize e acompanhe os agendamentos de usuários 2</h2>
          <h6>Receba os pacientes e agende seus atendimentos de forma facilitada , visualizando informações e modificando, quando necessário 2</h6>
          <br /><br /><br /><br />
          <img
            className="d-block w-100"
            src={CarrouselImg02}
            alt="..."
          />
        </Carousel.Item>
        <Carousel.Item >
          <br /><br />
          <h2>Realize e acompanhe os agendamentos de usuários 3</h2>
          <h6>Receba os pacientes e agende seus atendimentos de forma facilitada , visualizando informações e modificando, quando necessário 3</h6>
          <br /><br /><br /><br />
          <img
            className="d-block w-100"
            src={CarrouselImg03}
            alt="..."
          />
        </Carousel.Item>
      </Carousel>
    </span>
  );
}

export default CarouselImg;