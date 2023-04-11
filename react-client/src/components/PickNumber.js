import {Button } from 'react-bootstrap';

const PickNumber = (index)=>{
    return (<Button type="button" className="btn btn-outline-light btn-lg">{index}</Button>);
}
export default PickNumber;