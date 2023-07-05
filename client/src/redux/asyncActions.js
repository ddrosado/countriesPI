import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'http://localhost:3001';


  export const getCountries = createAsyncThunk(
    'countries/getCountries',
    async () => {
      try {
        const response = await axios.get(`${url}/countries`);
        return response.data;
      } catch (error) {
        throw error.response.data.msg;
      }
    }
  );
  
  export const getDetail = createAsyncThunk(
    'countries/getDetail',
    async (id) => { // access the dispatch function from the Redux store
      try {
        const response = await axios.get(`${url}/countries/${id}`);
        return response.data;
      } catch (error) {
        console.log(error);
      }
    }
  );

  export const getByName = createAsyncThunk(
    'countries/getByName',
    async (name) => {
      try {
        const response = await axios.get(`${url}/countries?name=${name}`);
        return response.data;
      } catch (error) {
        throw error.response.data.msg;
      }
    }
  );  
  
// -------------------- activities --------------------

  export const postActivity = createAsyncThunk(
    'countries/postActivity',
    async (payload) => {
      try {
        const response = await axios.post(`${url}/activities`, payload);
        return response.data;
      } catch (error) {
        console.log(error);
      }
    }
  );
  
  export const getActivity = createAsyncThunk(
    'countries/getActivity',
    async () => {
      try {
        const response = await axios.get(`${url}/activities`);
        return response.data;
      } catch (error) {
        console.log(error);
      }
    }
  );