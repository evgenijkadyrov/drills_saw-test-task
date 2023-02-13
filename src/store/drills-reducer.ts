import React from  "react";
import {drillsAPI} from "../api";
import {ActionsTypes, AppDispatch, AppThunk} from "./store";
import {Dispatch} from "redux";

const initialState={
    items:[{"id": 9,
        "imageUrl": "https://cdn21vek.by/img/galleries/5832/468/preview/ds12da_hikoki_5e1c50ec46441.jpeg",
        "name": "Hikoki",
        "description": "",
        "price": 473,
        "category": 3,
        "rating": 5}] as InitialStateType[]}
export const drillsReducer=(state=initialState,action:ActionsType):initialStateType=>{
switch (action.type){
    case "GET-DRILLS":
        return {...state, items: action.payload}
    default:
        return state
}}
export const actions = {
    getDrills:(items:InitialStateType[])=>({
        type:"GET-DRILLS",
        payload:items
    })
}

export const getDrillsThunk= ():AppThunk=>{

    return async(dispatch:Dispatch)=>{
        let response= await drillsAPI.getDrills()
        dispatch(actions.getDrills(response.data))
    }

}
type initialStateType=typeof initialState
export type ActionsType=ActionsTypes<typeof actions>
export type InitialStateType= {
    "id": number,
    "imageUrl": string,
    "name": string,
    "description":string,
    "price": number,
    "category": number,
    "rating": number}