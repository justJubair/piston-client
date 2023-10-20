import { useContext } from "react"
import { ThemeContext } from "../context/ThemeProvider"

const useTheme = ()=>{
    const all = useContext(ThemeContext)
    return all
}

export default useTheme  