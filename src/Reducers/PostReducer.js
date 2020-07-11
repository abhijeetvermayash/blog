const PostReducer = (Posts = [], action) => {
    switch (action.type) {
        case "FETCH_DATA":
            return action.payload;
        default:
            return Posts;
    }
};
export default PostReducer;