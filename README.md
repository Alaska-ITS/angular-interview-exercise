# ace-interview-exercise

Welcome to the Alaska Airlines ACE coding exercise!

## Getting Started

### Prerequisites

* The latest LTS version of [Node.js](https://nodejs.org/en/)
* The [Angular CLI](https://angular.io/cli)
* Your editor of choice

### Initial Setup

1. Open `environment.ts` and replace the `apiKey` value with your API key
1. Run `ng serve` in a terminal
1. Open your browser and navigate to to [http://localhost:4200/](http://localhost:4200/)
1. If things are configured correctly you should see text after "Health Ping Result"

## Prompt

Our call center agents are frequently asked to look up flight information when choosing routes for our guests. Use the provided skeleton application build a form for our agents that lets them search for flights and displays the results.

### Requirements

* The form has three input fields: Origin, Destination and Flight Date.
  * Origin and Destination are both three letter airport codes, such as "SEA" and "PHX"
  * Flight Date is the departure date that the guest is interested in.
* Results are displayed in a table that shows the Flight Number, Departure Time and Arrival Time.
* Use https://apis.qa.alaskaair.com/aag/1/guestServices/flights to gather the required information. See the example in `flights.service.ts`.

### Keys to Success

Here are a few things to keep in mind as you work through this exercise:

* The code provided is not perfect! We value a "refactor mentality" so don't feel like you should leave the existing skeleton as is.
* Try to exercise quality software engineering practices such as separation of concerns and test automation.
* Please do not check your API key in and push it to source control.
