import React, {useEffect} from 'react';
import Drill from "./Drill";
import {getDrillsThunk, InitialStateType} from "../store/drills-reducer";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store/store";
import {useAppDispatch} from "../hooks/hooks";
import s from "./DrillsPage.module.css"
const DrillsPage = () => {
    const drills = useSelector<RootState, InitialStateType[]>(state => state.drills.items)
    console.log(drills)
    const dispatch = useAppDispatch()
    useEffect(() => {


        dispatch(getDrillsThunk())
    }, [])
    return (
        <div className={s.container}>
            <div className={s.wrapperItems}> {drills.map(el=><Drill drill={el}/>)} </div>


        </div>
    );
};

export default DrillsPage;