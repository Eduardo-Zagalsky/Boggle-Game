from boggle import Boggle
from flask import Flask, render_template, session
from flask_debugtoolbar import DebugToolbarExtension

app = Flask(__name__)
app.config['SECRET_KEY'] = "keep-it-secret"
debug = DebugToolbarExtension(app)
# app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False

boggle_game = Boggle()

@app.route("/")
def root():
    return render_template("home.html")

@app.route("/board")
def make_board():
    board = boggle_game.make_board()
    session["board"] = board

    return render_template("board.html", board = board)