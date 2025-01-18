import {cva} from "class-variance-authority";
import "./index.css"

import Záhlaví from "./Layout/Záhlaví.jsx";
import Zápatí from "./Layout/Zápatí.jsx";
import Klávesnice from "./Components/Klávesnice.jsx";

import {Displej} from "./Components/Displej.jsx";
import {createContext, useContext, useState} from "react";
import {ThemeButton} from "./Components/ThemeButton.jsx";

export const DataContext = createContext(null)
export const ResultContext = createContext(null)
export const ErrorContext = createContext(null)
export const ThemeContext = createContext(null)

function App() {
    const [data, setData] = useState("")
    const [result, setResult] = useState("")
    const [error, setError] = useState("")
    const [theme, setTheme] = useState("dark")
    if(theme === "dark") {
        document.body.style.backgroundColor = "#302F2F"
    }
    return(
        <div className={"w-screen h-screen flex flex-row-reverse items-center justify-center gap-8"}>
            <ThemeContext.Provider value={{theme, setTheme}}>
                <div className={"h-[628px] flex flex-col gap-2 "}>
                    <span className={textStyl({intent: theme})}>Theme</span>
                    <ThemeButton mode={"dark"}/>
                    <ThemeButton mode={"light"}/>
                </div>
                <main className={app_styl({intent: theme})}>
                    <Záhlaví/>
                    <DataContext.Provider value={ {data, setData} }>
                        <ResultContext.Provider value={ {result, setResult} }>
                            <ErrorContext.Provider value={ {error, setError} }>
                                <Displej />
                                <Klávesnice />
                            </ErrorContext.Provider>
                        </ResultContext.Provider>
                    </DataContext.Provider>
                    <Zápatí />
                </main>

            </ThemeContext.Provider>

        </div>
    )

}

const textStyl = cva(
    "w-20 p-2 font-black underline underline-offset-8 hover:overline",
    {
        variants : {
            intent : {
                light: ["text-black"],
                dark: [ "text-white"],
            }
        },
        defaultVariants: {
            intent: "dark",
        }
    }
)
const app_styl = cva(
    "p-5 w-5/12 flex flex-col gap-5 min-w-[350px] ",
    {
        variants : {
            intent : {
                light: ["bg-light-yellow", "font-light", "border-4", "border-black"],
                dark: ["bg-dark-grey", "font-dark", "shadow-[1px_-1px_11px_14px_rgba(255,_249,_231,_0.25)]"]
            }
        },
        defaultVariants: {
            intent: "dark",
        }
    }
)


export function useData() {
    return  useContext(DataContext)
}
export function useResult() {
    return  useContext(ResultContext)
}
export function useError() {
    return  useContext(ErrorContext)
}
export function useTheme() {
    return  useContext(ThemeContext)
}

export default App
