
"""
  UserBeforeAfter represents an user
  that has listened to X songs and what Y songs listened
  next
"""

from app.classes import song
from typing import List
import spotipy


class UserBeforeAfter:
    songs_before: List[song.Song] = []
    songs_after: List[song.Song] = []

    def __init__(self, token: str):
        self.client_spotify = spotipy.Spotify(auth=token)

    def retrieve(self):
        return self.client_spotify.current_user_recently_played()
