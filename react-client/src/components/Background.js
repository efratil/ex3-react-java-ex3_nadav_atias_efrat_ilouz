import './Background.css';
import NumberGrid from "./NumberGrid";
import GamePlayTable from "./GamePlayTable";
const Background = () => {
    return(
        <section className="w-100 px-4 py-5 background" style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
            <div className="row d-flex justify-content-center">
                <div >
                <GamePlayTable/>
                <NumberGrid/>
                </div>
            </div>
         </section>);
}

export default Background;