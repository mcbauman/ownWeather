import reactDom from "react-dom"
import App from "./App.jsx"
import UserContextProvider from "./context/Context.jsx";

reactDom.render(
    <UserContextProvider>
        <App />
    </UserContextProvider>
,document.getElementById("root"))
