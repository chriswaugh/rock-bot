# ROCK BOT

A basic template for creating a `Rock, Paper, Scissors, Dynamite, Waterbomb` battle bot.

Always plays `ROCK`. Chances are, a ROCK-only strategy isn't going to do particularly well (you never know!), but I'll leave it to you to add your own strategies.

Inspired by, and most ripped off from http://beatthebots.apphb.com/

## Rules of the game

Standard RPS rules apply: rock beats scissors, scissors beat paper, paper beats rock.

_plus:_

**Dynamite** beats all of the classic moves.

**Waterbomb** beats dynamite, but loses to all of the classic moves.

## Where it gets interesting

1. This isn't a game of one round. You win a round, you get one point. First to 1000 points wins.
1. You only have 100 dynamite. Throw another dynamite after you've used them all, and it'll be treated as a waterbomb.
1. If there's a draw, the point is carried over. So if you draw with your opponent twice, the next round is worth 3 points.

## Technical specifications

In order to play, your bot needs to be publically available on the internet and it needs meet this API specification:

**POST /start**

_Called once at the start of a game. Use this to initialise your bot._

**GET /move**

_Called at the start of a round to get your move._

**POST /move**

_Called at the end of a round to let you know what move your opponent made._

More info: http://beatthebots.apphb.com/Api

## Getting started

This repository contains the very very bare minimum you need to get a bot running on [heroku](https://www.heroku.com). You can clone this repo and deploy it to heroku with no real configuration required. Case in point: https://always-rock.herokuapp.com

Note that you're not limited to heroku, nor even using node - as long as you have a publically accessible API that meets the requirements above that's all that matters.

### Training

You can fight your bot against the house robots here! :)

http://beatthebots.apphb.com/Play/