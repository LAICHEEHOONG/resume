import * as resume from './index';


export const destructureResume = (data) => {
    return async (dispatch, getState) => {
        try {
            dispatch(resume.destructure(data));
        } catch (error) {
            console.log('Resume data destructuring error', error);
        }
    }
}