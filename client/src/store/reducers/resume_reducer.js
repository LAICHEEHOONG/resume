import { DESTRUCTURE } from "../type";

let DEFAULT_RESUME = {
    name: '',
    profile: '',
    project: [],
    course: [],
    education: [],
    employment: [],
    language: [],
    skill: []
};

export default function resumeReducer(state = DEFAULT_RESUME, action) {
    switch (action.type) {
        case DESTRUCTURE:
            return {
               ...state, ...action.payload
            };

        default:
            return state;
    }
}