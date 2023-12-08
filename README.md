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

.
└── src/ \
├── app/ \
│ ├── (presenters)/ \
│ │ ├── animeDetailsPresenter.jsx \
│ │ ├── animeListPresenter.jsx \
│ │ ├── backgroundPresenter.jsx \
│ │ ├── locationPresenter.jsx\
│ │ └── loginPresenter.jsx\
│ ├── (views)/\
│ │ ├── animedetails/ \
│ │ │ └── page.jsx \
│ │ ├── animelist/\
│ │ │ └── page.jsx\
│ │ ├── login/\
│ │ │ └── page.jsx\
│ │ ├── animeDetailsView.jsx\
│ │ ├── animeListView.jsx\
│ │ ├── backgroundView.jsx\
│ │ ├── locationView.jsx\
│ │ └── navbarView.jsx\
│ ├── globals.css\
│ ├── layout.js\
│ ├── loading.jsx\
│ └── page.jsx\
├── animeApiConfig.js\
├── animeModel.js\
├── animeSource.js\
├── firebaseModel.js\
├── weatherApiConfig.js\
├── weatherModel.js\
└── weatherSource.js\

# Setup

To run this project, [Node.js](https://nodejs.org/en/) is required.

## Install dependencies

    npm install

## Run project

    npm run dev

## Deploy project

    firebase deploy
