import axios from 'axios';

export const Api = axios.create({
    baseURL: 'http://apitesteionic.godocs.com.br/api/ocorrencias/'
})