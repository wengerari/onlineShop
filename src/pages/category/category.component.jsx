import React from "react";

import {connect} from "react-redux";

import {selectCategory} from "../../redux/shop/shop.selectors";

import PreviewItem from "../../components/preview__item/preview__item.component";

import  "./category.styles.scss";

const CategoryPage = ({category}) => {
    console.log(category);
    const {title, items} = category;
    return(
    <div className="category-page">
        <h2 className="title">{title}</h2>
        <div className="items">
            {
                items.map(item => (
                    <PreviewItem key={item.id} item={item} />
                ))
            }
        </div>
    </div>
)}

const mapStateToProps= (state, ownProps) => ({
    category: selectCategory(ownProps.match.params.categoryId)(state)
})

export default connect(mapStateToProps)(CategoryPage);
