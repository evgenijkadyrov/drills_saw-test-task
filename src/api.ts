import axios from "axios";
import {InitialStateType} from "./store/drills-reducer";

export const drillsAPI = {
    getDrills() {
        return axios.get<InitialStateType[]>(`http://localhost:3001/drills`)
    }
}