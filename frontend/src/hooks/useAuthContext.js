import {useContext} from "react"
import { WorkoutsContext } from "../context/WorkoutContext";

export const useWorkoutsContext = () => {
    const context = useContext(WorkoutsContext)


    if(!context){
        throw Error("use WorkoutsContext must be used inside a WorkoutsContext provider")
    }

    return context
}