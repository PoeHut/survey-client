export default (state = null, action) => {
    switch (action.type) {
        case 'FETCH_USER':
            console.log(action.payload);
            return action.payload.error ? false : action.payload;
        default:
            return state;
    }
}