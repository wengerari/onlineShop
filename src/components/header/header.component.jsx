import React from "react";

import { connect } from 'react-redux';

import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/animal-paw-print.svg";


import { auth } from "../../firebase/firebase.utils";

import "./header.styles.scss";

import CartIcon from "../cart-icon/cart-icon.component";

import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import {createStructuredSelector} from "reselect";

import {selectCartHidden} from "../../redux/cart/cart.selectors";
import {selectCurrentUser} from "../../redux/user/user.selectors";

const Header = ({ currentUser,hidden }) => (
    <div className="header">
        <Link to={process.env.PUBLIC_URL + '/'} className="logo-container">
            <Logo className="logo" />
        </Link>
        <div className="menu">
            <Link className="menu__item" to={process.env.PUBLIC_URL + '/checkout'}>Checkout</Link>
            <Link className="menu__item" to={process.env.PUBLIC_URL + '/shop'}>Shop</Link>
            {console.log(currentUser)}
            {currentUser ? 
                (
                    <div className="menu__item" onClick={() => {auth.signOut()}}>Sign out</div>
                )
                : 
                (
                    <Link className="menu__item" to={process.env.PUBLIC_URL + '/sign-in-out'}>Sign in</Link>
                )
            }
            <CartIcon />   
        </div>
            {hidden ? null : <CartDropdown />}
    </div>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
  });
  
  export default connect(mapStateToProps)(Header);