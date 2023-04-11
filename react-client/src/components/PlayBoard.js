import Background from "./Background";
const PlayBoard = () => {
    return(
        <section className="gradient-custom">
        <div className="bg-white border rounded-5" style={{borderRadius: '.5rem .5rem 0 0', display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
            <Background/>
        </div>
        </section>
    );
}
export default PlayBoard;
