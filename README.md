# Feed-Reader-Testing
GWG Udacity FEND Project #4

## Unit Testing with Jasmine
This project is part of Udacity's [Front-End Web Developer Nanodegree](https://classroom.udacity.com/nanodegrees/nd001/syllabus/core-curriculum)

#### To use this app:
Download this repository: Click download ZIP on the right of the screen, then extract the zip file to your computer, or clone the repository using git.
Go to where you unzipped the file or cloned the repository.
Double-click index.html to open the app in your browser.


#### Project Description

In this project I wrote JavaScript unit tests using [Jasmine](https://jasmine.github.io/) for an app that calls RSS feeds from several sources.<br>
<b>Test Suite 1</b><br>
is about the RSS feeds definitions and the allFeeds variable in the application.
Within this suite, Test 1 ensures that the allFeeds variable has been defined and that it is not empty. Test 2 loops through each feed in the allFeeds object and ensures it has a URL defined and that the URL is not empty. Test 3 loops through each feed in the allFeeds object and ensures it has a name defined and that the name is not empty.<br>
<b>Test Suite 2</b><br>
is about the Menu.
Within this suite, its first test ensures that the menu element is hidden by default. Its second test ensures that the menu toggles visibility when the menu icon is clicked.<br>
<b>Test Suite 3</b><br> is named Initial Entries. Within this suite, its first test ensures that tests run <i>after</i> loadFeed is completed. Its second test ensures there is at least one single .entry element within the .feed container.<br>
<b>Test Suite 4</b><br>
is about the New Feed Selection. Its first test ensures that tests run <i>after</i> loadFeed is completed. Its second test ensures that the feed updates with "newFeed" content.<br>


