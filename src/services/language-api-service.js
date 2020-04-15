import config from '../config';
import TokenService from './token-service';

const LanguageApiService = {
  getLanguage() {
    return fetch(`${config.API_ENDPOINT}/language`, {
      headers: {
        Authorization: `Bearer ${TokenService.getAuthToken()}`,
        'Content-Type': 'application/json',
      },
    })
      .then((res) => !res.ok ? res.json().then((event) => Promise.reject(event)) : res.json()
    );
  },

  getHead() {
    return fetch(`${config.API_ENDPOINT}/language/head`, {
      headers: {
        Authorization: `Bearer ${TokenService.getAuthToken()}`,
        'Content-Type': 'application/json',
      },
    })
     .then((res) => (!res.ok ? res.json().then((event) => Promise.reject(event)) : res.json()
    ))
  },
  

  postGuess(answer) {
    return fetch(`${config.API_ENDPOINT}/language/guess`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${TokenService.getAuthToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(answer)
    })
      .then(res =>  (!res.ok) ? res.json().then(event => Promise.reject(event)) : res.json());
  },
  
};

console.log(LanguageApiService.getLanguage())


export default LanguageApiService;