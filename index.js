//serve the file and stop stream when over 50 %

const http = require("http");
const fs = require("fs");
const server = http.createServer();

server.on("request", (req, res) => {
  const file = fs.createReadStream("./file");
  fs.stat("./file", function(err, stat) {
    const fileSize = stat.size;
    let uploadedSize = 0;
    file.on("data", buffer => {
      uploadedSize += buffer.length;
      res.write(buffer);
      let percetage = (uploadedSize / fileSize * 100).toFixed(2);
      console.log("file download progress" + percetage + "%");
      if (percetage > 50) {
        file.close();
      }
    });
    //
    // file.on("end", () => {
    //   res.end();
    // });
  });
});
server.listen(8080);
