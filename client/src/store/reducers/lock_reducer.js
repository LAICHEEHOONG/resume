import { DATA_LOCK } from "../type";

let DEFAULT_LOCK_STATE = {
    lock_status: true
};

export default function lockReducer(state = DEFAULT_LOCK_STATE, action) {
    switch (action.type) {
        case DATA_LOCK:
            return {
                lock_status: action.payload
            }

        default:
            return state;
    }
}