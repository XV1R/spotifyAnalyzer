import React, { useEffect, useState } from 'react';

export default function SpotifyRetriever() {
  const [playlists, setPlaylist] = useState([])
  useEffect(() => {
    const search = window.location.search;
    const params = new URLSearchParams(search);
    const code = params.get('code');
    if (code === null || code === undefined || !code.trim().length) return;
    fetch('http://localhost:5000/api/retrieve', {
      method: 'POST',
      body: JSON.stringify({ code }),
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(json => json.json())
      .then(res => {
        //console.log(res)
        setPlaylist(res.items)

      })
      .catch(err => console.error(err));
  }, []);
  console.log(playlists)
  /*
  let songs = {}

  // Format data as json object
  for (let i = 0; i < playlists.length; i++) {
    //songs[i] = playlists[i].track
    //songs.push(playlists[i].track.name)
    let artists = []
    for (let j = 0; j < playlists[i].track.artists.length; j++) {
      artists.push(playlists[i].track.artists[j].name)
    }
    songs[playlists[i].track.name] = { artist: artists, duration: playlists[i].track.duration_ms, album: playlists[i].track.album.name, popularity: playlists[i].track.popularity }
    //console.log(artists)
  }
  console.log(songs)*/

  return <div></div>;
}
