import React, { useEffect } from 'react';

export default function SpotifyRetriever() {
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
        console.log(res);
      })
      .catch(err => console.error(err));
  }, []);
  return <div></div>;
}
