let DEFAULT_USER_STATE = {
    english : {
        _id: null,
        email: null,
        family_name: null,
        given_name: null,
        name: null,
        picture: null,
        image: null,
        contact: null
    }
}

export default function userReducer(state = DEFAULT_USER_STATE, action) {
    switch (action.type) {
   
    
        default:
            return state;
    }

}