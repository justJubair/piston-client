import { Toaster } from "react-hot-toast"
import { Outlet } from "react-router-dom"
import useTheme from "../hooks/useTheme"
  


const Root = () => {
  const {theme} = useTheme()
  return (
    <div className={theme ? "bg-black" : "bg-white"}>

      <Outlet/>
      <Toaster/>
    </div>
  )
}

export default Root
