import { USER } from "../type";

let DEFAULT_USER = {
    users: []
};

export default function userReducer(state = DEFAULT_USER, action) {
    switch (action.type) {
        case USER:
            return {
                users: action.payload
            }

        default:
            return state;
    }
}