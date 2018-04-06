//generate a 2MB file
const fs = require("fs");
const writeFile = fs.createWriteStream("./file");

for (let i = 0; i <= 1e6; ++i) {
  writeFile.write("00");
}
writeFile.end();
