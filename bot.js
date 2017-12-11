console.log('the bot is starting!');
var Twit = require('twit');
var config = require('./config');
var T = new Twit(config);

var stream = T.stream('user');
stream.on('follow', followed);
function followed(eventMsg) {
  var name = eventMsg.source.name;
  var screenName = eventMsg.source.screen_name;
  tweetFollow('.@' + screenName + ' kudos! #JSIsLife');
}

// var params = {
//   q: 'javascript',
//   count: 2
// };
//
// T.get('search/tweets', params, getData);
//
// function getData(err, data, response) {
//   var tweets = data.statuses;
//   for (var i = 0; i < tweets.length; i++) {
//     console.log(tweets[i].text);
//   }
// }

function tweetFollow(txt) {
  var tweet = {
    status: txt
  };

  T.post('statuses/update', tweet, tweeted);

  function tweeted(err, data, response) {
    if (err) {
      console.log('Something went wrong');
    } else {
      console.log('It worked!');
    }
  }
}

function tweetIt() {
  var jsArray = [
    'npm i	 use  Alias for npm install',
    'npm install	 use  Install everything in package.json',
    'npm install  use  lodash	Install a package',
    'npm install --save-dev lodash	 use  Install as devDependency',
    'npm install --save-exact lodash	 use  Install with exact',
    'npm i sax	 use  NPM package',
    'npm i sax@latest	 use  Specify tag latest',
    'npm i sax@3.0.0	 use  Specify version 3.0.0',
    'npm i sax@">=1 <2.0"	 use  Specify version range',
    'npm i @org/sax	 use  Scoped NPM package',
    'npm i user/repo	 use  GitHub',
    'npm i user/repo#master	 use  GitHub',
    'npm i github:user/repo	 use  GitHub',
    'npm i gitlab:user/repo use  GitLab',
    'npm i /path/to/repo	 use  Absolute path',
    'npm i ./archive.tgz	 use  Tarball',
    'npm i https: use  //site.com/archive.tgz	Tarball via HTTP',
    'npm update	 use  Update production packages',
    'npm update --dev	 use  Update dev packages',
    'npm update -g	 use  Update global packages',
    'npm update lodash	 use  Update a package',
    'a1.concat(a2)  use  Return new array by joining arrays a1 and a2 together',
    'a1.join(separator)  use  Join all elements of array a1 into a string separated by separator arg',
    'a1.slice(start, end)  use  Extract a section from start to end of array a1 and return a new array',
    'a1.indexOf(obj)  use  Return first index of obj within array a1',
    'a1.lastIndexOf(obj)  use  Return last index of obj within array a1',
    'a1.forEach(fn)  use  Calls function fn for each element in the array a1',
    'a1.every(fn)  use  Return true if every element in array a1 satisfies provided testing function fn',
    'a1.some(fn)  use  Return true if at least one element in array a1 satisfies provided testing function fn',
    'a1.filter(fn)  use   a new array with all elements of array a1 which pass the filtering function fn',
    'a1.map(fn)  use  Create a new array with results of calling function fn on every element in array a1',
    'a1.reduce(fn)  use  Apply a function fn against an accumulator and each value (from left to right) of the array as to reduce it to a single value',
    'a1.reduceRight(fn)  use  Apply a function fn against an accumulator and each value (from right to left) of the array as to reduce it to a single value',
    'a1.pop()  use  Remove and return last element from array a1',
    'a1.push(obj)  use  Add obj to end of array a1 and return new length',
    'a1.reverse()  use  Reverse order of elements of array a1 in place',
    'a1.sort()  use  Sort the elements of array a1 in place',
    'a1.splice(start, deleteCount, items)  use  Change content of array a1 by removing existing elements and/or adding new elements',
    'a1.unshift(obj)  use  Add obj to start of array a1 and return new length',
    'Array.isArray(var)  use  Return true if var is an array',
    'a1.length  use  Return length of array a1',
    'a1[0]  use  Access first element of array a1',
    'Variables declared with const keyword cannot be reassigned, while let and var can.'
  ];
  var randomizer = Math.floor(Math.random() * 30);

  var tweet = {
    status: '#JSIsLife ' + jsArray[randomizer]
  };

  T.post('statuses/update', tweet, tweeted);

  function tweeted(err, data, response) {
    if (err) {
      console.log('Something went wrong');
    } else {
      console.log('It worked!');
    }
  }
}

//setInterval(tweetIt, 1000 * 30);
