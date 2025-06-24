const path = require('path');

console.log(path.sep);

const filePath = path.join('/contect', 'subfolder', 'text.txt')
console.log(filePath);

const absolutePath = path.resolve(__dirname, 'contect','subfolder', 'text.txt')
console.log(absolutePath);