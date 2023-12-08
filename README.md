# WhimsiWeatherAnimeWhiz

WhimsiWeatherAnimeWhiz is an interactive web application designed to suggest anime based on real-time weather conditions. At present, the features include loading an unrelated list of anime upon pressing the "Generate" button. Additionally, the login functionality is under development and not yet finalized.

The website is built using [Next.js](https://nextjs.org//) and deployed on [Firebase](https://firebase.google.com/).

**[LINK TO APP HERE](https://whimsiweatheranimewhiz.web.app)**

# Progress

## Things we have done:

- Implemented the weather API.
- Implemented the anime API.
- Finished the basic layout of the website.
- Finished some of the routing needed for the website.

## Things we will do:

- Finish the login and anime details pages.
- Implement a way to relate the current weather to a list of anime.
- Implement a way to save anime in a favourites list.

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
    │   │   └── loginPresenter.jsx
    │   ├── (views)/
    │   │   ├── animedetails/
    │   │   │   └── page.jsx
    │   │   ├── animelist/
    │   │   │   └── page.jsx
    │   │   ├── login/
    │   │   │   └── page.jsx
    │   │   ├── animeDetailsView.jsx
    │   │   ├── animeListView.jsx
    │   │   ├── backgroundView.jsx
    │   │   ├── locationView.jsx
    │   │   └── navbarView.jsx
    │   ├── globals.css
    │   ├── layout.js
    │   ├── loading.jsx
    │   └── page.jsx
    ├── animeApiConfig.js
    ├── animeModel.js
    ├── animeSource.js
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
