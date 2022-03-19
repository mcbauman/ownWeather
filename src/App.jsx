import { useContext, useRef } from "react";
import fetching from "./API-fetch"
import { userContext } from "./context/Context.jsx";

export default function App(){
    const{
        city1,
        setCity1,
        city2,
        setCity2,
        weather1,
        weather2
    }=useContext(userContext)
    const input=useRef()
    fetching()

    function submitHandler(e){
        e.preventDefault()
        setCity1(input.current.value)
    }
    console.log(weather1);
    return(
        <div>
            <form action="" onSubmit={submitHandler}>
                <input type="text" ref={input}/>
                <button type="submit"></button>
            </form>
            <form action="">
                <input type="text" />
                <button type="submit"></button>
            </form>
            <p>In {weather1.name} its {weather1.weather[0].main} at {`${weather1.main.temp} `}</p>
            HALLO From APP
        </div>
    )
}
