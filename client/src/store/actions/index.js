import { DATA_LOCK, DATA_ENGLISH, DATA_CHINESE, LOADER, SELECT_ENGLISH, DESTRUCTURE } from '../type';

export const checkLock = (status) => ({
    type: DATA_LOCK,
    payload: status
});

export const englishData = (data) => ({
    type: DATA_ENGLISH,
    payload: data
});

export const chineseData = (data) => ({
    type: DATA_CHINESE,
    payload: data
});

export const loader = (bool) => ({
    type: LOADER,
    payload: bool
});

export const selectEnglish = (bool) => {
    let switchLanguage = bool;

    if(bool) {
        switchLanguage = false;
    } else {
        switchLanguage = true;
    }

    return {
        type: SELECT_ENGLISH,
        payload: switchLanguage
    }
}

export const destructure = (resume) => ({
    type: DESTRUCTURE,
    payload: resume
})
