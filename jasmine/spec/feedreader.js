// We're placing all of our tests within the $() function,
// since some of these tests may require DOM elements. We want
// to ensure they don't run until the DOM is ready.

$(function() {

    describe('RSS Feeds', function() {
        // test to make sure that the
        // allFeeds variable has been defined
        // and that it is not empty.

        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        // test that loops through each feed in the
        // allFeeds object and ensures it has a URL defined
        // and that the URL is not empty.

        it('URL is defined and not empty', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            });
        });


        // test that loops through each feed
        // in the allFeeds object and ensures it
        // has a name defined and that the name is not empty.

        it('Name is defined and not empty', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            });
        });
    });

    describe('The menu', function() {
        // test that ensures the menu element is
        // hidden by default.

        it('Menu hidden by default', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
        // test that ensures the menu changes visibility when the
        // menu icon is clicked.

        it('Menu visibility toggled when clicked', function() {
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(false);

            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });

    describe('Initial Entries', function() {
        // test that ensures when the loadFeed function is called and
        // completes its work, there is at least a single .entry
        // element within the .feed container.

        beforeEach(function(done) {
            loadFeed(0, done);
        });

        it('have at least one entry element within the feed', function(done) {
            expect($('.feed .entry').length).toBeGreaterThan(0);
            done();
        });
    });
    describe('New Feed Selection', function() {
        // test ensures when a new feed is loaded by the loadFeed
        // function, the content actually changes.
        var feed;

        beforeEach(function(done) {
            loadFeed(1, function() {
                feed = $('.feed').html();
                done();
            });
        });

        it('check if new feed is loaded', function(done) {
            loadFeed(0, function() {
                expect($('.feed').html()).not.toEqual(feed);
                done();
            });
        });

    });
}());
