import axios from 'axios';

const instance = axios.create({
  headers: {
    common: {
      "X-Riot-Token": `${process.env.REACT_APP_API_KEY}`
    }
  }
})

export default instance;