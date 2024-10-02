const Subject = require('./Subject');
const Observer = require('./Observer');

const subject = new Subject();

const obs1 = new Observer('Observer 1', subject);
const obs2 = new Observer('Observer 2', subject);
const obs3 = new Observer('Observer 3', subject);

subject.addObserver('movie_booking', obs1, {priority: 1});
subject.addObserver('movie_booking', obs1, {priority: 2});

subject.addObserver('concert_booking', obs3, {priority: 5});

subject.triggerEvent('movie_booking', "Dunki");
subject.triggerEvent('concert_booking', "Sunidhi Chauhan");

subject.triggerEvent("movie_booking", "Pathaan");

obs3.unsubscribe(subject, "movie_booking");

subject.triggerEvent("movie_booking", "Cold Play");
