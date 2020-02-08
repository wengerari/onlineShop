import React from "react";

import {connect} from "react-redux";

import {addItem} from "../../redux/cart/cart.actions";

import "./preview__item.styles.scss";

import CustomBtn from "../custom-button/custom-button.component";

const PreviewItem = ({item, addItem}) => {
    const {imageUrl,name,price} = item
    return (
    <div className="preview__item">
        <div className="image" style={{backgroundImage: `url(${imageUrl})`}}></div>
        <div className="footer">
            <div className="name">{name}</div>    
            <div className="price">${price}</div>    
        </div> 
        <CustomBtn onClick={() => addItem(item)} inverted>add to cart</CustomBtn>     
    </div>
)}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
});

export default connect(null,mapDispatchToProps)(PreviewItem);