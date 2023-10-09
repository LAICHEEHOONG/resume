import * as user from './index';
import axios from 'axios';

export const userData = () => {
    return async (dispatch, getState) => {
        try {
            const user_data = await axios.get('/api/info');
            const data = user_data.data;
       
            dispatch(user.userData(data));
        } catch (error) {
            console.error('Request user data error.', error);
        }
    }

}

