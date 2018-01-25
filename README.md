# Readable

This a project for Udacity's React Nanodegree. It provides the most basic functionality expected of a bulletin board sort of system. You can:

- Submit posts
- Edit posts
- Vote on posts
- Delete posts
- Sort posts
- Add comments
- Edit comments
- Delete comments
- Vote on comments

It uses React (surprise!) and Redux. There is a backend API in the project used for storing post information, it doesn't do any sort of validationi beyond an authorization header but does persist post and comment information. We use react-thunk to handle the asyncronous API requests.

# Installation

With npm, in the root directory:

`npm install && cd ./api-server && npm install && cd .. && npm start`

When you run `yarn start`, it'll bring up the front-end and back-end (API) simultaneously. The latter uses `nodemon`.

# Contributing

Submit a PR. :-)

