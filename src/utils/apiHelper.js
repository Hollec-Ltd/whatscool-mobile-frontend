import axios from 'axios';

export default axios.create({
  baseURL: 'https://whatscool-bn-staging.herokuapp.com/api/v1',
});
