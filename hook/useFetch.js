// import {useState} from 'react';
import { useCallback } from 'react';

const useFetch = () => {

  const sendRequest = useCallback(async (requestConfig) => {

    console.log(requestConfig.body)
    try {
      const response = await fetch(
        requestConfig.url, {
          method: requestConfig.method ? requestConfig.method : 'GET',
          headers: requestConfig.headers ? requestConfig.headers : {},
          body: requestConfig.body ? JSON.stringify(requestConfig.body) : null
        })
      
        if (!response.ok) {
          throw new Error('Request failed!');
        }  

        const data = await response.json();
        return data
      }
      catch (err) {
        setError(err.message || 'Something went wrong!');
      }

  }, []);

  return {
    sendRequest: sendRequest
  }
};

export default useFetch;