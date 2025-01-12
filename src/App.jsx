import {cva} from "class-variance-authority";
import "./index.css"
import Záhlaví from "./Layout/Záhlaví.jsx";
import Zápatí from "./Layout/Zápatí.jsx";
import Klávesnice from "./Components/Klávesnice.jsx";

import {Displej} from "./Components/Displej.jsx";
import {createContext, useContext, useState} from "react";

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
        <div className={app_styl({intent: theme})}>
            <ThemeContext.Provider value={{theme, setTheme}}>
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
            </ThemeContext.Provider>

        </div>
    )

}


const app_styl = cva(
    "p-5 w-[30%] flex flex-col gap-5  ",
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
