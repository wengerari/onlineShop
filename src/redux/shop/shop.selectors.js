import {createSelector} from "reselect";



const selectShop = state => state.shop;

export const selectShopItems = createSelector(
    [selectShop],
    shop => shop.collections
);

export const selectCategoriesForPreview = createSelector(
    [selectShopItems],
    categories => Object.keys(categories).map(key => categories[key])
)


export const selectCategory = CategoryParam => createSelector(
    [selectShopItems],
    categories => categories[CategoryParam]
);