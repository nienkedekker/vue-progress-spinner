# vue-progress-spinner
[![Netlify Status](https://api.netlify.com/api/v1/badges/35611505-c40c-4dfe-b739-7d53756d87b6/deploy-status)](https://app.netlify.com/sites/vigorous-curran-fdf510/deploys)

## About
This is a spinner indicating an upload's progress. It's made in Vue, using Vuex for storing state. A demo can be found ![here](https://vigorous-curran-fdf510.netlify.com/).

### Trade-offs
#### State management
A simpler store pattern (like an event bus) would likely have sufficed but I don't get to use Vuex (or other Flux inspired libraries) much so I figured it'd be good practice.

#### Accessibility
The app doesn't work if you have JavaScript disabled, so some form of server-side rendering would probably be nice. To allow people to upload you'd at least want to show a basic HTML upload form which can then be enhanced using JS.

## Project setup
1. Clone the repo by running `git@github.com:nienkedekker/vue-progress-spinner.git` in your terminal.
2. Install dependencies with `yarn install`.
3. To run the app locally, run `yarn serve`.
4. To test, run `yarn test`.
5. To lint, run `yarn lint`.
6. To build, run `yarn build`.
