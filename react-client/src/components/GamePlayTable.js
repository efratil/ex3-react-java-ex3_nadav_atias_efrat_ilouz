const gamePlayTable = () =>{

    return (<div id="row"
                 style="position:relative; width:360px; height:35px; z-index:2;  background-color:hsla(60,100%,2%,1); text-align: center; border: 2px outset hsla(240,10%,90%,0.2); border-radius:15px; ">
        <div id="left" style="display:inline-block; width:180px; font: bold 18px Verdana; text-align: center; ">
            <div className="code"
                 style="background-color: hsla(60,100%,12%,1); color: yellow; border: 1px solid black; ">?
            </div>
            <div className="code"
                 style="background-color: hsla(60,100%,12%,1); color: yellow; border: 1px solid black; ">?
            </div>
            <div className="code"
                 style="background-color: hsla(60,100%,12%,1); color: yellow; border: 1px solid black; ">?
            </div>
            <div className="code"
                 style="background-color: hsla(60,100%,12%,1); color: yellow; border: 1px solid black; ">?
            </div>
        </div>
        <div id="right" style="display:inline-block; width:160px; text-align: center; font: 18px Verdana; ">
            <div className="bull" style="">Bulls</div>
            <div className="cow" style="">Cows</div>
        </div>
    </div>);
}