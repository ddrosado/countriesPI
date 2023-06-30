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
    async (id, { dispatch }) => {
      try {
        dispatch(loading());
        const response = await axios.get(`${url}/countries/${id}`);
        return response.data;
      } catch (error) {
        console.log(error);
      }
    }
  );
  
  export const postActivity = createAsyncThunk(
    'countries/postActivity',
    async (payload) => {
      try {
        const response = await axios.post('https://renataloustalet.com.ar/apicountries/activity/', payload);
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
  
  export const getActivity = createAsyncThunk(
    'countries/getActivity',
    async () => {
      try {
        const response = await axios.get(`${url}/activity`);
        return response.data;
      } catch (error) {
        console.log(error);
      }
    }
  );