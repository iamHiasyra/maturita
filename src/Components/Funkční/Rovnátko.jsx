import {useData, useError, useResult, useTheme} from "../../App.jsx";
import {evaluate} from "mathjs";
import {cva} from "class-variance-authority";

export function Rovnátko() {
    const {data} = useData()
    const {setResult} = useResult()
    const {setError} = useError()
    const {theme} = useTheme()

    const evaluateResult = () => {
        if(data === "") return;
        try {
            let řešení = evaluate(data).toFixed(2)
            let format_celá = new Intl.NumberFormat("cs-CZ").format(řešení)
            setResult(format_celá)
        }
        catch (error) {
            setError(error.toString())
            console.log( (error).toString())
        }
    }


    return (
        <button className={defaultníStyl({intent: theme})}
                type={"button"}
                onClick={evaluateResult}
        > =
        </button>
    );
}

const defaultníStyl = cva(
    "w-full h-10",
    {
        variants : {
            intent : {
                light: ["bg-light-pink", "border-4", "border-black", "font-bold", "text-2xl"],
                dark: ["bg-dark-yellow", "font-bold", "text-2xl"]
            }
        },
        defaultVariants: {
            intent: "dark",
        }
    }

)

/*
let řešení = evaluate(data).toFixed(2).toString();
            let [celá, desetinná] = řešení.split(".");
            let format_celá = new Intl.NumberFormat("cs-CZ").format(celá)
            let číslo = desetinná ? `${format_celá},${desetinná.substring(0, 5)}` : format_celá
*/