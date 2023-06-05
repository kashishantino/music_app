import React ,{useState} from "react";
//adning component
import Player from "./components/Player";
import Song from "./components/Song";
//import style
import "./styles/app.scss";
//import util
import data from "./util";
import Library from "./components/Library";
import LibrarySong from "./components/LibrarySong";

function App() {
  const [songs,setSongs]=useState(data());
  const [currentSong, setCurrentSong]=useState(songs[0]);
  const [isPlaying,setIsPlaying]=useState(false);

  return ( 
    <div className="App">
      {/* <h1>hlw</h1> */}
      <Song currentSong={currentSong}/>
      <Player setIsPlaying={setIsPlaying}
        isPlaying={isPlaying}
        currentSong={currentSong}/>
        <Library songs={songs} setCurrentSong={setCurrentSong}/>
      </div>
  );
}

export default App;
