
import React from "react";

import "./checkout.styles.scss";

import {connect} from "react-redux";

import {createStructuredSelector} from "reselect";
import {selectCartItems, selectCartTotal} from "../../redux/cart/cart.selectors";

import StripeCheckoutButton from "../../components/stripe/stripe-button.component";

import CheckoutItem from "../../components/checkout__item/checkout__item.component";

const CheckOutPage = ({cartItems,total}) => (
    <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-block">
                <span>Product</span>
            </div>
            <div className="header-block">
                <span>Description</span>
            </div>
            <div className="header-block">
                <span>Quantity</span>
            </div>
            <div className="header-block">
                <span>Price</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map(cartItem => (
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                ))
        }
        <div className="total">
            <span>total: {total}</span>
        </div>
        <div className="test-werning">default credit card number:4242424242424242 cvc: any 3 digits date: any future date</div>
        <StripeCheckoutButton price={total}/>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
});

export default connect(mapStateToProps)(CheckOutPage);