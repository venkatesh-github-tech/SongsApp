import { combineReducers } from 'redux';
const selectAllSongs = () => {
    return [
        { title: 'Chinna poove mella pesu', duration: '4:05' },
        { title: 'Paadi Azhathen unnai idho', duration: '4:40' },
        { title: 'Avaaram poovu arezhu naala', duration: '3:59' },
	{ title: 'Chinna Chinna Aasai', duration: '2:25' }
    ]
}

const selectSong = (selectedSong = null, action) => {
    if (action.type === 'SONG_CREATE') {
        return action.payload;
    }

    return selectedSong;
}

export default combineReducers({
    Songs: selectAllSongs,
    SelectedSong: selectSong
})