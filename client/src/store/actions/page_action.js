import * as page from './index';

export const pageChange = (bool) => {
    return async (dispatch) => {
        dispatch(page.pageControl(bool));
    }
}