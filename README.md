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
7. Open `environment.ts` and replace the `apiKey` value with your API key.
8. If things are configured correctly you should see text after "Health Ping Result"

## Prompt

Our call center agents are frequently asked to look up flight information when choosing routes for our guests. Use the provided skeleton application build a form for our agents that lets them search for flights and displays the results.

### Acceptance Criteria

* The form has three input fields: Origin, Destination and Flight Date.
  * Origin and Destination are both three letter airport codes, such as "SEA" and "PHX"
  * Flight Date is the departure date that the guest is interested in.
* Results are displayed in a table that shows the Flight Number, Departure Time and Arrival Time.
* Use https://apis.qa.alaskaair.com/aag/1/guestServices/flights to gather the required information. See the example in `flights.service.ts`.

### Keys to Success

Here are a few things to keep in mind as you work through this exercise:

* The code provided is not perfect! We value a "refactor mentality" so don't feel like you should leave the existing skeleton as is.
* Try to exercise quality software engineering practices such as separation of concerns and test automation.
* Please check in early and check in often. We'd like to use your git history to see your process.
* Please do not check your API key in and push it to source control.

## API Key Generation

Candidates can ignore this part, these instructions are for the people giving the interview.

A prerequisite for giving this exercise out is to generate an API key for the candidate to use.

1. Open the QA Gateway (APIM). _Not_ production.
1. Look for the INTERVIEW product
1. Add a new subscription

Your profile page will now have an API key that can be shared with the candidate. Cancel this key after the interview loop is complete.
