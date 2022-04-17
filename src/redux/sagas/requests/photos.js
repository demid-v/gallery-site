import axios from "axios";

function requestGetPhotos() {
  return axios.request({
    method: "get",
    url: "https://jsonplaceholder.typicode.com/photos?_start=0&_limit=24",
  });
}

function requestGetPhoto(id) {
  console.log(id);
  return axios.request({
    method: "get",
    url: `https://jsonplaceholder.typicode.com/photos/${id}`,
  });
}

export { requestGetPhotos, requestGetPhoto };
