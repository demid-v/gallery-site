import axios from "axios";

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function requestGetPhotos() {
  const data = await axios.request({
    method: "get",
    url: "https://jsonplaceholder.typicode.com/photos?_start=0&_limit=24",
  });
  await sleep(500);
  return data;
}

async function requestGetPhoto(id) {
  const data = await axios.request({
    method: "get",
    url: `https://jsonplaceholder.typicode.com/photos/${id}`,
  });
  await sleep(500);
  return data;
}

export { requestGetPhotos, requestGetPhoto };
