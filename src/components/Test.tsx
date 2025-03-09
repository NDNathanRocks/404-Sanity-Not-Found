import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Test.css';
import laptopImg from '../assets/img/laptop.png';
import StartPage from './puzzles/StartPage';
import MainPuzzle from './puzzles/MainPuzzle';

function Test() {
  return (
    <div>
    <Carousel
      nextIcon={<span className="carousel-control-next-icon" style={{ filter: 'invert(100%)' }} />}
      prevIcon={<span className="carousel-control-prev-icon" style={{ filter: 'invert(100%)' }} />}
      wrap={false}
      indicators={false}
      controls={true}
      touch={true}
      keyboard={true}
      defaultActiveIndex={1}
    >

      <Carousel.Item>
        <StartPage />
      </Carousel.Item>

      <Carousel.Item>
        <div className="bg-[${}laptopImg]">
          <MainPuzzle></MainPuzzle>
        </div>
        <p>Second</p>
      </Carousel.Item>

      <Carousel.Item>
        
        <img src={laptopImg} alt="Third slide" />
        <p>Third</p>
      </Carousel.Item>
      
    </Carousel>
    </div>
  );
}

export default Test;