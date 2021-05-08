export default (posts = [], action) => {
    switch (action.type) {
        case 'POST':
            return [...posts, action.payload];
        case 'GET':
            return action.payload;
        case 'UPDATE':
            return posts.map(post => post._id === action.payload._id ? action.payload : post);
        case 'DELETE':
            return posts.filter(post => post._id !== action.payload);
        default:
            return posts;
    }
}