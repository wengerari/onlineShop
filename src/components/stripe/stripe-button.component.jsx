import React from "react";

import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_21W1ra5TYeKarHx1a12dKupp00lqrXHD76";

    const onToken = token => {
        console.log(token);
        alert("payment successful");
    }

    return (
        <StripeCheckout
            lacel="pay now"
            name="aspwenger"
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`your total is ${price}`}
            amount={priceForStripe}
            panelLabel="pay now"
            token = {onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;