import {Card, Row} from "react-bootstrap";
/**
 The Info component is responsible for displaying a message to the user.
 It takes in a prop called message which contains the text to be displayed.
 */
const Info = ({message})=>{
    return ( <Row className={'mb-4 p-3'} >
        <Card style={{ backgroundColor: 'rgba(0, 128, 255, 0.22)' }}>
            <Card.Body >
                <Card.Text className={'text-center'}>
                    {message}
                </Card.Text>
            </Card.Body>
        </Card>
    </Row>);
}
export default Info;