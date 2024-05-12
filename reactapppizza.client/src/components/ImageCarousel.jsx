import React from 'react';
import { Carousel } from 'react-bootstrap';
// Import zdjec
import spinaciImg from './../image/spinaci.jpg';
import funghiImg from './../image/funghi.jpg';
import salaminoImg from './../image/salamino.jpg';
import { Col } from 'react-bootstrap';


const ImageCarousel = () => (
    <Col>
        <Carousel style={{ height: '420px' }}>
            <Carousel.Item style={{ position: 'relative', height: '100%' }}>
                <img
                    className="d-block w-100 carousel-img"
                    src={spinaciImg}
                    alt="Spinaci pizza"
                />
                <Carousel.Caption>
                    <h3>Pizza miesiaca <strong>kwiecien</strong></h3>
                    <p>Najlepsza pizza tego miesiaca okazala sie <strong>Focaccia!</strong></p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{ position: 'relative', height: '100%' }}>
                <img
                    className="d-block w-100 carousel-img"
                    src={funghiImg}
                    alt="Funghi pizza"
                />
                <Carousel.Caption>
                    <h3>Pizza miesiaca <strong>marzec</strong></h3>
                    <p>Najlepsza pizza miesiaca marzec okazala sie <strong>Funghi</strong> </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{ position: 'relative', height: '100%' }}>
                <img
                    className="d-block w-100 carousel-img"
                    src={salaminoImg}
                    alt="Prosciutto pizza"
                />
                <Carousel.Caption>
                    <h3>Pizza miesiaca <strong>luty</strong></h3>
                    <p>
                        Najlepsza pizza miesiaca luty okazala sie <strong>Salamino</strong>
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </Col>
     
);

export default ImageCarousel;