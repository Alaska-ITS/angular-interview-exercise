# Solution

* Hit the API to see the response data and generate models based on that.
* Move the flight service to a services folder for better readability. 
* Create a method in the flights service that accepts arguments: origin, destination, fromDate, toDate. 
* Call that method from the AppComponent to get the data with some random origin, destination, fromDate, toDate.
* Use the data-models that were created previously.

* Create a FlightsFilterFormComponent that let's users input fields that would filter their flight results.
* Flights - Parent - Smart/Container - Service Injected as a Dependency.
    *   FlightsFilterForm - Dumb/Presentation
    *   FlightList - Dumb/Presentation
        *   FlightInfo - Dumb/Presentation

* Implement the form and bind it to the other components.

* Implement routing for flights and status pages.

* Add Unit Tests for the functionality

* Handle error scenario
