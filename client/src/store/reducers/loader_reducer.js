import { LOADER } from "../type";

let DEFAULT_LOADER = {
    loader: true
};

export default function lockReducer(state = DEFAULT_LOADER, action) {
    switch (action.type) {
        case LOADER:
            return {
                loader: action.payload
            }

        default:
            return state;
    }
}