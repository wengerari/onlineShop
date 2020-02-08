const INITIAL_STATE = {
    sections: [
        {
            title: "Lifestyle",
            imageUrl: "https://i.ibb.co/kqrCZdd/28-500x500.jpg",
            id: 1,
            linkUrl: "shop/lifestyle"
        },
        {
            title: "Running",
            imageUrl: "https://i.ibb.co/x8PdQZ5/shutterstock-266758136-0-0.jpg",
            id: 2,
            linkUrl: "shop/running"
        },
        {
            title: "football",
            imageUrl: "https://i.ibb.co/H75kx0m/istockphoto-838269100-1024x1024.jpg",
            id: 3,
            linkUrl: "shop/football"
        },
        {
            title: "Sneakers for Women",
            imageUrl: "https://i.ibb.co/k3M11kR/women-running-safety-1024x768.jpg",
            id: 4,
            size: "large",
            linkUrl: "shop/women"
        },
        {
            title: "Sneakers for Men",
            imageUrl: "https://i.ibb.co/26NCX1r/gettyimages-631184594-612x612.jpg",
            id: 5,
            size: "large",
            linkUrl: "shop/men"
        }
    ]
};

const directoryReducer = (state=INITIAL_STATE,action) => {
    switch(action.type){
        default:
            return state;
    }
};

export default directoryReducer;