import {useTheme} from "../App.jsx";
import {cva} from "class-variance-authority";

// eslint-disable-next-line react/prop-types
export function ThemeButton({mode}) {
    const {theme, setTheme} = useTheme();
    const setDarkTheme = () => {
        setTheme("dark");
    }
    const setLightTheme = () => {
        setTheme("light");
        document.body.style.backgroundColor = ''
    }

    const activeStyle = theme === mode ? "overline italic" : ""

    return (
        <button className={theme_styl({intent : theme})}
                onClick={() => {
                    return mode === "dark" ? setDarkTheme() : setLightTheme();
                }}
        >
           <span className={activeStyle}> {mode} </span>
        </button>
    )
}

const theme_styl = cva(
    "w-20  p-2 border-[3px] font-bold capitalize",
    {
        variants : {
            intent : {
                light: ["border-black", "text-black"],
                dark: ["border-white", "text-white"],
            }
        },
        defaultVariants: {
            intent: "dark",
        }
    }
)