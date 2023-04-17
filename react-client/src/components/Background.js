import background from '../bullsAndCows.jpg';
import {Row,Card } from "react-bootstrap";

const Background = () => {
    return(<Row>
             <Card>
                 <Card.Body><Card.Img className="img-fluid " src={background}  alt="Responsive image" style={{height:'30rem',width: '80rem'}}></Card.Img></Card.Body>
             </Card>
          </Row>);
}

export default Background;