import * as loader from './index';

export const setLoader = (bool) => {
    return async (dispatch) => {
        dispatch(loader.loader(bool));
    }
}