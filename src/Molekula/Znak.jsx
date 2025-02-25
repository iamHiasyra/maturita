import {useData, useTheme} from "../App.jsx";
import {cva} from "class-variance-authority";

// eslint-disable-next-line react/prop-types
export function Znak ({symbol, maska}) {
    const {data, setData} = useData();
    const {theme} = useTheme();

    const handleData = () =>  {
        if(data.slice(-1) === "/" || data.slice(-1) === "*" || data.slice(-1) === ".") return;
        setData(`${data}${symbol}`)
    }
    return (
        <button className={defaultníStyl({intent: theme})}
                onClick={handleData}
        > {maska ? maska: symbol}
        </button>
    )
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
