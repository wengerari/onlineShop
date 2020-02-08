import React from "react";

import CustomBtn from "../custom-button/custom-button.component";

import {connect} from "react-redux";

import {selectCartItems} from "../../redux/cart/cart.selectors";

import "./cart-dropdown.styles.scss";
import CartItem from "../cart-item/cart-item.component";

import {createStructuredSelector} from "reselect";

import {withRouter} from "react-router-dom";

import {toogleCart} from "../../redux/cart/cart.actions";


const CartDropdown = ({cartItems, history, dispatch}) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {cartItems.length ? (
                cartItems.map(cartItem => (
                    <CartItem key={cartItem.id} item={cartItem}/>
                ))
                ) : (
                    <span className="empty-message">your cart is empty</span>
                )
            
            }
            
        </div>
        <CustomBtn onClick={() =>{
            history.push(`${process.env.PUBLIC_URL}/checkout`);
            dispatch(toogleCart());
            }}>go to checkout</CustomBtn>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));