link-id
=======
Get the ID from various media links.

```javascript
var li = require('link-id');
var info = li('http://youtube.com/v/13371337133');
console.log(info);
// { id: '13371337133', type: 'youtube' }
```
