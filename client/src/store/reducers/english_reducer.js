import { DATA_ENGLISH } from "../type";

let DEFAULT_ENGLISH = {
    english: null
};

export default function englishReducer(state = DEFAULT_ENGLISH, action) {
    switch (action.type) {
        case DATA_ENGLISH:
            return {
                english: action.payload
            }

        default:
            return state;
    }
}