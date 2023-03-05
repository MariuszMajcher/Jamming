
import './App.css';
import SearchBar from '../SearchBar/SearchBar'
import SearchResults from '../SearchResults/SearchResults'
import Playlists from '../Playlists/Playlists'
import React from 'react'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {searchResults: 
      [{name:"Lie", artist:"Korn", album:"Freak on a leash", id:4},
      {name:"Gritty", artist:"Masters", album:"Fish", id:5},
      {name:"Jump silly Billy", artist:"Morbid", album:"Reaash", id:6}],
      playlistName:"New",
      playlistTracks: [{name:"Cookie", artist:"Korn", album:"Freak on a leash", id:1},
      {name:"Preety", artist:"Masters", album:"Fish", id:2},
      {name:"Dance silly", artist:"Morbid", album:"Reaash", id:3}]
  }
  this.addTrack = this.addTrack.bind(this)
  this.removeTrack = this.removeTrack.bind(this)
  this.updatePlaylistName = this.updatePlaylistName.bind(this)
  this.savePlaylist = this.savePlaylist.bind(this)
  this.search = this.search.bind(this)
  }

  addTrack(track) {
    let savedTracks = this.state.playlistTracks
   if(savedTracks.find(playTrack => playTrack.id === track.id )){
    return
   }
   
   savedTracks.push(track)
   this.setState({playlistTracks: savedTracks})
  }

  removeTrack(track) {
    let savedTracks = this.state.playlistTracks
    savedTracks = savedTracks.filter(exisiting => exisiting.id !== track.id)
    this.setState({playlistTracks: savedTracks})
  }

  updatePlaylistName(name) {
    this.setState({playlistName: name})
  }
  
  savePlaylist(tracks) {
    let trackURIs = tracks.foreach(track => {return track.uri})
  }

  search(term) {
    console.log(term)
  }

  render(){ 
  return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar onSearch={this.search}/>
        <div className="App-playlist">
          <SearchResults searchResults={this.state.searchResults} 
                         onAdd={this.addTrack}
                         />
          <Playlists playlistName = {this.state.playlistName} 
                     playlistTracks={this.state.playlistTracks}
                     onRemove={this.removeTrack}
                     onNameChange={this.updatePlaylistName}
                     onSave={this.savePlaylist}/>
        </div>
      </div>
    </div>
  );}
}

export default App;
