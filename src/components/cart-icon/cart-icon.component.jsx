import React from "react";

import {ReactComponent as ShoppingIcon} from "../../assets/shopping-store.svg";

import {selectCartItemsCount} from "../../redux/cart/cart.selectors";

import "./cart-icon.styles.scss";

import {connect} from "react-redux";

import {toogleCart} from "../../redux/cart/cart.actions";
import {createStructuredSelector} from "reselect";



const CartIcon = ({toogleCart,itemCount}) => (
    <div className="cart-icon" onClick={toogleCart}>
        <ShoppingIcon className="shopping-icon" />
<span className="item-count">{itemCount}</span>
    </div>
    
)

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
});

const mapDispatchToProps = dispatch => ({
    toogleCart: () => dispatch(toogleCart())
});

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);