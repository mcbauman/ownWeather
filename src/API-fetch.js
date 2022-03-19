import axios from "axios"
import { useContext, useEffect } from "react"
import { userContext } from "./context/Context.jsx";


export default function fetching(props){
    const {
        city1,
        setWeather1
    }=useContext(userContext)

    useEffect(()=>{
            axios({
                method:"get",
                url:`https://api.openweathermap.org/data/2.5/weather?q=${city1}&appid=e79532fc8817fdb987471cf36bb69478&units=metric`
            })
            .then(function(response){
                setWeather1(response.data)
            })
    },[city1])

}
