import { combineReducers } from 'redux';
import lock from './lock_reducer';
import english from './english_reducer';
import chinese from './chinese_reducer';
import loader from './loader_reducer';
import selectEnglish from './select_english_reducer';
import resume from './resume_reducer'

const appReducers = combineReducers({
    lock,
    english,
    chinese,
    loader,
    selectEnglish,
    resume
});

export default appReducers;