import axios from "axios";

const instance = axios.create({
  baseURL: 'http://staging2-menu3.us-east-1.elasticbeanstalk.com:8080/api'
  // baseURL: 'http://localhost:8080/api'
});

instance.interceptors.request.use(request => {
  return request;
}, error => {
  // console.log(error);
  return Promise.reject(error);
});


instance.interceptors.response.use(response => {
  return response;
}, error => {
  // console.log(error);
  return Promise.reject(error);
});

export default instance;