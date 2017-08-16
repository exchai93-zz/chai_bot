console.log('The follow bot is starting!');
// Import npm twit package
var Twit = require('twit');
// Import config.js file
var config = require('./config');
// Make new twit object with config info
var T = new Twit(config);

// Set up a user stream
var stream = T.stream('user');
// Anytime someone follows me - 'on' function assigns a callback
stream.on('follow', followed);

function followed(eventMsg) {
  console.log("Follow event!");
  // JSON data
  var name = eventMsg.source.name;
  var screenName = eventMsg.source.screen_name;
  tweetIt('@' + screenName + ' Thanks for the follow! :)');
}

function tweetIt(txt) {

  var tweet = {
    status: txt
  };

  T.post('statuses/update', tweet, tweeted);
  // Callback function
  function tweeted(err, data, response) {
    if (err) {
      console.log("Something went wrong!");
    } else {
      console.log("It worked!");
    }
  }

}

tweetIt();
// setInterval(tweetIt, 1000*20);

// POST REQUEST - tweeting
//  Tweet object - one parameter
// var tweet = {
//   status: '#girlswhocode'
// };
// // Post to the Twitter API
// T.post('statuses/update', tweet, tweeted);
// // Callback function
// function tweeted(err, data, response) {
//   if (err) {
//     console.log("Something went wrong!");
//   } else {
//     console.log("It worked!");
//   }
// }

//
// T.post('statuses/update', { status: 'hello world!' }, function(err, data, response) {
// })

// GET REQUEST - searching on twitter
// Object with parameters
// var params = {
//   q: 'holiday',
//   count: 5
// };
// // Get request
// T.get('search/tweets', params, gotData);
// // Callback function triggered when data returns from API
// function gotData(err, data, response) {
//   var tweets = data.statuses;
//   for (var i = 0; i < tweets.length; i ++) {
//     console.log(tweets[i].text);
//   }
// }
// T.get('search/tweets', { q: 'banana since:2011-07-11', count: 100 }, function(err, data, response) {
  // console.log(data)
// })
