console.log('The bot is starting!');

var Twit = require('twit');

var T = new Twit({
  consumer_key:
  consumer_secret:
  access_token:
  access_token_secret:
  timeout_ms:
})

// GET REQUEST - searching on twitter
// object with parameters
var params = {
  q: 'sun',
  count: 5
};
// get request
T.get('search/tweets', params, gotData);
// callback function triggered when data returns from API
function GotData(err, data, response) {
  var tweets = data.statuses;
  for (var i = 0, i < tweets.length; i ++) {
    console.log(tweets[i].text);
  }
}
// T.get('search/tweets', { q: 'banana since:2011-07-11', count: 100 }, function(err, data, response) {
  // console.log(data)
// })

// POST REQUEST - tweeting
//  Tweet object - one parameter
var tweet = {
  status: '#girlswhocode'
}
// Post to the Twitter API
T.post('statuses/update', tweet, tweeted);
// callback function
function tweeted(err, data, response) {
  if (err) {
    console.log("Something went wrong!");
  } else {
    console.log("It worked!");
  }
}

//
// T.post('statuses/update', { status: 'hello world!' }, function(err, data, response) {
// })
