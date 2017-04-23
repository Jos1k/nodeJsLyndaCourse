var Person = require('./lib/Person');

var george = new Person('George Washington');
var ben = new Person('Ben Franklin');

ben.emit('speak','You may delay, but time will not.');
george.emit('speak','It is far better to be alone, than to be in a bad company.');