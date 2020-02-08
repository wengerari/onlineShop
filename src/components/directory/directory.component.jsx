import React from "react";

import "./directory.styles.scss";
import {selectDirectorySections} from "../../redux/directory/directory.selectors";
import {createStructuredSelector} from "reselect";

import DirectoryItem from "../directory__item/directory__item.component";

import {connect} from "react-redux";



const  Directory= ({sections}) => (
            <div className="directory">
               { 
                sections.map(({title,id,imageUrl,size,linkUrl}) => (
                        <DirectoryItem key={id} title={title} imageUrl={imageUrl} size={size} linkUrl={linkUrl} />
                    ))
               }
            </div>
        )
    

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);