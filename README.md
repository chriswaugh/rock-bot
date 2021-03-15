# ROCK BOT

A basic template for creating a `Rock, Paper, Scissors (Dynamite, Waterbomb)` battle bot.

Always plays `ROCK`. Not a great strategy, but a start.

Inspired by, and mostly ripped off from http://beatthebots.apphb.com/

## Getting started

This repository contains the very bare minimum you need to get a bot running on [heroku](https://www.heroku.com). You can clone this repo and deploy it to heroku with no real configuration required.

From there, start adding in some strategies and see if you can beat the house robots here:

http://beatthebots.apphb.com/Play/

(Note you won't win a single round if you always play `ROCK`)

## Technical details

We will be following the same API as defined here:

http://beatthebots.apphb.com/Api

`POST /start` will be called at the very beginning of a battle, `GET /move` will be called at the start of each game, and `POST /move` will be called at the end of every game.

You win a game, you get one point. If a game ends in a draw the point rolls over to the next game. First bot to 1000 points wins the battle.
