const Subject = require('./Subject');
const Observer = require('./Observer');

const subject = new Subject();

const obs1 = new Observer('Observer 1', subject);
const obs2 = new Observer('Observer 2', subject);

subject.changeState('State 1');

obs2.unsubscribe();

subject.changeState('State 2');
