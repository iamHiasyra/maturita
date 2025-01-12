import {useData, useError, useResult, useTheme} from "../App.jsx";
import {cva} from "class-variance-authority";

export function Displej () {
    const {data} = useData();
    const {result} = useResult();
    const {error} = useError();
    const {theme} = useTheme();

    const maska = data.replace(/\*/g, "\xD7").replace(/\//g, "\xF7").replace(/\./g, ",")
    const výsledek = error != "" ? error.replace(/\./g, ",") : result


    return(
        <section className={displej_styl({intent: theme})}>
            <div className={box_styl({intent: theme})}>
                <span className={vstup_styl()}>{maska}</span>
            </div>
            <div className={box_styl({intent: theme})}>
                <span className={výstup_styl({intents: error && "warning"})}>{výsledek}</span>
            </div>
        </section>
    )
}

const displej_styl = cva(
    "grow grid gap-5 p-5",
    {
        variants : {
            intent : {
                light: ["bg-light-blue", "border-4", "border-black", "font-bold"],
                dark: ["bg-dark-brown", "shadow-[1px_-1px_10px_1px_rgba(0,0,0,_0.25)]"]
            }
        },
        defaultVariants: {
            intent: "dark",
        }
    }

)
const box_styl = cva(
    "grid items-center overflow-auto",
    {
        variants : {
            intent : {
                light: ["bg-light-yellow", "border-4", "border-black"],
                dark: ["bg-dark-white",  "shadow-[1px_-1px_10px_1px_rgba(0,0,0,_0.25)]"]
            }
        },
        defaultVariants: {
            intent: "dark",
        }
    }
)

const vstup_styl = cva (
    "text-3xl p-5 font-medium"
)

const výstup_styl = cva(
    "text-6xl p-5 items-center font-bold", {
        variants : {
            intents : {
                warning : ["text-red-500", "text-xl"]
            }
        }
    }

)