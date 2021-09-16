import React from 'react';
import axios from 'axios';

export const addUser = async(data) => {
    const baseUrl = "http://localhost:8000"
    try{

        await axios.post(`${baseUrl}/add`,data)
    }catch(err){
        console.log('error while calling add user API', err)
    }
}

export const getUsers = async() => {
    const baseUrl = "http://localhost:8000"
    try{

        let response = await axios.get(`${baseUrl}/users`)
        console.log(response)
        return response;
    }catch(err){
        console.log('error while calling get users API', err)
    }
}