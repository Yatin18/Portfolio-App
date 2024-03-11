import React, { useContext, useState,createContext } from "react";


const ThemeContext=createContext()

const ThemeProvider=({children})=>{
    const[theme,settheme]=useState(light)
    return(
        <ThemeContext.Provider value={[theme,settheme]}>
            {children}
        </ThemeContext.Provider>
    )
}
const useTheme=()=>useContext(ThemeContext)

export {useTheme,ThemeProvider};