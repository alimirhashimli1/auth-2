import {useContext} from "react"
import { AuthContext } from "../context/WorkoutContext";

export const useAuthContext = () => {
    const context = useContext(AuthContext)


    if(!context){
        throw Error("use AuthContext must be used inside a AuthContext provider")
    }

    return context
}