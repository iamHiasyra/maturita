import {Číslo} from "../Molekula/Číslo.jsx";
import {Znak} from "../Molekula/Znak.jsx";
import {Rovnátko} from "../Molekula/Rovnátko.jsx";
import {Del} from "../Molekula/Del.jsx";
import {Ac} from "../Molekula/Ac.jsx";


function Klávesnice() {

    return (
        <div className={" grid grid-cols-5 grid-rows-4 gap-6"}>
                    <Číslo symbol={1}/>
                    <Číslo symbol={2}/>
                    <Číslo symbol={3}/>

                    <Znak symbol={"("}/>
                    <Znak symbol={")"}/>

                    <Číslo symbol={4}/>
                    <Číslo symbol={5}/>
                    <Číslo symbol={6}/>

                    <Znak symbol={"+"}/>
                    <Znak symbol={"-"}/>

                    <Číslo symbol={7}/>
                    <Číslo symbol={8}/>
                    <Číslo symbol={9}/>

                    <Znak symbol={"*"} maska={"\xD7"}/>
                    <Znak symbol={"/"} maska={"\xF7"}/>

                    <Znak symbol={"."} maska={","}/>
                    <Číslo symbol={0}/>
                    <Rovnátko/>

                    <Ac/>
                    <Del/>

        </div>
    );
}

export default Klávesnice;