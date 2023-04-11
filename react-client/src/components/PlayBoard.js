import Background from "./Background";
import StartGame from "./StartGame";
import {useState} from "react";
const PlayBoard = () => {

    return(
        <section className="gradient-custom">
        <div className="mb-md-5 mt-md-4 pb-5">
        <div className="bg-white border rounded-5" style={{borderRadius: '.5rem .5rem 0 0', display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
            <Background/>
        </div>
         </div>
        </section>
    );
}
export default PlayBoard;
