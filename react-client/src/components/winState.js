import {Card, Row} from "react-bootstrap";

const WinState = ({guessList})=>{
    return (<Row className={'mb-4 p-3'} >
        <Card style={{ backgroundColor: 'rgba(191, 225, 201, 0.79)' }}>
            <Card.Body >
                <Card.Title className="text-center">You won! your score is: {guessList.length}</Card.Title>
                <Card.Text className="text-center">
                    You may enter your name below to record your score.
                </Card.Text>
            </Card.Body>
        </Card>
    </Row>);
}
export default WinState;