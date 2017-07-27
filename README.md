<!--WDI started 9:46 ended 10:36 -->

# Introduction

So now we have an idea of how to write tests for our Javascript code with Mocha and Chai.  There is one more type of test that will be really useful for our next project: the asynchronous kind.  Specifically, today we will introduce a couple ways to test a 3rd Party Web API.

## Choose your API

For this lab, we will model these tests with the [ShakeItSpeare API](http://shakeitspeare.com/). Once we're done, you should choose an API that you think will be helpful for your Project, and test that in a similar way.  The structure of the tests will look the same, but you will need to use a different URL and change some of the details to match your API.

## Setup

Just like usual, you will need to create a new node project.  Don't forget to create a folder called `test` and put a `<yourAPIname>_spec.js` file inside it.  See if you can remember how to do this with no directions.

> **Hint:** you should use the `--save-dev` flag to install `mocha` and `chai` so they get saved into `package.json` dependencies (but only for your local machine).   You should use the `--save` flag to install `request` so it will get saved into `package.json` dependencies for all machines.

<!--

Then instructor runs this:

1. mkdir shakes_mocha
2. cd shakes_mocha
2. npm init -y
3. npm install --save-dev mocha chai
4. npm install --save request
4. mkdir test
5. touch test/shakes_spec.js

-->

## Testing our API

Let's start by writing 2 pending tests that should be passing once we have a good request.

- "should receive a 200 / OK HTTP status code"
- "should have a Title in the body"

> **Note**: When you write these tests for yourself, make sure you are checking for fields that you expect your API to return in the body (not necessarily `Title`).


<!--
var expect = require('chai').expect;
var request = require('request');

describe("Shakes", function() {
	it("should return 200 - OK");
	it("should have a Title in the body");
});
-->

Now that we have our tests, let's try to make a request and fail our first test.  [This documentation](https://www.npmjs.com/package/request) has some good examples of making requests with the `request` npm package we used earlier.

A good way to make a failing test is to assert that `true` equals `false`.  If we put this assertion inside our request, we should see some red...

<!--
describe("Shakes", function() {
	it("should return 200 - OK", function() {
		request('http://ShakeItSpeare.com/api/sentence', function (error, response, body) {
		  expect(true).to.eq(false);
		});
	});

	it("should have a Title in the body");
});
-->

...wait, that test passes?  What's going on here?  Well, remember that async Javascript problem?  Here it is again.  Our test runs in its entirety before we get the response back from our API.  When we get the response back, our assertion is too late, and our test sees *no errors*.  Thus, our test passes.

But that's not TDD.  We need to fail our test first.  Please mocha, give us a way to see that beautiful red text again!  Lucky for us, there is such a thing.  It's called the `done` function.

Let us refactor our test using a `done` callback, which will allow us to wait until we get our API result before we close our test.

<!--
describe("Shakes", function() {
	it("should return 200 - OK", function(done) {
		request('http://ShakeItSpeare.com/api/sentence', function (error, response, body) {
		  expect(true).to.eq(false);
		  done();
		});
	});

	it("should have a Title in the body");
});
-->

Yay, our tests are failing!

![](archerFail.jpg)

But we're not actually testing our request.  Lucky for us, there was most of a `200 - OK` test bundled in [the documentation](https://www.npmjs.com/package/request) we were just reading.  There's something in the `response` object we can check against the 200 code.  What is it?

<!--
describe("Shakes", function() {
	it("should return 200 - OK", function(done) {
		request('http://ShakeItSpeare.com/api/sentence', function (error, response, body) {
		  expect(response.statusCode).to.eq(200);
		  done();
		});
	});

	it("should have a Title in the body");
});
-->

Ok, let's do this again.  We need to make sure there is something in our response body.  How would we do that?

<!--
	it("should have a sentence in the body", function(done) {
		request('http://ShakeItSpeare.com/api/sentence', function (error, response, body) {
		  expect(body.sentence).to.not.be.empty;
		  done();
		});
	});
-->

Woo hoo, we're failing again!  But why?  If I `console.log(body)` it definitely looks like there's a title.  What's going wrong?

> **Hint:** What data type is the response?

<!--
	it("should have a sentence in the body", function(done) {
		request('http://ShakeItSpeare.com/api/sentence', function (error, response, body) {
		  if (typeof(body) == "string") {
		  	body = JSON.parse(body);
		  }
		  expect(body.sentence).to.not.be.empty;
		  done();
		});
	});
-->

There, that's better.  Now we have two passing tests.  However, there are a number of ways we can improve these test.  From here, the sky is the limit.  Try the challenges below, then make these tests more refined for your API of choice.

## Challenges

Make sure your tests still pass after you do any *refactoring*.

1. This works great for one query on one API, but this would be **WAY** more useful if we could use this to test a query to any URL.  Make the request URL a variable so you can use this to test a bunch of functionality any time you tweak the URL.
2. Two requests in less than two seconds?  This is a little crazy.  What mocha function can we use to run a request one time and save the response to test in multiple ways later on?  (This is challenging.  Be careful with scope, variable names, and the `done` function here.)
3. A good idea to DRY out your code would be to use only one file to do all your requests and require it here in the test file and elsewhere in your app whenever needed.  Pull the requests into their own file and export them so we can use them anywhere.

## References

- Looking to test your API on the front end?  Have a look at [this article](https://nicolas.perriault.net/code/2013/testing-frontend-javascript-code-using-mocha-chai-and-sinon/).
  - **TLDR: You can use jQuery for an AJAX request and include mocha and chai the same way you include jQuery, i.e. with a `<script>` tag.**
