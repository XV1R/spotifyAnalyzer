import React from 'react';
import SpotifyRetriever from './components/SpotifyRetriever';

function App() {
  return (
    <div>
      <h1>Spotify analyzer:</h1>
      <h3>Welcome to the spotify analyzer.</h3>
      <p>The spotify analyzer requires the user to link their account with the analyzer, as to begin processing the users
    data.</p>
      <p><strong>Data taken from the user is not stored and will only be used to give users information about themselves such
        as listening habits.</strong></p>
      <p><a href="http://localhost:5000/api/login"><span><strong>Login</strong></span></a> to Spotify to begin.</p>
      <SpotifyRetriever />
    </div>
  );
}

export default App;
