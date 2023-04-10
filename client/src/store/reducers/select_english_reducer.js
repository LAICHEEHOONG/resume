import { SELECT_ENGLISH } from "../type";

let DEFAULT_LANGUAGE = {
    selectEnglish: true
};

export default function selectEnglish(state = DEFAULT_LANGUAGE, action) {
    switch (action.type) {
        case SELECT_ENGLISH:
            return {
                selectEnglish: action.payload
            }

        default:
            return state;
    }
}