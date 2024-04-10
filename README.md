# angular-interview-exercise

Welcome to the Alaska Airlines Angular coding exercise!

## Getting Started

**Important Note:** If this interview is being performed as a remote coding exercise please have the Prerequisites and Initial Setup complete before attending. You are welcome to familiarize yourself with the codebase and prompt before the interview.

### Prerequisites

You will need the following installed on your local machine:

* The latest LTS version of [Node.js](https://nodejs.org/en/)
* The [Angular CLI](https://angular.io/cli)
* Your editor of choice

### Initial Setup

1. Create a [GitHub account](https://github.com/) if you do not have one already
2. Fork this repository and clone it locally
3. Run `npm install` in the project root
4. Run `ng serve` in a terminal
5. Open your browser and navigate to [http://localhost:4200/](http://localhost:4200/)
6. You should see a simple Angular application.
    * If this interview is being performed as a remote coding exercise you're done with the initial setup. Please feel free to familiarize yourself with the codebase and prompt.

## Prompt

Create a simple Angular application that presents the user with a list of weather stations. When they select one of the stations they are given the current temperature for that station.

### Acceptance Criteria

* Use the [National Weather Service API](https://www.weather.gov/documentation/services-web-api#/default/station_observation_list) to gather weather information.
* Station List can be retrieved from: https://api.weather.gov/stations?limit=100
* Current weather information can be retrieved from: https://api.weather.gov/stations/{StationID}/observations?limit=1

### Keys to Success

Here are a few things to keep in mind as you work through this exercise:

* The code provided is not perfect! We value a "refactor mentality" so don't feel like you should leave the existing skeleton as is.
* Try to exercise quality software engineering practices such as separation of concerns and test automation.
* Please check in early and check in often. We'd like to use your git history to see your process.
* Please do not check your API key in and push it to source control.

