import React from "react";

import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";

import "./collections-overview.syles.scss";

import {selectShopItems, selectCategoriesForPreview} from "../../redux/shop/shop.selectors";
import CollectionPreview from "../../components/collection__preview/collection__preview.component";


const CollectionsOverview = ({collections}) => (
    <div className="collections-overview">
        {
            collections.map(({id,...otherCollectionProps}) => (
                <CollectionPreview key={id} id ={id} {...otherCollectionProps} />
            ))
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCategoriesForPreview
})

export default connect(mapStateToProps)(CollectionsOverview);