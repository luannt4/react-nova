import axios from 'axios';

const API_KEY = '1e2d3e04a46a4b641682a83ebd1b0bf1';
const END_POINT = 'https://api.themoviedb.org/3';

 export const getConfiguration = () => {

    const apiName = 'configuration';

    const path = `${END_POINT}/${apiName}?api_key=${API_KEY}`;
    // console.log(path);
    return axios.get(path);

};
