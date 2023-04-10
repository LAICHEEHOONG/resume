import * as english from './index';
import axios from 'axios';

export const englishData = () => {
    return async (dispatch, getState) => {
        try {
            const english_data = await axios.get('/api/english');
            const data = english_data.data;
            // console.log(data)
            dispatch(english.englishData(data));
        } catch (error) {
            console.error('Request english data error.', error);
        }
    }

}

