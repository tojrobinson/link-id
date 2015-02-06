'use strict';

module.exports = function(url) {
   var match = null;
   var info = null;

   // patterns
   var youTube = /youtu.*(?:(?:\.be|v|embed)\/|watch\?.*v=)([^#&?]*).*/i;
   var vimeo = /vimeo.com.*\/(\d+)/i;
   var soundCloud = /soundcloud.com\/([^/?]+\/[^?]+)/i;

   if (match = youTube.exec(url)) {
      info = {
         id: match[1],
         type: 'youtube'
      };
   } else if (match = vimeo.exec(url)) {
      info = {
         id: match[1],
         type: 'vimeo'
      };
   } else if (match = soundCloud.exec(url)) {
      info = {
         id: match[1],
         type: 'soundcloud'
      };
   }

   return info;
}
