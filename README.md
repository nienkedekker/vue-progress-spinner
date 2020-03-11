# vue-progress-spinner
[![Netlify Status](https://api.netlify.com/api/v1/badges/35611505-c40c-4dfe-b739-7d53756d87b6/deploy-status)](https://app.netlify.com/sites/vigorous-curran-fdf510/deploys)

This is a spinner indicating an upload's progress. It's made in Vue, using Vuex for storing state. A demo can be found [here](https://vigorous-curran-fdf510.netlify.com/).

### Project setup
For those coming from React the setup may be a little different. I've used the Vue equivalent of create-react-app: [vue-cli](https://cli.vuejs.org/).

 `/src` contains the components (`/components`), the store (in `/store`), and global styling (in `/styles`). The app is booted in `main.js`. The first component mounted is `App.vue`, so use that as a starting point.

I'm using [single file components](https://vuejs.org/v2/guide/single-file-components.html), so a single .Vue component contains the template, CSS, and JavaScript. CSS is scoped where necessary, meaning styling in a component is not exposed to other components (so use of BEM is not necessary).
The exception here is `Main.vue`, which contains styles that we do want to share with the other components.

Folders starting with an Uppercase will contain a single component and a test, whereas folders starting with a lowercase will contain multiple components, as recommended by [this blog post](https://medium.com/@alexmngn/how-to-better-organize-your-react-applications-2fd3ea1920f1).

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
6. To build, run `yarn build`. Note that [modern mode](https://cli.vuejs.org/guide/browser-compatibility.html#modern-mode) is used.
