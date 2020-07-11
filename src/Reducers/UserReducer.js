const UserReducer = (User = [], action) => {
    switch (action.type) {
        case "FETCH_USER":
            return [...User,action.payload];
        default:
            return User;
    }
};
export default UserReducer;