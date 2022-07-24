const initialState = [
    {
        id: 0,
        name: 'Ritesh',
        email: 'ritesh@gmail.com',
        password: 'password',
        profilePic: 'https://www.kindpng.com/picc/m/497-4973038_profile-picture-circle-png-transparent-png.png'
    }
];

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case "REGISTER_USER":
            state = [...state, action.payload];
            return state;
        default:
            return state;
    }
};
export default usersReducer;