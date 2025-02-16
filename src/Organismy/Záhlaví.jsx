import {cva} from "class-variance-authority";
import {useTheme} from "../App.jsx";

// eslint-disable-next-line react/prop-types
function Záhlaví() {
    const {theme} = useTheme();

    return (
        <div>
            <header className={header_styl({intent: theme})}>
                <p className={"text-4xl font-extrabold"}>NMĐ</p>

            </header>
        </div>
    );
}

const header_styl = cva(
    "flex text-base px-2 py-1 font-bold justify-between items-center",
    {
        variants: {
            intent: {
                light: ["bg-light-blue", "border-4", "border-black"],
                dark: ["bg-dark-brown", "shadow-[1px_-1px_10px_1px_rgba(0,0,0,_0.25)]"],
            }
        },
        defaultVariants : {
            intent: "dark"
        }
    }
)

export default Záhlaví;