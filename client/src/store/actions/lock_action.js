import * as lock from './index';
import axios from 'axios';


export const checkLock = () => {
    return async(dispatch, getState) => {
        try {
            const status = await axios.get('/api/lock');
            const lockInfo = status.data.lock;
            dispatch(lock.checkLock(lockInfo));
            dispatch(lock.loader(false));
          
        } catch(error) {
            console.log('Check Status error', error);
        }
    }
}