import axios from 'axios';

export const getData = async () => {
  const url = 'https://681afea817018fe505796594.mockapi.io/Transactions';
  try {
    const response = await axios.get(url);
    console.log(response.data);

    return response.data;
    // return [];
  } catch (e) {
    console.log(e);
  }
};
