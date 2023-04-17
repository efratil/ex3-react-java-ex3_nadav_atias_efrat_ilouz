import {Col, Row} from "react-bootstrap";
import FormGuess from "./FormGuess";
import Info from "./Info";
import GuessHistoryTable from "./GuessHistoryTable";
import React from "react";

const GamePlayState = ({guessList,message,setGuessList,secretList,setMessage}) =>{
    return (<>
        <Row>
            <FormGuess list = {guessList} updateList={setGuessList} secretList ={secretList} updateMessage = {setMessage}/>
           </Row>
           <Info message = {message}/>
           <Row>
          <Col >
          <GuessHistoryTable list = {guessList} />
          </Col>
          </Row>
        </>);
}
export default GamePlayState;