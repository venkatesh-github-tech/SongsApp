import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ song }) => {
    console.log(song);
    if (!song) {
        return <div className="ui stacked segment">No song selected</div>
    }
    return (
        <div className="ui stacked segment">
            <h4>Title:{song.title}
                Duration : {song.duration}
            </h4>

        </div>
    )

}

const mapStateToProps = (state) => {

    return {
        song: state.SelectedSong
    }
    // console.log(state);
    // return state;
}

export default connect(mapStateToProps)(SongDetail);