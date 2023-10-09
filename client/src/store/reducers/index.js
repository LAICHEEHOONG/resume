import { combineReducers } from 'redux';
import lock from './lock_reducer';
import english from './english_reducer';
import chinese from './chinese_reducer';
import loader from './loader_reducer';
import selectEnglish from './select_english_reducer';
import resume from './resume_reducer'
import info from './coding_test_reducer';
import page from './page_reducer';
import user from './user_reducer';

const appReducers = combineReducers({
    lock,
    english,
    chinese,
    loader,
    selectEnglish,
    resume,
    info,
    page,
    user
});

export default appReducers;