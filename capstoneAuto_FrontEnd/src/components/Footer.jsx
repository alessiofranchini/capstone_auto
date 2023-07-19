import React from 'react';
import { Row, Col } from 'react-bootstrap';

function Footer() {
    return (
        <footer className="footer">
            <Row className="justify-content-center">
                <Col xs={12} sm={4} md={4} className="text-center">
                    <ul className="list-footer">
                        <li className="m-2"><a href="https://www.audi.it/it/web/it/modelli/a6/rs-6-avant.html"className="text-reset text-decoration-none">Audi</a></li>
                        <li className="m-2"><a href="https://www.ferrari.com/it-IT"className="text-reset text-decoration-none">Ferrari</a></li>
                        <li className="m-2"><a href="https://www.lamborghini.com/it-en"className="text-reset text-decoration-none">Lamborghini</a></li>
                        <li className="m-2"><a href="https://www.youtube.com/" className="text-reset text-decoration-none">Youtube</a></li>
                    </ul>
                </Col>
                <Col xs={12} sm={4} md={4} className="text-center">
                    <ul className="list-footer">
                        <li className="m-2"><a href="https://twitter.com/"className="text-reset text-decoration-none">Twitter</a></li>
                        <li className="m-2"><a href="https://www.facebook.com/" className="text-reset text-decoration-none">Facebook</a></li>
                        <li className="m-2">Accessibilità</li>
                        <li className="m-2"><a href="https://www.instagram.com/"className="text-reset text-decoration-none">Instagram</a></li>
                    </ul>
                </Col>
            </Row>
        </footer>
    );
}

export default Footer;
