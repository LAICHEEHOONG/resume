import { INFO } from "../type";

let DEFAULT_INFO = {
    name: '',
    birthday: '',
    contact: '',
    address: ''
}

export default function infoReducer(state = DEFAULT_INFO, action) {
    switch (action.type) {
        case INFO:
            return {
                ...state, ...action.payload
            }
        default:
            return state
    }
}

// let DEFAULT_RESUME = {
//     name: '',
//     profile: '',
//     project: [],
//     course: [],
//     education: [],
//     employment: [],
//     language: [],
//     skill: []
// };

// export default function resumeReducer(state = DEFAULT_RESUME, action) {
//     switch (action.type) {
//         case DESTRUCTURE:
//             return {
//                ...state, ...action.payload
//             };

//         default:
//             return state;
//     }
// }