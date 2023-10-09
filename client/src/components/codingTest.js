import React from "react";
import { addData } from "../store/actions/coding_test_action";
import axios from "axios";

const CodingTest = () => {
    const addData = async () => {
        const user = await axios.post('/api/info', {
            candidate: {
                name: 'laicheehoong',
                contact: '0175337331',
                address: '102 rimba',
                birthday: '1990/04/17'
            }
        });
        console.log('click', user.data);
        // return async (dispatch, getState) => {
        //     try {
        //         const user = await axios.post('/api/info', { candidate: {name: 'lai'}});
        //         console.log('click', user);
        //     } catch (error) {
        //         console.log('User add data failed')
        //     }
        // }
    }
    return (
        <button onClick={addData}>Coding Test</button>
    )
}

export default CodingTest;