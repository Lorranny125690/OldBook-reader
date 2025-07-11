import axios from "axios";

const Axios = axios.create({
  baseURL: 'https://transcritor-ia.com/api',
  timeout: 1000,
});

export default Axios;