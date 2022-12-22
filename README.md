# Movie Finder

## About the App

The primary function of this app is to demonstrate skills in developing for mobile with React Native, as well as in interacting with RESTful APIs.

### Features
- Search for movies by title
- Return a list of movies matching search query, displaying title, release year and rating at a glance
- Tap poster image for larger view
- Tap title to open description
- Tap Google icon to initiate Google search of this movie title for further information
- Rating turns red when below 5.0 to alert user that this is a bad movie

### Edge cases handled
- Returns message when no results found
- Subs "N/A" when no rating found
- Returns message when no description found
- Provides fallback image when no poster found

### UI Niceties
- Loading Activity Indicators when fonts and results are being loaded
- Tap X to clear search quickly
- Debouncing to reduce constant calls to API slowing down responsiveness

### Improvements I would make with more time on this project
- Figure out pagination to return more than one page worth of results or enable user to access subsequent pages of data (it's currently only ever returning 20 movies)
- Add navigation to separate pages instead of using modals to expand information
- Improve visual UI in general (feels pretty cluttered at the moment)
- Enable users to filter data by rating, release date, etc.

### About the API

The Movie Database [TMBD API](https://www.themoviedb.org/documentation/api) is a popular, user editable database for movies and TV shows. The API is free as long as credit is attributed per requirements, addressed in footer of this app.


## Screenshots
![Screen 1](https://res.cloudinary.com/dnbyvhety/image/upload/c_scale,w_250/v1671677411/Movie%20Finder%20Screenshots/IMG_9640_o7ahho.png)
![Screen 2](https://res.cloudinary.com/dnbyvhety/image/upload/c_scale,w_250/v1671677411/Movie%20Finder%20Screenshots/IMG_9641_zjqp5c.png)
![Screen 3](https://res.cloudinary.com/dnbyvhety/image/upload/c_scale,w_250/v1671677412/Movie%20Finder%20Screenshots/IMG_9642_oqk4y9.png)
![Screen 4](https://res.cloudinary.com/dnbyvhety/image/upload/c_scale,w_250/v1671677411/Movie%20Finder%20Screenshots/IMG_9643_bjmn5x.png)
![Screen 5](https://res.cloudinary.com/dnbyvhety/image/upload/c_scale,w_250/v1671677411/Movie%20Finder%20Screenshots/IMG_9644_oiztfq.png)
![Screen 6](https://res.cloudinary.com/dnbyvhety/image/upload/c_scale,w_250/v1671677411/Movie%20Finder%20Screenshots/IMG_9645_onsyzv.png)
![Screen 7](https://res.cloudinary.com/dnbyvhety/image/upload/c_scale,w_250/v1671677411/Movie%20Finder%20Screenshots/IMG_9647_u6erev.png)
![Screen 8](https://res.cloudinary.com/dnbyvhety/image/upload/c_scale,w_250/v1671677411/Movie%20Finder%20Screenshots/IMG_9646_aimguv.png)


## Try out on Android or iOS using Expo Go app

Download Expo app to your device and [click here](https://expo.dev/@lauraemilyschell/movie-finder?serviceType=classic&distribution=expo-go) to access app.

## Dependencies

    "expo": "~47.0.8",
    "expo-status-bar": "~1.4.2",
    "react": "18.1.0",
    "react-native": "0.70.5",
    "react-native-dotenv": "^3.4.6",
    "react-native-svg": "13.4.0",
    "react-native-vector-icons": "^9.2.0"

## Installation

1. Clone this repository.
2. Install the Expo command line utility by running `npm install -g expo-cli`.
3. Install dependencies by running `yarn install` or `npm i`.
4. Download [Expo Client](https://apps.apple.com/us/app/expo-client/id982107779) if you would like to test it on a phone.
5. Or simply download [Andriod Studio](https://developer.android.com/studio) or [Xcode](https://apps.apple.com/us/app/xcode/id497799835?mt=12) to have it running on an emulator/simulator on your laptop.
6. Start server by running `expo start`.
7. For testing on phone, scan the QR code that appears in the Expo metro bundler.
