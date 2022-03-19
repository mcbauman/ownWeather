import { useState } from "react"
import React from "react"


export const userContext= React.createContext(null)

export default function ContextProvider (props){
    const [city1,setCity1]=useState("Hamburg")
    const [city2,setCity2]=useState("Nairobi")
    const [weather1,setWeather1]=useState([])
    const [weather2,setWeather2]=useState([])

    const contextValue={city1,setCity1,city2,setCity2,weather1,setWeather1,weather2,setWeather2}
    return(
        <userContext.Provider value={contextValue}>
            {props.children}
        </userContext.Provider>
    )
}