import {Card, Row} from "react-bootstrap";

const Info = ()=>{
    return ( <Row className={'mb-4 p-3'} >
        <Card style={{ backgroundColor:  'rgba(0, 128, 255, 0.5)' }} >
            <Card.Body >
                <Card.Text className="text-center">
                    Your History of Guesses will appear below
                </Card.Text>
            </Card.Body>
        </Card>
    </Row>);
}
export default Info;