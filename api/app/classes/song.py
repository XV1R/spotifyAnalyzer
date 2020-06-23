
from typing import List


class Song:
    def __init__(self, title: str, duration: int, genres: List[str], artist: str):
        self.title = title
        self.duration = duration
        self.genres = genres
        self.artist = artist
