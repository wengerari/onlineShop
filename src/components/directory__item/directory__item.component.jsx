import React from "react";

import "./directory__item.styles.scss";

import { Link } from "react-router-dom";

const DirectoryItem = ({title,imageUrl,size,linkUrl}) => (
    <Link to={linkUrl} className={`directory__item ${size}`}>
   
        <div className="background-image" style={{
            backgroundImage: `url(${imageUrl})`
        }}
        />
        <div className="content">
            <h2 className="title">{title.toUpperCase()}</h2>
            <p className="subtitle">shop now</p>
        </div>
    </Link>
);

export default DirectoryItem;