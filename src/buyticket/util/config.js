
import axios from 'axios'

import { showLoadingToast,closeToast } from 'vant';
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    
    showLoadingToast({
      message: '加载中...',
      forbidClick: true,
    });
    
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    closeToast()
    return response;
  }, function (error) {
    closeToast()
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });