import {cva} from "class-variance-authority";
import {useTheme} from "../App.jsx";

function Zápatí() {
    const {theme} = useTheme()
    return (
        <footer className={footer_styl({intent: theme})}>
            <p>Maturitní práce</p>
        </footer>
    );
}

const footer_styl = cva(
    "flex text-xl px-2 py-1 font-bold",
    {
        variants: {
            intent: {
                light: ["bg-light-blue", "border-4", "border-black"],
                dark: ["bg-dark-brown"],
            }
        },
        defaultVariants : {
            intent: "dark"
        }
    }
)
export default Zápatí;