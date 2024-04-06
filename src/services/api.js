
import axios from 'axios';
import { API_URL } from '../constants/contant';

export const getRecipes = async (searchedQuary) => {
    try{
        let responce = await axios.get(`${API_URL}/search?q=${searchedQuary}`);
        return responce.data;     
    }catch(error) {
        console.log('Error while calling the api', error.message);
        return error.responce;
    }
}

export const getRecipe = async (searchedQuary) => {
    try{
        let responce = await axios.get(`${API_URL}/get?rId=${searchedQuary}`);
        return responce.data;     
    }catch(error) {
        console.log('Error while calling the api', error.message);
        return error.responce;
    }
}