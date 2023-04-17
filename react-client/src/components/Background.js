import background from '../bullsAndCows.jpg';
import { Row, Card } from 'react-bootstrap';

const Background = () => {
    return (
        <Row>
            <Card>
                <Card.Body> <Card.Img className="img-fluid position-relative" src={background} alt="Responsive image" style={{ height: '30rem', width: '80rem',opacity: 0.7  }} />
                    <h1
                        className="text-center text-white position-absolute top-50 start-50 translate-middle"
                        style={{ fontSize: '6rem', fontWeight: 'bold', textShadow: '6px 6px #000',}}>
                        Bulls & Cows
                    </h1>
                </Card.Body>
            </Card>
        </Row>
    );
};

export default Background;
