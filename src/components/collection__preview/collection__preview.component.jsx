import React from "react";

import "./collection__preview.styles.scss";

import { Link } from "react-router-dom";

import PreviewItem from "../preview__item/preview__item.component";

const CollectionPreview = ({title,items}) => (
    <div className="collection__preview">
        <Link className="title" to={`${process.env.PUBLIC_URL}/shop/${title}`}>{title.toUpperCase()} </Link>
        <div className="preview">
            {items.filter((item,idx) => idx<4).map(item => (
                <PreviewItem key ={item.id}  item={item}/>
            ))}
        </div>
    </div>
)

export default CollectionPreview;