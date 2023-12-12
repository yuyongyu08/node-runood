var fs = require("fs");
var process = require("process");

fs.open("/Users/mac/Documents/log.txt", "w", function (err, fd) {
  console.log(fd);
  while (true) {
    fs.write(fd, process.pid + "\n", function () {});
  }
});
