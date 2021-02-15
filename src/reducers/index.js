import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    {
      title: "No Scrubs",
      duration: "2:30",
    },
    {
      title: "Macarena",
      duration: "2:24",
    },
    {
      title: "DUBSTEP",
      duration: "12:40",
    },
    {
      title: "No you",
      duration: "8:30",
    },
  ];
};

 const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
})