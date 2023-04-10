import * as chinese from './index';
import axios from 'axios';

export const chineseData = () => {
    return async (dispatch, getState) => {
        try {
            const chinese_data = await axios.get('/api/chinese');
            const data = chinese_data.data;
            // console.log(data);
            dispatch(chinese.chineseData(data));
        } catch (error) {
            console.error('Request chinese data error.', error);
        }
    }

}

