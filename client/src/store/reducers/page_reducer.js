import { PAGE } from "../type";

let DEFAULT_PAGE = {
    page_status: true
};

export default function lockReducer(state = DEFAULT_PAGE, action) {
    switch (action.type) {
        case PAGE:
            return {
                page_status: action.payload
            }

        default:
            return state;
    }
}