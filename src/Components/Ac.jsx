//AC
import {cva} from "class-variance-authority";
import {useData, useError, useResult, useTheme} from "../App.jsx";


export function Ac() {
    const {data, setData} = useData()
    const {setResult} = useResult()
    const {setError} = useError()
    const {theme} = useTheme()

    const handleData = () => {
        if(data === "") return;
        setData(""); setResult(""); setError("")
    }

    return (
        <button className={defaultníStyl({intent: theme})} type={"button"} onClick={handleData}>AC</button>
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