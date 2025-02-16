import {useData, useError, useResult, useTheme} from "../App.jsx";
import {cva} from "class-variance-authority";


export function Del() {
    const {data, setData} = useData()
    const {setResult} = useResult();
    const {setError} = useError();
    const {theme} = useTheme();

    const handleData = () => {
        if(data === "") return;
        setData(data.slice(0, -1));
        setResult("")
        setError("")
    }

    return (
        <button className={defaultníStyl({intent: theme} )}
                type={"button"}
                onClick={handleData}
        >       Del
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
            intent: "light",
        }
    }

)