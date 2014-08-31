var ml = require('../index');
var assert = require('assert');

var youTubeExpected = {id: 'you13371337', type: 'youtube'};
var vimeoExpected = {id: '13371337', type: 'vimeo'};
var soundCloudExpected = {id: 'user/media', type: 'soundcloud'};

assert.deepEqual(
   ml('   http://YouTube.com/watch?v=you13371337&tacosammich'),
   youTubeExpected
);

assert.deepEqual(
   ml(' https://youtu.be/you13371337'),
   youTubeExpected
);

assert.deepEqual(
   ml('http://www.youtube.com/embed/you13371337?rel=0'),
   youTubeExpected
);

assert.deepEqual(
   ml('http://www.youtube.com/v/you13371337?fs=2&amp;hl=en_US&rel=0'),
   youTubeExpected
);

assert.deepEqual(
   ml('vImEo.com/13371337'),
   vimeoExpected
);

assert.deepEqual(
   ml('SoundCloud.com/user/media'),
   soundCloudExpected
);

console.log('All tests passed. You are awesome!');
