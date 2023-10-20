import { useState } from 'react'
import { createContext } from 'react'
import PropTypes from "prop-types"

export const ThemeContext = createContext(null)
const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState(false)
    const themeInfo = {
        theme,
        setTheme
    }
  return (
    <ThemeContext.Provider value={themeInfo}>
      {children}
    </ThemeContext.Provider>
  )
}

ThemeProvider.propTypes={
  children:PropTypes.node
}
export default ThemeProvider
