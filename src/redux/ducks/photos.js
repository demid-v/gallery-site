const initialState = { photos: [] };

const GET_PHOTOS = "GET_PHOTOS";
const SET_PHOTOS = "SET_PHOTOS";
const GET_PHOTO = "GET_PHOTO";
const SET_PHOTO = "SET_PHOTO";

const getPhotos = () => ({ type: GET_PHOTOS });
const setPhotos = (photos) => ({ type: SET_PHOTOS, photos });
const getPhoto = () => ({ type: GET_PHOTO });

const photosReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PHOTOS:
      console.log("GET_PHOTOS");
      return state;
    case SET_PHOTOS:
      console.log("SET_PHOTOS");
      const { photos } = action;
      return { ...state, photos };
    case GET_PHOTO:
      console.log("GET_PHOTO");
      return state;
    default:
      return state;
  }
};

export default photosReducer;
export { getPhotos, setPhotos, getPhoto };
