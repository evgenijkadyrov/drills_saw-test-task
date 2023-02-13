import React from 'react';
import {CartItem} from "./CartItem/CartItem";

export const Cart = () => {
    return (
        <div>
            <div>
                Cart
            </div>
            <div><CartItem/></div>
            <div>Total</div>
        </div>
    );
};

