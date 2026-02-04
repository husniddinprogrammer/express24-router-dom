const initialState = {
    mainData: [
        {
            id: 1,
            customerName: "Abdulaziz Ochilov",
            product: "Osh",
            price: 20000,
            quantity: 2,
            total: 40000,
            phone: "+998 97 888 10 27",
            description: "Lorem ipsum",
            delivered: true,
            roll: "Admin"
        },
        {
            id: 2,
            customerName: "Ergashev Islom",
            product: "Osh",
            price: 20000,
            quantity: 1,
            total: 20000,
            phone: "+998 97 888 12 35",
            description: "...",
            delivered: true,
            roll: "Admin"
        },
        {
            id: 3,
            customerName: "Samidullayev Bahodir",
            product: "Manti",
            price: 5000,
            quantity: 10,
            total: 50000,
            phone: "+998 93 234 10 23",
            description: "...",
            delivered: true,
            roll: "Manager"
        },
        {
            id: 4,
            customerName: "To'ramurodov Shoislom",
            product: "Big Lavash",
            price: 24000,
            quantity: 3,
            total: 72000,
            phone: "+998 90 375 67 15",
            description: "...",
            delivered: true,
            roll: "People"
        }
    ],
    categories: [
        {
            id: 1,
            name: "Osh"
        },
        {
            id: 2,
            name: "Manti"
        },
        {
            id: 3,
            name: "Lavash"
        },
        {
            id: 4,
            name: "Shashlik"
        },
        {
            id: 5,
            name: "Salat"
        }
    ],
    users: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "CATEGORY_ADD":
            return {
                ...state,
                categories: [...state.categories, action.payload]
            };
        default:
            return state;
    }
};

export default reducer;