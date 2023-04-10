import { DATA_CHINESE } from "../type";

let DEFAULT_CHINESE = {
    chinese: null
};

export default function chineseReducer(state = DEFAULT_CHINESE, action) {
    switch (action.type) {
        case DATA_CHINESE:
            return {
                chinese: action.payload
            }

        default:
            return state;
    }
}