import React from "react";

const LibrarySong=({song,songs,setCurrentSong,id})=>{
    const songSelectHandler = ()=> {
        const selectedSong=songs.filter((state)=>state.id===id);
        //console.log(selectedSong);
        setCurrentSong(selectedSong[0]);

    }
    return(
        <div onClick={songSelectHandler} className="library-song">
            
            <img alt={song.name} src={song.cover} />
            <div className="song-description"></div>
            <h3>{song.name}</h3>
            <h4>{song.artist}</h4>
        </div>
   
    );

};

export default LibrarySong;






