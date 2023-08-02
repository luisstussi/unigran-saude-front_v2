import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

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
            src="https://www.unigran.br/dourados//imagens/galeria/6ef68295d29bb23a2cbf08ebc4f325bcm.jpg"
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
            src="https://www.unigran.br/dourados//imagens/galeria/0a13f8f6ef1290d3108d903dd793785bm.jpg"
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
            src="https://www.unigran.br/dourados//imagens/galeria/246a83d20e96bb1a33b6330475045ac5m.jpg"
            alt="..."
          />
        </Carousel.Item>
      </Carousel>
    </span>
  );
}

export default CarouselImg;