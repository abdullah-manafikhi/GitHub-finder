import { createContext, useReducer } from "react";
import AlertReducer from "./AlertReducer";



const AlertContext = createContext()
export const AlertProvider = ({children}) => {

    const initialState = null 

    const [state , dispatch] = useReducer(AlertReducer, initialState)
    console.log()
    const setAlert = (msg , type) => {

        dispatch({
            type:"SET_ALERT",
            payload:{msg,type},
        })

        setTimeout(() => {dispatch({type:"RESET"})},3000  )
    }

    return (
        <AlertContext.Provider value={{alert : state , setAlert , test : "hello"}}>
            {children}
        </AlertContext.Provider>
    )

}

export default AlertContext