import {useData, useTheme} from "../../App.jsx";
import {cva} from "class-variance-authority";

// eslint-disable-next-line react/prop-types
export function Číslo ({symbol}) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {data, setData} = useData();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {theme} = useTheme();

    return (
        <button className={defaultníStyl({intent: theme})} onClick={() => setData(`${data}${symbol}`)}>
            {symbol}
        </button>
    )

}

const defaultníStyl = cva(
    "w-full h-10 text-2xl",
    {
        variants : {
            intent : {
                light: ["bg-light-pink", "border-4", "border-black", "font-bold"],
                dark: ["bg-dark-yellow", "font-bold"]
            }
        },
        defaultVariants: {
            intent: "dark",
        }
    }

)