import {Card, Row} from "react-bootstrap";

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