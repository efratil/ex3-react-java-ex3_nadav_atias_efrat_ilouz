import playBoard from "./PlayBoard";
const Background = () => {
    return(
        <section className="w-100 px-4 py-5 background" style="border-radius: .5rem .5rem 0 0;">
            {playBoard}
        </section>);
}
export default Background;