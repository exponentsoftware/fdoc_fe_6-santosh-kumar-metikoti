import React from 'react'
import './App.css'
import Album from './Components/Album'
import Albums from './Components/Albums'
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      albums: [
        {id: 1, artist: "charlie puth", album_title: "we don't talk anymore", album_cover: "music",src:"https://m.media-amazon.com/images/M/MV5BOWQyYmJiOWUtNzkzYS00YWJlLWI5YjgtYTg4MjI0MmM1N2ZkXkEyXkFqcGdeQXVyNjE0ODc0MDc@._V1_.jpg"},
        {id: 2, artist: "swift", album_title: "Blacnkspace", album_cover: "Music ", src:"https://i.pinimg.com/originals/75/25/cc/7525cc413728569980c8e10074946a2d.jpg"},
        {id: 3, artist: "katy perry", album_title: "roar", album_cover: "sara ali", src:"https://starcasm.net/wp-content/uploads/2013/08/Katy_Perry_Roar_single_cover_art_alt.jpg"},
      ],
    }
  }
  render(){
  return (
    <div className="App">
        <div className="container">
          <div className="row">
          <Album artist="enrique" album ="heart attack" src="http://1.bp.blogspot.com/-JBwAcRhLCKQ/UsKsOYCAVUI/AAAAAAAACp4/rlFMn9Kbvoo/s1600/Enrique+Iglasias+heart+attack+album+cover.JPG"/>
            <Albums albums={this.state.albums} />
          </div>
        </div>
    </div>
  );
}
}
export default App;
