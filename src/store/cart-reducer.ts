import {InitialStateType} from "./drills-reducer";
import {ActionsTypes} from "./store";
import it from "node:test";
const initialState = {
    items: [] as initialItemType[],
    totalCount: 0,
    totalPrice: 0
}
type initialStateType = {
    items: initialItemType[],
    totalCount: number,
    totalPrice: number
}
export type initialItemType={
    "id": number,
    "imageUrl": string,
    "name": string,
    "description": string,
    "price": number,
    "quantity":number,
}
export const cartReducer = (state = initialState, action: ActionsType) => {
switch (action.type){
    case "ADD_TO_CART":
        let item=state.items.find(el=>el.id===action.payload.id)
        if(item){

            const newQuantity=item.quantity+1
            let existedItem=state.items.map((item,key)=>item.id===action.payload.id?{...item,quantity:newQuantity}:item)
            return { ...state,
                items:existedItem,
                totalPrice:state.totalPrice+item.price,
            totalCount: state.totalCount+1}
        }


        else{

            let newItem=action.payload
            newItem.quantity=1
            return {...state,
            items: [...state.items,newItem],
            totalPrice:state.totalPrice+newItem.price,
            totalCount: state.totalCount+1}
        }
        default:
            return state
}
}
export const actions={
    addToCart:(payload:initialItemType)=>({
type:"ADD_TO_CART",
        payload
    })
}
export type ActionsType=ActionsTypes<typeof actions>