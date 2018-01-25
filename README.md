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

In the interest of time I've humbly borrowed the design cues from [Hacker News](https://news.ycombinator.com/), a site I find myself on too often.

# Installation

With npm, in the root directory:

`npm install && cd ./api-server && npm install && cd .. && npm start`

When you run `npm start`, it'll bring up the front-end and back-end (API) simultaneously. The latter uses `nodemon`.

You'll notice there are `yarn.lock` files in the repo. I personally find it to be a little quicker, so if you're inclined, just swap out `npm` with `yarn` in the above command and you'll be on your way.

# Contributing

Submit a PR. :-)

