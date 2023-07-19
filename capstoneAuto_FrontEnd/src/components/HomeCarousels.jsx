import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';

function HomeCarousels() {
    return (
        <div>
            <div className="image-container">
                <div>
                    <img className='image' src='/assets/img/black-lamborghini-huracan-2020-zm.jpg' />
                </div>
            </div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel-image"
                        src="/assets/img/bmw-novita-estate-2021.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>
                            <Link to="/collezioni/3" className="car-link">
                                <span className="carousel-text">Bmw M4</span>
                            </Link>
                        </h3>
                        <p>La BMW M4 Coupé sviluppa una potenza sportiva di 480 CV e 550 Nm di coppia.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel-image"
                        src="/assets/img/mercedes-c-klasse-limousine-2021.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>
                            <Link to="/collezioni/13" className="car-link">
                                <span className="carousel-text">Mercedes classe C</span>
                            </Link>
                        </h3>
                        <p>Il passo aumenta a quota 2,87 m (+25 mm), a tutto favore dell'abitabilità per i passeggeri a bordo.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel-image"
                        src="/assets/img/land-rover-range-rover-sport-phev-front-view.webp"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>
                            <Link to="/collezioni/1" className="car-link">
                                <span className="carousel-text">Range Rover Sport</span>
                            </Link>
                        </h3>
                        <p>
                            La nuova Range Rover Sport è prodotta nella fabbrica di Solihull nel Regno Unito, la casa di tutte le Range.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default HomeCarousels;