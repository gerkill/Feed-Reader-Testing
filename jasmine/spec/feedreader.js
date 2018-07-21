/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {

        /* This is our first test - it tests to ensure that the
         * allFeeds variable has been defined and that it is not
         * empty. */
         it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* This test loops through each feed in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('URL is defined, URL is not empty', function() {
           for (i = 0; i < allFeeds.length; i++) {
             expect(allFeeds[i].url).toBeDefined();
             expect(allFeeds[i].url.length).not.toBe(0);
           }
         });

        /* This test loops through each feed in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.*/

         it('name is defined, name is not empty', function() {
           for (i = 0; i < allFeeds.length; i++) {
             expect(allFeeds[i].name).toBeDefined();
             expect(allFeeds[i].name.length).not.toBe(0);
           }
         });    });


    /* This is a new test suite named 'The menu' */

    describe('the menu', function() {

        /* This test ensures that the menu element is
         * hidden by default.
         */
        it('is hidden by default', function() {
          expect($(document.body).hasClass('menu-hidden')).toBe(true);
        });

         /* This test ensures that the menu toggles
          * visibility when the menu icon is clicked. This test
          * has two expectations: does the menu display when
          * clicked? and does it hide when clicked again?
          */
          it('toggles visibility when menu clicked', function() {
          $('a.menu-icon-link').click();
          expect($(document.body).hasClass('menu-hidden')).toBe(false);

          $('a.menu-icon-link').click();
          expect($(document.body).hasClass('menu-hidden')).toBe(true);
        });

      });


    /* This is a new test suite named "Initial Entries" */
    describe('Initial Entries', function() {

    /* This test ensures that tests run after loadFeed is completed */
      beforeEach(function(done) {
        loadFeed(0, done);
      });

    /* This test ensures there is at least one single .entry element within the .feed container */
      it('contains at least one single .entry in feed container', function() {
        expect($('.feed .entry').length).not.toBe(0);
      });

});

    /* This is a new test suite named "New Feed Selection" */

    describe('New Feed Selection', function() {
      let feed;
      let newFeed;

      /*This test ensures that tests run after loadFeed is completed */
        beforeEach(function(done) {
          loadFeed(0, function() {
            feed = $('.feed').html();

              loadFeed(1, function() {
                newFeed = $('.feed').html();
                done();

          });

        });
        });

      /* This test ensures the feed updates with "newFeed" content */
        it('content updates', function() {
          expect(feed).not.toBe(newFeed);
          console.log(feed);
          console.log(newFeed);
        });

    });

}());


