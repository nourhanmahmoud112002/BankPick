import axios from 'axios';

export const getData = async () => {
  const url = 'https://681afea817018fe505796594.mockapi.io/Transactions';
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};
