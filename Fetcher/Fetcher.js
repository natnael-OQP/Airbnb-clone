import axios from 'axios'
export const fetcher = async (url) =>  await  (await axios.get(url)).data