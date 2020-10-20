import React from 'react';
import { connect } from 'react-redux';
import { SelectSongs } from '../actions'
class SongList extends React.Component {
    renderList() {
        return this.props.songs.map(song => {
            return (
                <div className='item' key={song.title}>
                    {song.title}
                    <button className="ui button" onClick={() => this.props.SelectSongs(song)}>Select</button>
                </div>
            )
        });
    }
    render() {

        return (
            <div className="ui container">
                {this.renderList()}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        songs: state.Songs
    }

}

export default connect(mapStateToProps, { SelectSongs })(SongList);