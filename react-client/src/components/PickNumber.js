import {Button } from 'react-bootstrap';

const PickNumber = (index,{setInput})=>{
    return (<Button type="button" value=index className="btn btn-outline-light btn-lg" onClick={(e) => setInput(e.target.value)}> </Button>);
}
export default PickNumber;