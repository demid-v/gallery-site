const initialState = { photos: [], photo: {} };

const GET_PHOTOS = "GET_PHOTOS";
const SET_PHOTOS = "SET_PHOTOS";
const GET_PHOTO = "GET_PHOTO";
const SET_PHOTO = "SET_PHOTO";

const getPhotos = () => ({ type: GET_PHOTOS });
const setPhotos = (photos) => ({ type: SET_PHOTOS, photos });
const getPhoto = (id) => ({ type: GET_PHOTO, id });
const setPhoto = (photo) => ({ type: SET_PHOTO, photo });

const photosReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PHOTOS:
      return state;
    case SET_PHOTOS:
      const { photos } = action;
      return { ...state, photos };
    case GET_PHOTO:
      return state;
    case SET_PHOTO:
      const { photo } = action;
      return { ...state, photo };
    default:
      return state;
  }
};

export default photosReducer;
export { getPhotos, setPhotos, getPhoto, setPhoto };
