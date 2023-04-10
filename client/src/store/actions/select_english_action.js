import * as selectEnglish from './index';

export const switchLanguage = (bool) => {
    return async(dispatch, getState) => {
        try {
            dispatch(selectEnglish.selectEnglish(bool));
        } catch(error) {
            console.log('Check Status error', error);
        }
    }
}