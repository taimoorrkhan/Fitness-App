import axios from 'axios';
import { rapidApiKey } from '../constants';

const baseUrl = 'https://exercisedb.p.rapidapi.com';

const apiCall = async (url, params)=>{
    try{
        const options = {
            method: 'GET', 
            url,
            params,
            headers: {
                'X-RapidAPI-Key': 'f7f4829a25msh15bb17642fbbcacp11279djsn5bfe7a94e8ee',
                'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
            }
            
        };
        const response = await axios.request(options);
        return response.data;
    }catch(err){
        console.log('error: ', err.message);
    }
}

export const fetchExercisesByBodypart = async (bodyPart)=>{
    let data = await apiCall(baseUrl+`/exercises/bodyPart/${bodyPart}`);
    return data;
}