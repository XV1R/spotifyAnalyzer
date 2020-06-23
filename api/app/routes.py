from flask import render_template, redirect, url_for, request, session
import spotipy.util as util
import spotipy
from app import app
import requests
import os

# Info relating to the spotify application
CLIENT_ID = os.environ['CLIENT_ID']
CLIENT_SECRET = os.environ['CLIENT_SECRET']
REDIRECT_URI = 'http://localhost:5000/api/callback'
SCOPE = "user-library-read user-read-private"
API_BASE = 'https://accounts.spotify.com'
SHOW_DIALOG = True

# TODO
# All templates used are only temporary and exist for testing purposes. They will be replaced with the appropiate front end


@app.route('/')
def index():
    return render_template('base.html', title='home')

# Directs to spotify's authorization page
# Once returning from the page, link now has an auth code


@app.route('/api/login')
def login():
    auth_url = f'{API_BASE}/authorize?client_id={CLIENT_ID}&response_type=code&redirect_uri={REDIRECT_URI}&scope={SCOPE}&show_dialog={SHOW_DIALOG}'
    print(auth_url)
    return redirect(auth_url)


@app.route('/api/callback')
def callback():
    code = request.args.get('code')
    auth_token_url = f"{API_BASE}/api/token"
    res = requests.post(auth_token_url, data={
        "grant_type": "authorization_code",
        "code": code,
        "redirect_uri": REDIRECT_URI,
        "client_id": CLIENT_ID,
        "client_secret": CLIENT_SECRET
    })
    res_body = res.json()
    print(res.json())
    session["toke"] = res_body.get("access_to_token")
    return render_template("callback.html")
