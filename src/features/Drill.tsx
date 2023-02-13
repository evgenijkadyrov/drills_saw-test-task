import React, {FC} from 'react';
import {actions, InitialStateType} from "../store/drills-reducer";
import {actions as actionsCart, initialItemType} from "../store/cart-reducer";
import s from "./Drill.module.css"
import Button from "@mui/material/Button";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import {Rating} from "@mui/material";
import {AppDispatch} from "../store/store";
import {useAppDispatch} from "../hooks/hooks";
type DrillType = {
    drill: InitialStateType
}

const Drill: FC<DrillType> = ({drill}) => {
    const dispatch=useAppDispatch()
    const handleAddToCart=(payload:initialItemType)=>{
        dispatch(actionsCart.addToCart(payload))
    }
    const payload={
        "id": drill.id,
        "imageUrl": drill.imageUrl,
        "name": drill.name,
        "description": drill.description,
            "price": drill.price,
        "quantity":0,
    }
    return (
        <div className={s.container}>
            <div className={s.wrapperItem}>
                <div className={s.image}>
                    <img src={drill.imageUrl}/>
                </div>

                <div className={s.itemInfo}>
                    <div>{drill.name}</div>
                    <div>{drill.price}</div>
                    {drill.rating>0 && <Rating name="half-rating-read" defaultValue={drill.rating} precision={0.5} readOnly />}
                </div>

                <div className={s.btnBuy}>
                    <Button onClick={()=>handleAddToCart(payload)} variant={"outlined"} color={'success'} endIcon={<AddShoppingCartIcon/>}>To cart</Button>
                </div>
            </div>
        </div>
    );
};

export default Drill;