import axios from "axios";
/* 172.28.95.83 */
export default async function fetchApi() {
  try {
    const response = await axios.get("http://localhost:3001");
    return response.data;
  } catch (error) {
    // eslint-disable-next-line no-console
    return console.log(error.message);
  }
}
