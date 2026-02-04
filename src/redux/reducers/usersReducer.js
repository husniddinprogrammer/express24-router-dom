const initialState = {
    users: [
        {
            id: 1,
            customerName: "Abdulaziz Ochilov",
            phone: "+998 97 888 10 27",
            roll: "Admin",
            status: true
        },
        {
            id: 2,
            customerName: "Ergashev Islom",
            phone: "+998 97 888 12 35",
            roll: "Admin",
            status: true
        },
        {
            id: 3,
            customerName: "Samidullayev Bahodir",
            phone: "+998 93 234 10 23",
            roll: "Manager",
            status: true
        },
        {
            id: 4,
            customerName: "To'ramurodov Shoislom",
            phone: "+998 90 375 67 15",
            roll: "People",
            status: true
        }
    ]
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case "DELETE_USER":
            return {
                ...state,
                users: state.users.filter(user => user.id !== action.payload)
            };
        case "CHANGE_STATUS":
            return {
                ...state,
                users: state.users.map(user => 
                    user.id === action.payload 
                        ? { ...user, status: !user.status }
                        : user
                )
            };
        default:
            return state;
    }
};

export default usersReducer;