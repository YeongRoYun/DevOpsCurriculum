const http = require('http');

const hostname = '127.0.0.1';
const port = 4000;

Function.prototype.range = (beg, end) => {
    const tmp = [];
    for (i = 0; i < end - beg; ++i) {
        tmp[i] = beg + i;
    }
    return tmp;
};

function makePyramid(n) {
    let message = "";
    Function.prototype.range(1,n+1).forEach ( i => {
        message += " ".repeat(n-i);
        message += "*".repeat(2*i-1);
        message += "\n";
    });
    return message;
}

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(makePyramid(parseInt(process.argv[2])));
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

