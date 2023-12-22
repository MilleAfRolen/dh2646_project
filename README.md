# WhimsiWeatherAnimeWhiz

WhimsiWeatherAnimeWhiz is an interactive web application designed to suggest anime based on real-time weather conditions. The website features the ability to load a list of anime depending on the current weather, which is displayed on the front page, upon pressing the "Generate" button. The anime listed can be clicked on in order to get a detail-view of the anime with more information and also a list of recomended anime. A user can also sign-in or sign-up in order to save anime to a "watch later"-list.

The website is built using [Next.js](https://nextjs.org//) and deployed on [Firebase](https://firebase.google.com/).

**[LINK TO APP HERE](https://whimsiweatheranimewhiz--test-xqclsibd.web.app)**

# Progress

--Project finished and deplyed

# File structure

```bash
.
└── src/
    ├── app/
    │   ├── (presenters)/
    │   │   ├── animeDetailsPresenter.jsx
    │   │   ├── animeListPresenter.jsx
    │   │   ├── backgroundPresenter.jsx
    │   │   ├── locationPresenter.jsx
    │   │   ├── navbarPresenter.jsx
    │   │   ├── signinPresenter.jsx
    │   │   ├── signoutPresenter.jsx
    │   │   └── signupPresenter.jsx
    │   ├── (views)/
    │   │   ├── animedetails/
    │   │   │   └── page.jsx
    │   │   ├── animelist/
    │   │   │   └── page.jsx
    │   │   ├── signin/
    │   │   │   └── page.jsx
    │   │   ├── signup/
    │   │   │   └── page.jsx
    │   │   ├── watchlist/
    │   │   │   └── page.jsx
    │   │   ├── animeDetailsView.jsx
    │   │   ├── animeListView.jsx
    │   │   ├── backgroundView.jsx
    │   │   ├── locationView.jsx
    │   │   ├── navbarView.jsx
    │   │   ├── signInView.jsx
    │   │   ├── signUpView.jsx
    │   │   └── watchListView.jsx
    │   ├── globals.css
    │   ├── layout.js
    │   ├── loading.jsx
    │   └── page.jsx
    ├── animeApiConfig.js
    ├── animeModel.js
    ├── animeSource.js
    ├── authentication.js
    ├── firebaseModel.js
    ├── weatherApiConfig.js
    ├── weatherModel.js
    └── weatherSource.js
```

# Short description

- Presenters folder contains all the presenters currently in the project
- Views folder contains all the views as well as the pages for routing
- globals.css is the css file, layout.js contains the inital structure of all the files, loading.jsx is rendered while data is fetched and is in the process of rendering, finally page.jsx is the homepage
- The config files handle API KEY etc. Model files are the models, source files handle API calls and methods.

# Setup

To run this project, [Node.js](https://nodejs.org/en/) is required.

## Install dependencies

    npm install

## Run project

    npm run dev

## Deploy project

    firebase deploy
